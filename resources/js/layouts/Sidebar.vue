<template>
    <nav class="sidebar sidebar-offcanvas" :class="{'active': activeMenuMobile}" id="sidebar">
        <ul class="nav">
            <li class="nav-item nav-profile">
            <a href="#" class="nav-link">
                <div class="profile-image">
                <img class="img-xs rounded-circle" src="/admin/assets/images/faces/face8.jpg" alt="profile image">
                <div class="dot-indicator bg-success"></div>
                </div>
                <div class="text-wrapper">
                <p class="profile-name">{{ getName }}</p>
                <p class="designation">Premium user</p>
                </div>
            </a>
            </li>
            <li class="nav-item nav-category">Main Menu</li>
            <li class="nav-item">
            <router-link :to="{name: 'Dashboard'}" class="nav-link" href="../../index.html">
                <i class="menu-icon typcn typcn-document-text"></i>
                <span class="menu-title">Dashboard</span>
            </router-link>
            </li>

            <li class="nav-item">
                <router-link :to="{name: 'CourseManage'}" class="nav-link">
                    <i class="menu-icon typcn typcn-shopping-bag"></i>
                    <span class="menu-title">Quản lý khóa học</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'QuestionManage'}">
                    <i class="menu-icon typcn typcn-th-large-outline"></i>
                    <span class="menu-title">Quản lý câu hỏi</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'Media'}">
                    <i class="menu-icon typcn typcn-bell"></i>
                    <span class="menu-title">Quản lý media</span>
                </router-link>
            </li>
        </ul>
    </nav>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters('user', [
            'getName'
        ]),
        ...mapGetters('sidebar', [
            'activeMenuMobile'
        ])
    }
}
</script>
<style scoped>

</style>
