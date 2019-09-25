import request from '@/utils/request';

export function signIn (data) {
    return new Promise((resolve, reject) => {
        return request({
            url: '/auth/login',
            method: 'post',
            data: data
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