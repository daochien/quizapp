<template>
    <div class="file-manager-component">

        <div class="col-md-12 text-center">
            <button type="button" class="btn btn-inverse-warning btn-fw" @click="changeFolder('UploadMedia')">Upload Media</button>
            <button type="button" class="btn btn-inverse-success btn-fw" @click="changeFolder('ListImage')">Image</button>
            <button type="button" class="btn btn-inverse-primary btn-fw" @click="changeFolder('ListVideo')">Video</button>
            <button type="button" class="btn btn-inverse-info btn-fw" @click="changeFolder('ListAudio')">Audio</button>
        </div>
        <div class="list-media">
            <keep-alive>
                <component :is="showComponent"></component>
            </keep-alive>
        </div>
    </div>
</template>
<script>
import ListImage from '@/components/media/ListImage.vue';
import UploadMedia from '@/components/media/UploadMedia.vue';
export default {
    name: 'modal',
    components: {
        ListImage,
        UploadMedia
    },
    data() {
        return {
            showComponent: 'UploadMedia'
        }
    },
    methods: {
        close() {
            this.$emit('close');
        },
        changeFolder(component) {
            this.showComponent = component;
        }
    },
}
</script>
<style lang="scss" scoped>
.file-manager-component {
    padding: 20px 10px;
    min-height: 500px;
    .list-media {
        margin-top: 20px;
    }

}
</style>
