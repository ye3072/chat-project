<template>
    <div style="position:absolute; bottom:20px; width:97%;">
        <b-card>
            <b-media>
            <b-img slot="aside" blank blank-color="#ccc" width="64" alt="placeholder"></b-img>

            <h5 class="mt-0">Media Title</h5>
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
                {id: '1', name: 'amy', img: 'src_amy', time:'07-17 2:12 pm', content: 'Hello'},
                {id: '2', name: 'paul', img: 'src_paul', time:'07-17 2:15 pm', content: 'How are you?'},
                {id: '3', name: 'amy', img: 'src_amy', time:'07-17 2:17 pm', content: 'Good, thanx.'}
            ]
        }
    }
}
</script>