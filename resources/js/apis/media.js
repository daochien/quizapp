import request from '@/utils/request';
export function upload(data, progress) {
    return new Promise((resolve, reject) => {
        return request({
            url: '/media/upload',
            method: 'post',
            data: data,
            header: {
                'Content-Type': 'multipart/form-data',
            },
            onUploadProgress: progress

        })
        .then((response) => {
            if (response.status) {
                resolve(response.data);
            } else {
                reject({
                    errors: response.errors,
                    message: response.message
                });
            }
        })
        .catch((error) => {
            reject(error)
        })
    });
}
