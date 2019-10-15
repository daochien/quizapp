<template>
    <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <form class="form-sample">
                    <h3 class="card-title">Câu hỏi</h3>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Tiêu đề</label>
                        <div class="col-sm-8">
                            <input type="text" class="form-control" v-model="question.title" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Kiểu</label>
                        <div class="col-sm-2">
                            <div class="form-radio">
                                <label class="form-check-label">
                                    <input type="radio" class="form-check-input" name="type_question" value="text" v-model="question.type"> Text
                                    <i class="input-helper"></i>
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-2">
                            <div class="form-radio">
                                <label class="form-check-label">
                                    <input type="radio" class="form-check-input" name="type_question" value="image" v-model="question.type"> Image
                                    <i class="input-helper"></i>
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-2">
                            <div class="form-radio">
                                <label class="form-check-label">
                                    <input type="radio" class="form-check-input" name="type_question" value="video" v-model="question.type"> Video
                                    <i class="input-helper"></i>
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-2">
                            <div class="form-radio">
                                <label class="form-check-label">
                                    <input type="radio" class="form-check-input" name="type_question" value="audio" v-model="question.type"> Audio
                                    <i class="input-helper"></i>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Nội dung</label>
                        <div class="col-sm-8">
                            <textarea class="form-control" v-model="question.content" rows="5"></textarea>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">File upload</label>
                        <div class="col-sm-6">
                            <input type="file" name="img[]" class="file-upload-default">
                            <div class="input-group col-xs-12">
                                <input type="text" class="form-control file-upload-info" disabled="" v-model="question.media" placeholder="Upload File">
                                <span class="input-group-append">
                                    <button class="file-upload-browse btn btn-info" @click.prevent="show('file-manager')">Upload</button>
                                </span>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <h3 class="card-title">
                        Câu trả lời
                        <span class="toggle-show" @click="toggleShowAnswers()">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="21" height="21" fill="white" stroke="#E0E0E0"></rect> <rect x="5" y="10" width="12" height="2" rx="1" fill="#BDBDBD"></rect></svg>
                        </span>
                    </h3>

                    <div class="list-answers row" style="padding-left: 15px;" v-show="showAnswers">
                        <item-question v-for="(item, index) in listAnswers" :key="index" :answer="item" :increments="index"></item-question>
                    </div>
                    <hr>
                    <div class="form-group row">
                        <div class="col-sm-12 text-center">
                            <button class="btn btn-success btn-fw">Tạo mới</button>
                            <button class="btn btn-inverse-danger btn-fw">Hủy bỏ</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <modal name="file-manager" :width="'50%'" :height="'auto'">
            <file-manage></file-manage>
        </modal>
    </div>
</template>
<script>
const ItemQuestion = () => import('@/pages/question/ItemQuestion.vue');
const FileManage = () => import('@/components/modal/FileManage.vue');
export default {
    components: {
        ItemQuestion,
        FileManage
    },
    data() {
        return {
            question: {
                title: '',
                content: '',
                type: 'text',
                media: ''
            },
            showAnswers: true,
            listAnswers: [
                {
                    type: 'text',
                    media: '',
                    content: '',
                    isTrue: false
                },
                {
                    type: 'text',
                    media: '',
                    content: '',
                    isTrue: false
                },
                {
                    type: 'text',
                    media: '',
                    content: '',
                    isTrue: false
                },
                {
                    type: 'text',
                    media: '',
                    content: '',
                    isTrue: false
                }
            ],
            showPopup: false
        }
    },
    methods: {
        toggleShowAnswers() {
            this.showAnswers = !this.showAnswers;
        },
        show (title) {
            this.$modal.show(title);
        },
        hide () {
            this.$modal.hide(title);
        }
    },
    created() {
        let self = this;
        this.$bus.on('add-answer', function(data) {
            self.listAnswers.push(
                {
                    type: 'text',
                    media: '',
                    content: '',
                    isTrue: false
                },
            );
        });

        this.$bus.on('remove-answer', function(index) {

            self.listAnswers.splice(index, 1)
        });
    }
}
</script>
<style lang="scss" scoped>
.toggle-show {
    float: right;
}
</style>

