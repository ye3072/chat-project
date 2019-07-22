<template>
    <div style="display:table-cell;vertical-align:middle;">
        <b-form inline>
            <label class="sr-only" for="inline-form-input-username">Username</label>
            <b-input-group class="mb-2 mr-sm-2 mb-sm-0 ml-4 mr-3" style="width:95%;">
            <div class="input-group-prepend">
                <div class="input-group-text" style="color:rgb(125,125,125);" v-on:click="addMessage()"><Icon name="plus"/></div>
            </div>
            <b-input id="inline-form-input-username" style="border-right:0px;" v-bind:placeholder="placeholder"></b-input>
            <div class="input-group-append">
                <div class="input-group-text emo">
                    <Icon name="smile"/>
                    <span v-on:click="addMessage()">
                        <Icon name="paper-plane"/>
                    </span>
                </div>
            </div>
            </b-input-group>
        </b-form>
    </div>
</template>

<script>
import app from '~/pages/index.vue'

export default {
    props: ['placeholder'],
    data: function() {
        app.messages
    },
    methods: {
        addMessage() {
            alert(app.messages);
        }
    }
}
</script>

<style>
    .emo {
        background-color: white;
        color:rgb(125,125,125);
    }
</style>