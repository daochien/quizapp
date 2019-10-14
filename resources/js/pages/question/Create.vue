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
                                    <button class="file-upload-browse btn btn-info">Upload</button>
                                </span>
                            </div>
                        </div>
                    </div>
                    <h3 class="card-title">Câu trả lời</h3>
                    <div class="list-answers">
                        <div class="item-answer">

                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            question: {
                title: '',
                content: '',
                type: 'text',
                media: ''
            }
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
