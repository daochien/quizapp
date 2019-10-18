<template>
    <div class="col-md-12 row">
        <form class="forms-sample col-md-12">
            <div class="form-group ">
                <div class="input-group">
                    <input type="text" class="form-control file-upload-info" disabled="" placeholder="Upload Media">
                    <span class="input-group-append">
                        <input type="file" ref="file" id="files" @change="onImageChange" style="display: none;" multiple>
                        <button class="file-upload-browse btn btn-info" type="button" @click.prevent="$refs.file.click()">Chọn</button>
                    </span>
                </div>
            </div>
        </form>

        <div class="col-md-12">
            <div class="media-review row">
                <div class="item-review col-md-12">
                    <table class="table table-striped">
                        <tbody>
                            <tr v-for="(item, index) in media.files" :key="index">
                                <td style="width: 10%">
                                    {{ index + 1 }}
                                </td>
                                <td > {{ item.name | limitString }} </td>
                                <td style="width: 10%"> {{ Math.ceil(item.size / (1024 * 1024)) }}mb </td>
                                <td style="width: 30%">
                                    <div class="progress">
                                        <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </td>
                                <td style="width: 10%"><i class="fa fa-trash-o" @click="removeMedia(index)"></i></td>
                            </tr>
                        </tbody>
                    </table>
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
                files: [],
                extentions: ''
            },
            data: new FormData(),
        }
    },
    methods: {
        onImageChange(e) {
            try {
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;

                for (var i = files.length - 1; i >= 0; i--) {
                    this.media.files.push(files[i]);
                }

                document.getElementById("files").value = [];
            } catch(error) {
                console.log(error);
            }
        },

        async uploadMedia() {
            try {
                this.prepareFields();
                let data = await upload(this.data);
            } catch(error) {
                console.log(error);
            }
        },

        prepareFields() {
            if (this.media.files.length > 0) {
                for (var i = 0; i < this.media.files.length; i++) {
                    let attachment = this.media.files[i];
                    this.data.append('files[]', attachment);
                }
            }
        },

        removeMedia(index) {
            this.data = new FormData();
            this.media.files.splice(index, 1);
        },

        resetData() {
            this.data = new FormData(); // Reset it completely
            this.media.files = [];
        },

    }
}
</script>
<style lang="scss" scoped>
.media-review {
    margin-bottom: 20px;
    .item-review {
        img {
            width: 50%;
        }
    }
    i {
        font-size: 16px;
        cursor: pointer;
    }
}
</style>

