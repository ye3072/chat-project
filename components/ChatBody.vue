<template>
    <div style="bottom:20px; width:100%;">
        <b-card v-for="message in messages" :key="message.id" > 
            <b-media>
            <b-img src="message.img" slot="aside" blank blank-color="#ccc" width="64" alt="placeholder"></b-img>
            <div style="display:inline;">
                <span class="mr-2" style="font-weight:bold;font-size:1.4em;">{{ message.name }}</span>
                <span style="font-size:0.8em;">{{ message.time }}</span>
            </div>
            <p>
                
            </p>
            <p>
                Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>

            <b-media>
                <b-img slot="aside" blank blank-color="#ccc" width="32" alt="placeholder"></b-img>

                <h5 class="mt-0">Nested Media</h5>
                <p class="mb-0">
                Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
                faucibus.
                </p>
            </b-media>
            </b-media>
        </b-card>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            messages: [
                {id: '1', name: 'amy', img: '~/assets/src_amy.png', time:'07-17 2:12 pm', content: 'Hello'},
                {id: '2', name: 'paul', img: '~/assets/src_paul.png', time:'07-17 2:15 pm', content: 'How are you?'},
                {id: '3', name: 'amy', img: '~/assets/src_amy.png', time:'07-17 2:17 pm', content: 'Good, thanx.'},
                {id: '4', name: 'paul', img: '~/assets/src_paul.png', time:'07-17 2:21 pm', content: 'How are you?'}
            ]
        }
    }
}
</script>