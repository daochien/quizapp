<template>
    <div class="container-scroller">
        <!-- partial:../../partials/_navbar.html -->
        <nav-bar></nav-bar>
        <!-- partial -->
        <div class="container-fluid page-body-wrapper">
            <!-- partial:../../partials/_sidebar.html -->
            <side-bar></side-bar>
            <!-- partial -->
            <div class="main-panel">
                <div class="content-wrapper">
                    <div class="row page-title-header">
                        <div class="col-12">
                            <div class="page-header">
                                <div class="quick-link-wrapper w-100 d-md-flex flex-md-wrap">
                                    <ul class="quick-links">
                                        <li v-for="(item, index) in getbreadcrumb" :key="index">
                                            <router-link :to="{name: item.name}">{{ item.meta.title }}</router-link>
                                        </li>
                                    </ul>
                                    <ul class="quick-links ml-auto">
                                        <li><a href="#">Settings</a></li>
                                        <li><a href="#">Analytics</a></li>
                                        <li><a href="#">Watchlist</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <router-view></router-view>
                </div>
                <!-- content-wrapper ends -->
                <!-- partial:../../partials/_footer.html -->
                <footer-bar></footer-bar>
                <!-- partial -->
            </div>
            <!-- main-panel ends -->
        </div>
        <!-- page-body-wrapper ends -->
    </div>
</template>
<script>
import NavBar from '@/layouts/Navbar';
import SideBar from '@/layouts/SideBar';
import FooterBar from '@/layouts/FooterBar';

export default {
    components: {
        NavBar,
        SideBar,
        FooterBar
    },
    computed: {
        getbreadcrumb() {
            return this.$route.matched;
        }
    },
    created() {

    }
}
</script>
