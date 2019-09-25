import Vue from 'vue';
import VueRouter from 'vue-router';
import { getToken } from '@/utils/auth.js';

Vue.use(VueRouter);

import LoginPage from '@/pages/auth/Login';
import RegisterPage from '@/pages/auth/Register';
import DashboardPage from '@/pages/Dashboard.vue';

export const constantRouter = [
    {
        path: '/app',
        name: 'Dashboard',
        component: DashboardPage,
        meta: {
            requiresAuth: true
        }
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
router.beforeEach( (to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        let token = getToken();
        if (token) {
            console.log('xxx');
        } else {
            next('app/login');
        }
    } else {
        next();
    }
});

export default router;
