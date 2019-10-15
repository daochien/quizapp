<template>
    <div class="col-sm-12 file-manager-component">
        <form class="forms-sample">
            <div class="form-group">
                <input type="file" name="img[]" class="file-upload-default">
                <div class="input-group col-xs-12">
                    <input type="text" class="form-control file-upload-info" disabled="" placeholder="Upload Image">
                    <span class="input-group-append">
                    <button class="file-upload-browse btn btn-info" type="button">Upload</button>
                    </span>
                </div>
            </div>
        </form>
        <div class="col-md-4 grid-margin stretch-card">
            <div class="card">
                <img class="card-img-top" src="https://www.bootstrapdash.com/demo/star-admin-pro/src/assets/images/dashboard/img_1.jpg" alt="card images">
                <div class="card-body pb-0">
                <p class="text-muted">RAGNAROCK- Museet for pop, Roskilde, Denmark</p>
                <h5>It’s good to start or finish the day with delicious pancakes :)</h5>
                <div class="d-flex align-items-center justify-content-between text-muted border-top py-3 mt-3">
                    <p class="mb-0">Published on May 23, 2018</p>
                    <div class="wrapper d-flex align-items-center">
                    <small class="mr-2">93</small>
                    <i class="mdi mdi-heart-outline"></i>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'modal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
}
</script>
<style lang="scss" scoped>
.file-manager-component {
    padding: 20px 10px;
}
</style>
