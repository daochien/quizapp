<template>
    <div class="container-scroller">
        <div class="container-fluid page-body-wrapper full-page-wrapper">
            <div class="content-wrapper d-flex align-items-center auth auth-bg-1 theme-one">
                <div class="row w-100">
                    <div class="col-lg-4 mx-auto">
                        <div class="auto-form-wrapper">
                            <div class="alert alert-danger" role="alert" v-if="error_msg">
                                {{this.error_msg}}
                            </div>
                            <!-- <form @submit.prevent="login()"> -->
                                <div class="form-group" :class="[ errors.email && user.email.length == 0 ? 'has-danger' : '']">
                                    <label for="Email">Email</label>
                                    <input type="text" v-model="user.email" class="form-control login-input" placeholder="Email" id="Email">
                                    <span v-if="errors.email && user.email.length == 0" :class="['label label-danger']">{{ errors.email[0] }}</span>
                                </div>
                                <div class="form-group" :class="[ errors.password && user.password.length == 0 ? 'has-danger' : '']">
                                    <label for="Password">Password</label>
                                    <input type="password" v-model="user.password" class="form-control login-input" placeholder="*********" id="EmaPasswordil">
                                    <span v-if="errors.password && user.password.length == 0" :class="['label label-danger']">{{ errors.password[0] }}</span>
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-primary submit-btn btn-block" @click="login()">Login</button>
                                </div>
                                <div class="form-group d-flex justify-content-between">
                                    <div class="form-check form-check-flat mt-0">
                                        <label class="form-check-label">
                                        <input type="checkbox" v-model="user.remember_me" value="1" class="form-check-input" checked> Keep me signed in </label>
                                    </div>
                                    <a href="#" class="text-small forgot-password text-black">Forgot Password</a>
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-block g-login" @click="loginByGoogle()">
                                        <img class="mr-3" :src="'/admin/assets/images/file-icons/icon-google.svg'" alt="">Log in with Google</button>
                                    </div>
                                <div class="text-block text-center my-3">
                                    <span class="text-small font-weight-semibold">Not a member ?</span>
                                    <router-link :to="{name: 'Register'}" class="text-black text-small">Create new account</router-link>
                                </div>
                            <!-- </form> -->
                        </div>
                        <ul class="auth-footer">
                            <li>
                                <a href="#">Conditions</a>
                            </li>
                            <li>
                                <a href="#">Help</a>
                            </li>
                            <li>
                                <a href="#">Terms</a>
                            </li>
                        </ul>
                        <p class="footer-text text-center">copyright © 2018 Bootstrapdash. All rights reserved.</p>
                    </div>
                </div>
            </div>
            <!-- content-wrapper ends -->
        </div>
        <!-- page-body-wrapper ends -->
    </div>
</template>
<script>
import { signIn } from '@/apis/auth.js';
import { mapMutations } from 'vuex';
import { setToken } from '@/utils/auth.js';
export default {
    data () {
        return {
            user: {
                email: '',
                password: '',
                remember_me: 0
            },
            errors: '',
            error_msg: ''
        }
    },
    watch: {

    },
    methods: {
        ...mapMutations('user', [
            'set_is_login',
            'set_name'
        ]),

        /**
         * function login
         * @param [sring] email
         * @param [sring] password
         * @return response
        */
        async login () {
            try {
                let { access_token, name } = await signIn(this.user);
                this.set_is_login(true);
                this.set_name(name);
                setToken(access_token);
                
                this.$router.push({ name: 'Dashboard' });
            } catch(err) {
                this.error_msg = err.message ? err.message : '';
                this.errors = err.errors ? err.errors : [];
            }
        },
        loginByGoogle() {
            window.location.href = "/auth/google";
        }
    },
    created() {
        
    }
}
</script>
<style >
/* .has-danger {
    input, select, textarea {
        border-color: #ff6258;
    }
    .label-danger {
        font-size: 12px;
        color: #ff6258;
    }
} */
.alert-danger {
    font-size: 12px;
}
.login-input {
    height: 44px;
}
</style>
