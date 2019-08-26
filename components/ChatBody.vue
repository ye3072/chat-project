<template>
    <div>
        <b-media>
            <img :src="message.img" slot="aside" blank-color="#ccc" width="64" height="64"/>
            <div style="display:inline;">
                <span class="mr-2" style="font-weight:bold;font-size:1.4em;">{{ message.name }}</span>
                <span style="font-size:0.8em;">{{ message.time }}</span>
            </div>
            <p>
                {{ message.content }}
            </p>
                <b-media>
                    <b-img slot="aside" blank blank-color="#ccc" width="32" alt="placeholder"
                        src="">
                    </b-img>
                    <h5 class="mt-0">{{ meta }}</h5>
                    <p class="mb-0">
                    </p>
                </b-media>
        </b-media>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    props: ['message'],
    data() {
        return {
            meta: '',
            chatId: '',
            ogUrl: ''
        }
    },
    mounted() {
        /* 가져오는 거 차후에 생각!! */
        this.getMedia()
    },
    methods: {
        getMedia() {
            axios.get('http://127.0.0.1:4000/api/meta/fetch?url=https://webclub.tistory.com/354')
            .then((res) => {
                this.meta = res.data
                var json = JSON.parse(res.data.ogJson)
                console.log(json)
            })
        }
    }
}
</script>
