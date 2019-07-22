<template>
    <div id="watch-example">
        yes or no 물어보세요:)
        <input v-model="question"/>
        <br/><br/>
        <p>
            {{ answer }}
        </p>
    </div>
</template>
<script>
import _ from 'lodash'
import axios from 'axios'

export default {
    data: function() {
        return {
            question: '',
            answer: '질문을 하기 전까지는 대답할 수 없습니다.'
        }
    },
    watch: {
        question: function(newQuestion) {
            this.answer = '입력을 기다리는 중...'
            this.getAnswer()
        }
    },
    methods: {
        getAnswer: _.debounce(
            function() {
                if (this.question.indexOf('?') === -1) {
                    this.answer = '질문에는 일반적으로 물음표가 포함됩니다.'
                    return
                }
                this.answer = '생각중...'
                var vm = this
                axios.get('https://yesno.wtf/api')
                    .then(function(res) {
                        vm.answer = _.capitalize(res.data.answer)
                    })
                    .catch(function (error) {
                        vm.answer = 'error: API request failed. ' + error
                    })
            },
            500
        )
    }
}
</script>