<template>
    <div class="col-md-12 image-media row">
        <div class="col-xl-3 col-md-4 grid-margin stretch-card" v-for="(item, index) in items" :key="index">
            <div class="card">
                <img class="card-img-top" src="https://www.bootstrapdash.com/demo/star-admin-pro/src/assets/images/dashboard/img_1.jpg" alt="card images">
                <div class="card-body pb-0 info-media">
                    <p class="text-muted">xxx</p>
                    <div class="d-flex align-items-center justify-content-between text-muted border-top py-3 mt-3">
                        <p class="mb-0">May 23, 2018</p>
                    </div>
                </div>
            </div>
            <div class="remove-media">
                <img src="/icons/cancel.png" width="16" height="16">
            </div>
        </div>
        <div class="col-md-12 float-right">
            <nav class="float-right">
                <ul class="pagination rounded-separated pagination-danger">
                    <li class="page-item">
                        <a class="page-link" href="#">
                            <i class="mdi mdi-chevron-left"></i>
                        </a>
                    </li>
                    <li class="page-item active">
                        <a class="page-link" href="#">1</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">2</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">3</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">4</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">
                            <i class="mdi mdi-chevron-right"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            items: 6
        }
    }
}
</script>
<style lang="scss" scoped>
.image-media {
    .stretch-card {
        position: relative;
        .remove-media {
            position: absolute;
            right: 8px;
            top: -12px;
            cursor: pointer;
        }
    }
    .info-media {
        padding: 10px;
    }
}

</style>
