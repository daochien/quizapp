import Vue from 'vue';

function limitString(value) {
    if(value.length < 20) {
        return value;
    } else {
        return value.substring(0, 20) + '...';
    }
}

Vue.filter('limitString', limitString);
