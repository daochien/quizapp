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
                            <tr v-for="(item, index) in listInfo" :key="index">
                                <td style="width: 10%">
                                    {{ index + 1 }}
                                </td>
                                <td > {{ item.name | limitString }} </td>
                                <td style="width: 10%"> {{ Math.ceil(item.size / (1024 * 1024)) }} mb </td>
                                <td style="width: 30%">
                                    <div class="progress">
                                        <div class="progress-bar bg-success" role="progressbar"
                                        :style="{ width: item.percent + '%'}" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">

                                        </div>
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
import axios from 'axios';
export default {

    data() {
        return {
            media: {
                files: [],
                extentions: '',
            },
            listInfo: [],

        }
    },
    methods: {
        onImageChange(e) {
            try {
                let files = e.target.files || e.dataTransfer.files;
                this.resetData();
                if (!files.length)
                    return;

                for (var i = files.length - 1; i >= 0; i--) {
                    this.media.files.push(files[i]);
                    this.listInfo.push({
                        name: files[i].name,
                        size: files[i].size,
                        type: files[i].type,
                        percent: 0
                    });
                }

                document.getElementById("files").value = [];
            } catch(error) {
                console.log(error);
            }
        },

        async uploadMedia() {
            try {
                if (this.media.files.length > 0) {
                    let self = this;
                    let i = 0;
                    for (i; i < this.media.files.length; i++) {
                        let attachment = this.media.files[i];
                        let data = new FormData();
                        data.append('file', attachment);
                        let result = await upload(data, function(uploadEvent) {
                            self.listInfo[i].percent = Math.round((uploadEvent.loaded / uploadEvent.total)*100);
                        });
                    }
                    this.media.files = [];
                }
            } catch(error) {
                console.log(error);
            }
        },

        removeMedia(index) {
            this.media.files.splice(index, 1);
            this.listInfo.splice(index, 1);
        },
        resetData() {
            this.listInfo = [];
            this.media.files = [];
        }
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

