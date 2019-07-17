<template>
    <div style="display:table-cell;vertical-align:middle;">
        <b-form inline>
            <label class="sr-only" for="inline-form-input-username">Username</label>
            <b-input-group class="mb-2 mr-sm-2 mb-sm-0 ml-4 mr-3" style="width:95%;">
            <div class="input-group-prepend">
                <div class="input-group-text" style="color:rgb(125,125,125);"><Icon name="plus"/></div>
            </div>
            <b-input id="inline-form-input-username" style="border-right:0px;" placeholder="Username"></b-input>
            <div class="input-group-append">
                <div class="input-group-text emo"><Icon name="smile"/></div>
            </div>
            </b-input-group>
        </b-form>
    </div>
</template>

<style>
    .emo {
        background-color: white;
        color:rgb(125,125,125);
    }
</style>