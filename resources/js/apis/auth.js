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

export function getUser() {
    return new Promise((resolve, reject) => {
        return request({
            url: '/auth/user',
            method: 'get'
        })
        .then((response) => {
            if(response.status) {
                resolve(response.data);
            } else {
                reject(response.message);
            }
        })
        .catch((error) => {
            reject(error)
        })
    });
}

export function logout() {
    return new Promise( (resolve, reject) => {
        return request({
            url: '/auth/logout',
            method: 'post'
        })
        .then((response) => {
            if(response.status) {
                resolve(response.message)
            } else {
                reject(response.message)
            }
        }).catch((error) => {
            reject(error);
        });
    });
}
