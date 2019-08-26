<template>
    <div>
        <form @submit.prevent="login">
            <div class="row">
                <div class="input-field col s12">
                    <input id="id" v-model="id" class="form-control" placeholder="ID" required="required"/>
                    <label for='id' class="sr-only">ID</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input id="password" v-model="password" type="password" class="form-control" placeholder="Password" required="required"/>
                    <label for="password" class="sr-only">Password</label>
                </div>
            </div>
            <input class="btn" type="submit" value="로그인"/>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
            id : '',
            password : '',
        }
    },
    methods : {
        async login () {
            try {
                await this.$store.dispatch('login', {
                    username: this.id,
                    password: this.password
                })
                location.href = '/';
            } catch (e) {
                console.log(e)
            }
        },
        async logout () {
            try {
                await this.$store.dispatch('logout')
            } catch (e) {
                this.formError = e.message
            }
        }
    },
    fetch ({ store, redirect }) {
        if (store.state.token) {
            return redirect('/')
        }
    }
}
</script>

