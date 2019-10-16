<template>
    <div class="col-md-12 row">
        <form class="forms-sample col-md-12">
            <div class="form-group ">
                <div class="input-group">
                    <input type="text" class="form-control file-upload-info" disabled="" placeholder="Upload Media">
                    <span class="input-group-append">
                        <input type="file" ref="file" @change="onImageChange" style="display: none">
                        <button class="file-upload-browse btn btn-info" type="button" @click.prevent="$refs.file.click()">Chọn</button>
                    </span>
                </div>
            </div>
        </form>
        <div class="col-md-12">
            <div class="media-review row">
                <div class="item-review col-md-6">
                    <img :src="media.preview" >
                </div>
            </div>
        </div>
        <div class="col-md-12 text-center">
            <button class="file-upload-browse btn btn-danger" @click.prevent="uploadMedia()">Upload</button>
        </div>
    </div>
</template>
<script>
import { upload } from '@/apis/media.js';
export default {
    data() {
        return {
            media: {
                file: '',
                preview: '',
                extentions: ''
            },
        }
    },
    methods: {
        onImageChange(e) {
            try {
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.media.file = files[0];
                this.createMedia(files[0]);
            } catch(error) {
                console.log(error);
            }
        },

        createMedia(file) {
            let reader = new FileReader();
            let vm = this;
            reader.onload = (e) => {
                // vm.media.file = e.target.result;
            };
            reader.readAsDataURL(file);
            this.media.preview = URL.createObjectURL(file);
        },
        async uploadMedia() {
            try {
                let formData = new FormData();
                formData.append('file', this.media.file);
                let data = await upload(formData);
                console.log(data);
            } catch(error) {
                console.log(error);
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.media-review {
    margin-bottom: 20px;
    .item-review {
        img {
            width: 100%;
        }
    }
}
</style>
