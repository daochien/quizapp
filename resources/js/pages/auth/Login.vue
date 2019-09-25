<template>
    <div class="container-scroller">
        <div class="container-fluid page-body-wrapper full-page-wrapper">
            <div class="content-wrapper d-flex align-items-center auth auth-bg-1 theme-one">
                <div class="row w-100">
                    <div class="col-lg-4 mx-auto">
                        <div class="auto-form-wrapper">
                            <form @submit.prevent="login()">
                                <div class="form-group" :class="[ errors.email && user.email.length == 0 ? 'has-danger' : '']">
                                    <label class="label">Email</label>
                                    <div class="input-group">
                                        <input type="text" v-model="user.email" class="form-control" placeholder="Email">
                                        <div class="input-group-append">
                                            <span class="input-group-text">
                                                <i class="mdi mdi-check-circle-outline"></i>
                                            </span>
                                        </div>
                                         <!-- <span v-if="errors.email && user.email.length == 0" :class="['label label-danger']">{{ errors.email[0] }}</span> -->
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="label">Password</label>
                                    <div class="input-group">
                                        <input type="password" v-model="user.password" class="form-control" placeholder="*********">
                                            <div class="input-group-append">
                                            <span class="input-group-text">
                                                <i class="mdi mdi-check-circle-outline"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-primary submit-btn btn-block">Login</button>
                                </div>
                                <div class="form-group d-flex justify-content-between">
                                    <div class="form-check form-check-flat mt-0">
                                        <label class="form-check-label">
                                        <input type="checkbox" v-model="user.remember_me" value="1" class="form-check-input" checked> Keep me signed in </label>
                                    </div>
                                    <a href="#" class="text-small forgot-password text-black">Forgot Password</a>
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-block g-login">
                                        <img class="mr-3" :src="'/admin/assets/images/file-icons/icon-google.svg'" alt="">Log in with Google</button>
                                    </div>
                                <div class="text-block text-center my-3">
                                    <span class="text-small font-weight-semibold">Not a member ?</span>
                                    <router-link :to="{name: 'Register'}" class="text-black text-small">Create new account</router-link>
                                </div>
                            </form>
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
export default {
    data () {
        return {
            user: {
                email: '',
                password: '',
                remember_me: 0
            },
            errors: '',
            message: ''
        }
    },
    methods: {
        /**
         * function login
         * @param object user
         * @return response
        */
        async login () {
            try {
                let data = await signIn(this.user);
                console.log(data);
            } catch(err) {
                this.errors = err.errors ? err.errors : [];
                this.message = err.message;
            }
        }
    }
}
</script>
