import Vue from 'vue';
import VueRouter from 'vue-router';
import { getToken } from '@/utils/auth.js';
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
                await getUser();
                next();
            } catch(error) {
                removeToken();
                next({name: 'Login'});
            }
        } else {
            next('app/login');
        }
    } else {
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
