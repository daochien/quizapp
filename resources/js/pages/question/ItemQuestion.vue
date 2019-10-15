<template>
    <div class="col-md-6 item-answer">
        <div class="form-group">
            <label>Đáp án {{ increments + 1 }}</label>
            <label class="remove-item-answer" v-if=" increments > 0" @click="removeAnswer(increments)">Xóa</label>
            <label class="add-item-answer" v-else @click="addAnswer()">Thêm</label>
        </div>
        <div class="form-group">
            <select class="form-control" v-model="answer.type">
                <option value="text">Text</option>
                <option value="media">Media</option>
            </select>
        </div>
        <div class="form-group" v-show="answer.type === 'media'">
            <div class="col-sm-12 row">
                <input type="text" v-model="answer.media" name="img[]" class="file-upload-default">
                <div class="input-group col-xs-12">
                    <input type="text" class="form-control file-upload-info" disabled="" placeholder="Upload File">
                    <span class="input-group-append">
                        <button class="file-upload-browse btn btn-info">Upload</button>
                    </span>
                </div>
            </div>
        </div>
        <div class="form-group" v-show="answer.type === 'media'">
            <div class="col-sm-12 row">
                <img src="https://www.bootstrapdash.com/demo/star-admin-pro/src/assets/images/dashboard/img_2.jpg" class="card-img-top">
            </div>
        </div>
        <div class="form-group">
            <textarea class="form-control" placeholder="Đáp án..." v-model="answer.content" rows="3"></textarea>
        </div>
        <div class="form-group">
            <div class="form-check form-check-flat">
                <label class="form-check-label">
                <input type="checkbox" class="form-check-input" v-model="answer.isTrue"> Đúng <i class="input-helper"></i></label>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        'increments': Number,
        'answer': Object
    },
    data() {
        return {
            showUpload: false
        }
    },
    methods: {
        addAnswer() {
            this.$bus.emit('add-answer', true);
        },
        removeAnswer(index) {
            this.$bus.emit('remove-answer', index);
        }
    }
}
</script>
<style lang="scss" scoped>
.item-answer {
    // min-height: 500px;
    .remove-item-answer {
        float: right;
        color: red;
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }
    .add-item-answer {
        float: right;
        color: #0099ff;
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }
}
</style>
