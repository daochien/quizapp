import Vue from 'vue';
import VueRouter from 'vue-router';
import { getToken, removeToken } from '@/utils/auth.js';
import { getUser } from '@/apis/auth.js';
import store from '@/store/index.js';

Vue.use(VueRouter);

export const constantRouter = [
    {
        path: '/app',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "js/routes/dashboard" */ '@/pages/Dashboard.vue'),
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: 'course',
                name: 'Course',
                component: () => import(/* webpackChunkName: "js/routes/course" */ '@/pages/course/Manage.vue'),
                redirect: "/app/course/manage",
            },

            {
                path: 'course/manage',
                name: 'CourseManage',
                component: () => import(/* webpackChunkName: "js/routes/course-manage" */ '@/pages/course/Manage.vue')
            }
        ]
    },
    {
        path: '/app/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "js/routes/login" */ '@/pages/auth/Login.vue')
    },
    {
        path: '/app/register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "js/routes/course" */ '@/pages/auth/Register.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouter
});

//check login
router.beforeEach( async (to, from, next) => {
    let token = getToken();
    
    if (to.matched.some(record => record.meta.requiresAuth)) {
        
        if (token) {
            
            try {
                let status = store.getters['user/getIsLogin'];
                
                if(!status) {
                    let { name } = await getUser();
                    store.commit('user/set_is_login', true);
                    store.commit('user/set_name', name);
                }
                next();
                
            } catch(error) {
                store.commit('user/set_is_login', false);
                removeToken();
                next({name: 'Login'});
            }
        } else {
            
            next('app/login');
        }
        
    } else {
        //return;
        if(token) {
            if(to.name === 'Login' || to.name === 'Register') {
                let redirect = from.name ? from.name : 'Dashboard'

                next({name: redirect});
            }
        }
        next();
    }
});

export default router;
