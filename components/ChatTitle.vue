<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand>
                <span v-if="icon === 'hashtag'">
                    <Icon name="hashtag"/>
                </span>
                <span v-if="icon === 'comment'">
                    <Icon name="comment"/>
                </span>
                {{title}}
            </b-navbar-brand>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto mr-2" style="color:white;">
                <b-nav-form>
                    <Icon name="info-circle"/>
                    <Icon name="cog"/>
                    <b-form-input size="sm" class="mr-sm-2 ml-1" placeholder="Search"></b-form-input>
                    <Icon name="at"/>
                    <Icon name="star"/>
                    <Icon name="paperclip"/>
                </b-nav-form>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>
export default {
    props: ['title', 'icon']
}
</script>

<style>
    .fa-icon {
        margin-right: 5px;
        margin-left: 5px;
    }
</style>