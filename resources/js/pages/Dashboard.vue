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
                <div class="content-wrapper"> </div>
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
import SideBar from '@/layouts/Sidebar';
import FooterBar from '@/layouts/Footerbar';
export default {
    components: {
        NavBar,
        SideBar,
        FooterBar
    }
}
</script>
