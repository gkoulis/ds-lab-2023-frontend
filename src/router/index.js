import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue';
import { useApplicationStore } from '@/stores/application.js';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            // component: HomeView,
            component: () => import('../views/HomeView.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import('../views/ProfileView.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/students',
            name: 'students',
            component: () => import('../views/StudentsView.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/students/new',
            name: 'student-new',
            component: () => import('../views/CreateStudentView.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/students/:id',
            name: 'student',
            component: () => import('../views/StudentView.vue'),
            meta: { requiresAuth: true },
            children: [
                {
                    path: '',
                    name: 'student-details',
                    component: () => import('../views/StudentDetailsView.vue'),
                    meta: { requiresAuth: true }
                },
                {
                    path: 'courses',
                    name: 'student-courses',
                    component: () => import('../views/StudentCoursesView.vue'),
                    meta: { requiresAuth: true }
                }
            ]
        },
        {
            path: '/course/:id',
            name: 'course',
            component: () => import('../views/CourseView.vue'),
            meta: { requiresAuth: true },
            children: [
                {
                    path: '',
                    name: 'course-details',
                    component: () => import("../views/CourseDetailsView.vue"),
                    meta: { requiresAuth: true },
                },
                {
                    path: 'students',
                    name: 'course-students',
                    component: () => import("../views/CourseStudentsView.vue"),
                    meta: { requiresAuth: true },
                }
            ]
        },
        {
            path: '/courses',
            name: 'courses',
            component: () => import('../views/CoursesView.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginView.vue')
        },
        {
            path: '/logout',
            name: 'logout',
            component: () => import('../views/LogoutView.vue'),
            meta: { requiresAuth: true }
        }
    ]
});

router.beforeEach((to, from, next) => {
    const { isAuthenticated } = useApplicationStore();
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

    if (requiresAuth && !isAuthenticated) {
        console.log('user not authenticated. redirecting to /login');
        next('/login');
    } else {
        next();
    }
});

export default router;
