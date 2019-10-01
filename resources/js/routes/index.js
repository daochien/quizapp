import Vue from 'vue';
import VueRouter from 'vue-router';
import { getToken, removeToken } from '@/utils/auth.js';
import { getUser } from '@/apis/auth.js';
import store from '@/store/index.js';

Vue.use(VueRouter);

import LoginPage from '@/pages/auth/Login';
import RegisterPage from '@/pages/auth/Register';
import DashboardPage from '@/pages/Dashboard.vue';
import CourseManagePage from '@/pages/course/Manage.vue';

export const constantRouter = [
    {
        path: '/app',
        name: 'Dashboard',
        component: DashboardPage,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: 'course',
                name: 'Course',
                component: CourseManagePage,
                redirect: "/app/course/manage",
            },

            {
                path: 'course/manage',
                name: 'CourseManage',
                component: CourseManagePage
            }
        ]
    },
    {
        path: '/app/login',
        name: 'Login',
        component: LoginPage
    },
    {
        path: '/app/register',
        name: 'Register',
        component: RegisterPage
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
