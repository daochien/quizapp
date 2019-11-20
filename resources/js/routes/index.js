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
            requiresAuth: true,
            title: 'Dashboard'
        },
        children: [
            {
                path: 'course',
                name: 'Course',
                component: () => import(/* webpackChunkName: "js/routes/course" */ '@/pages/course/Index.vue'),
                redirect: '/app/course/manage',
                meta: {
                    title: 'Khóa học',
                },
                children: [
                    {
                        path: 'manage',
                        name: 'CourseManage',
                        component: () => import(/* webpackChunkName: "js/routes/course-manage" */ '@/pages/course/Manage.vue'),
                        meta: {
                            title: 'Danh sách'
                        },
                    },
                    {
                        path: 'create',
                        name: 'CourseCreate',
                        component: () => import(/* webpackChunkName: "js/routes/course-create" */ '@/pages/course/Create.vue'),
                        meta: {
                            title: 'Thêm mới'
                        },
                    },
                    {
                        path: 'edit/:id',
                        name: 'CourseEdit',
                        component: () => import(/* webpackChunkName: "js/routes/course-edit" */ '@/pages/course/Edit.vue'),
                        meta: {
                            title: 'Chỉnh sửa'
                        },
                    }
                ]
            },

            {
                path: 'question',
                name: 'Question',
                component: () => import(/* webpackChunkName: "js/routes/question" */ '@/pages/question/Index.vue'),
                redirect: '/app/question/manage',
                meta: {
                    title: 'Câu hỏi',
                },
                children: [
                    {
                        path: 'manage',
                        name: 'QuestionManage',
                        component: () => import(/* webpackChunkName: "js/routes/question-manage" */ '@/pages/question/Manage.vue'),
                        meta: {
                            title: 'Danh sách'
                        },
                    },
                    {
                        path: 'create',
                        name: 'QuestionCreate',
                        component: () => import(/* webpackChunkName: "js/routes/question-create" */ '@/pages/question/Create.vue'),
                        meta: {
                            title: 'Thêm mới'
                        },
                    },
                    {
                        path: 'edit/:id',
                        name: 'QuestionEdit',
                        component: () => import(/* webpackChunkName: "js/routes/question-edit" */ '@/pages/question/Edit.vue'),
                        meta: {
                            title: 'Chỉnh sửa'
                        },
                    }
                ]
            },
            {
                path: 'media',
                name: 'Media',
                component: () => import(/* webpackChunkName: "js/routes/media" */ '@/pages/media/Manage.vue'),
                meta: {
                    title: 'Media'
                },
            },
        ]
    },

    {
        path: '*',
        redirect: '/app'
    }
];

const router = new VueRouter({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouter
});

//check login
// router.beforeEach( async (to, from, next) => {
//     let token = getToken();

//     if (to.matched.some(record => record.meta.requiresAuth)) {

//         if (token) {

//             try {
//                 let status = store.getters['user/getIsLogin'];

//                 if(!status) {
//                     let { name, email } = await getUser();
//                     store.commit('user/set_is_login', true);
//                     store.commit('user/set_name', name);
//                     store.commit('user/set_email', email);
//                 }
//                 next();

//             } catch(error) {
//                 store.commit('user/set_is_login', false);
//                 removeToken();
//                 next({name: 'Login'});
//             }
//         } else {

//             next('app/login');
//         }

//     } else {
//         //return;
//         if(token) {
//             if(to.name === 'Login' || to.name === 'Register') {
//                 let redirect = from.name ? from.name : 'Dashboard'

//                 next({name: redirect});
//             }
//         }
//         next();
//     }
// });

export default router;
