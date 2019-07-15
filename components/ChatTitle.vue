<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand>
                <span v-if="icon === 'bookmark'">
                    <Icon name="bookmark"/>
                </span>
                <span v-if="icon === 'comment'">
                    <Icon name="comment"/>
                </span>
                {{title}}
            </b-navbar-brand>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0 mr-2" type="submit">Search</b-button>
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