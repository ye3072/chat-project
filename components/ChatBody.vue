<template>
    <div style="width:100%;">
        <b-card v-for="message in chatMessage" :key="message.id" style="border:0px;"> 
            <b-media>
            <img :src="message.img" slot="aside" blank-color="#ccc" width="64" height="64"/>
            <div style="display:inline;">
                <span class="mr-2" style="font-weight:bold;font-size:1.4em;">{{ message.name }}</span>
                <span style="font-size:0.8em;">{{ message.time }}</span>
            </div>
            <p>
                {{ message.content }}
            </p>
                <!-- comment design으로 나중에 쓸 수도 있어

                <b-media>
                    <b-img slot="aside" blank blank-color="#ccc" width="32" alt="placeholder"></b-img>

                    <h5 class="mt-0">Nested Media</h5>
                    <p class="mb-0">
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
                    faucibus.
                    </p>
                </b-media>
                -->
            </b-media>
        </b-card>
    </div>
</template>

<script>
export default {
    props: ['chatMessage'],
    data: function() {
        return {

        }
    }
}
</script>
