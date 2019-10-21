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
            <div data-v-1e41be0b="" role="alert" class="alert alert-danger"
            v-for="(item, index) in errors" :key="index">
                {{item.message}}
            </div>
        </div>
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
                                        <div class="progress-bar" :class="{'bg-success': item.success, 'bg-danger': !item.success}" role="progressbar"
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
        <div class="col-md-12 row list-media-upload-success">
            <div class="col-md-6 grid-margin stretch-card" v-for="(item, index) in uploadSuccess" :key="index">
                <div class="media-upload-image" v-if="item.extension === 'image'">
                    <div class="card">
                        <img class="card-img-top" :src="item.path_cover" alt="card images">
                        <div class="card-body pb-0 info-media">
                            <p class="text-muted">{{ item.name | limitString }}</p>
                            <div class="d-flex align-items-center justify-content-between text-muted border-top py-3 mt-3">
                                <p class="mb-0">{{ item.created_at }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="remove-media">
                        <img src="/icons/cancel.png" width="16" height="16">
                    </div>
                </div>
                <div class="media-upload-image" v-else-if="item.extension === 'video'">
                    <div class="card">
                        <video class="card-img-top" alt="card images" controls height="150">
                            <source :src="item.path" type="video/mp4">
                        </video>
                        <div class="card-body pb-0 info-media">
                            <p class="text-muted">{{ item.name | limitString }}</p>
                            <div class="d-flex align-items-center justify-content-between text-muted border-top py-3 mt-3">
                                <p class="mb-0">{{ item.created_at }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="remove-media">
                        <img src="/icons/cancel.png" width="16" height="16">
                    </div>
                </div>
            </div>
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
            uploadSuccess: [],
            errors: []

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

            if (this.media.files.length > 0) {
                let self = this;
                let i = 0;
                for (i; i < this.media.files.length; i++) {
                    let attachment = this.media.files[i];
                    let data = new FormData();
                    data.append('file', attachment);

                    await upload(data, function(uploadEvent) {
                        self.listInfo[i].percent = Math.round((uploadEvent.loaded / uploadEvent.total)*100);
                    }).then((response) => {
                        if(response.status) {
                            this.listInfo[i].success = true;
                            this.uploadSuccess.push(response.data);
                        } else {
                            this.errors.push(response);
                        }
                    }).catch((error) => {
                        this.errors.push(error);
                    });

                }
                this.media.files = [];
            }

        },

        removeMedia(index) {
            this.media.files.splice(index, 1);
            this.listInfo.splice(index, 1);
        },
        resetData() {
            this.listInfo = [];
            this.media.files = [];
            this.errors = [];
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
.list-media-upload-success {
    margin-top: 20px;
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
.alert-danger {
    font-size: 12px;
}

</style>

