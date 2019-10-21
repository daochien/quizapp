import request from '@/utils/request';
export function upload(data, progress) {
    return request({
        url: '/media/upload',
        method: 'post',
        data: data,
        header: {
            'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: progress
    })
}
