<template>
    <div style="width:100%;">
        <b-card v-for="message in chatMessage" :key="message.id" style="border:0px;"> 
            <b-media>
            <img v-bind:src="message.img" slot="aside" blank-color="#ccc" width="64" height="64"/>
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
            /*
            messages: [
                {id: '1', name: 'amy', img: '/_nuxt/assets/src_amy.jpg', time:'07-17 2:12 pm', content: 'Hello'},
                {id: '2', name: 'yeongeun', img: '/_nuxt/assets/src_paul.png', time:'07-17 2:15 pm', content: 'How are you?'},
                {id: '3', name: 'amy', img: '/_nuxt/assets/src_amy.jpg', time:'07-17 2:17 pm', content: 'Good, thanx.'},
                {id: '4', name: 'yeongeun', img: '/_nuxt/assets/src_paul.png', time:'07-17 2:21 pm', content: 'Are you busy now?'},
                {id: '5', name: 'amy', img: '/_nuxt/assets/src_amy.jpg', time:'07-17 2:25 pm', content: 'Actually, I\'m busy.. We can talk later.'},
                {id: '6', name: 'yeongeun', img: '/_nuxt/assets/src_paul.png', time:'07-17 2:27 pm', content: 'Oh, I see. I\'ll text you again.'},
            ]
            */
        }
    }
}
</script>