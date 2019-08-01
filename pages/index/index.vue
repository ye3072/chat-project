<template>
    <div>
      <b-modal id="modal-prevent-closing" ref="modal" title="Add a channel"
        centered size="xl"
        @show="resetModal" @hidden="resetModal" @ok="handleOk">
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <b-form-group :state="nameState" label="Name"
            label-for="name-input" invalid-feedback="Name is required">
            <b-form-input id="name-input"
              v-model="name" :state="nameState" required >
            </b-form-input>
          </b-form-group>
          <b-form-group label="Content"
            label-for="cont-input">
            <b-form-input id="cont-input" v-model="cont">
            </b-form-input>
          </b-form-group>
        </form>
      </b-modal>
      <b-row>
        <b-col cols="3" class="pd0">
          <b-list-group>
            <b-list-group-item class="bold aligncenter"><Icon name="user"/>YEONGEUN LEE<br>
              <b-input-group>
                <b-form-input></b-form-input>
                <b-input-group-append>
                  <b-button><Icon name="search" style="margin-top:-5px;"/></b-button>
                </b-input-group-append>
              </b-input-group>
            </b-list-group-item>
          </b-list-group>
          <b-list-group>
            <b-list-group-item class="bold">Channels</b-list-group-item>
            <b-list-group-item class="pointer" 
                v-for="n in Object.keys(channels).length" :key="'ch-'+n"
                @click="getTitle('hashtag', channels[n-1].name)"><Icon name="hashtag"/>
              {{ channels[n-1].name }}
            </b-list-group-item>
            <b-list-group-item class="bold pointer" v-b-modal.modal-prevent-closing>
              <Icon name="plus"/>Add a channel
            </b-list-group-item>
            <b-list-group-item class="bold">Direct Messages</b-list-group-item> 
            <b-list-group-item><Icon name="heart" style="color:red;"/>Chatbot</b-list-group-item>
            <b-list-group-item class="pointer" 
                v-for="message in messages" :key="message.id" 
                @click="getTitle('comment', message.opponent)"><Icon name="comment"/>
              {{ message.opponent }}
            </b-list-group-item>
          </b-list-group>
        </b-col>
        <b-col cols="9" class="pd0">
          <chat-title :title="title" :icon="icon"/>
          <div style="height:90%; overflow-y:scroll;">
            <b-card-body ref="content" style="position:relative; height:700px; width:100%; overflow-y:scroll; float:left;">
              <chat-body :chatMessage="chatMessage"/>
            </b-card-body>
          </div>
          <div style="height:10%;width:100%;display:table;">
            <div style="display:table-cell;vertical-align:middle;">
              <label class="sr-only" for="inline-form-input-username">Username</label>
              <b-input-group class="mb-2 mr-sm-2 mb-sm-0 ml-4 mr-3" style="width:95%;">
              <div class="input-group-prepend">
                  <div class="input-group-text" style="color:rgb(125,125,125);"><Icon name="plus"/></div>
              </div>
              <input id="inline-form-input-username" class="form-control" style="margin:0px;height:2.4em;border-right:0px;" type="text"
                      @keyup.enter="addMessage" v-model="chatInput" :placeholder="placeholder"/>
              <div class="input-group-append">
                  <div class="input-group-text emo" style="background-color:white;">
                      <Icon name="smile"/>
                      <span @click="addMessage">
                          <Icon name="paper-plane"/>
                      </span>
                  </div>
              </div>
              </b-input-group>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
</template>

<script>
import axios from 'axios'

import ChatTitle from '~/components/ChatTitle.vue'
import ChatBody from '~/components/ChatBody.vue'

export default {
    components: {
      ChatTitle,
      ChatBody
    },
    data: function() {
      return {
        channels: [],
        messages: [
          {id: 1, opponent: 'amy'},
          {id: 2, opponent: 'ashley'},
          {id: 3, opponent: 'edsheeran'},
          {id: 4, opponent: 'tony'}
        ],
        chatMessage: [
          {id: 1, name: 'amy', img: '/images/src_amy.jpg', time:'07-17 12:12', content: 'Do you have anything in particular you\'d like for dinner?'},
          {id: 2, name: 'yeongeun', img: '/images/src_paul.png', time:'07-17 12:15', content: 'I\'d love that whole chicken in a soup, Korean style. It\'s really delicious'},
          {id: 3, name: 'amy', img: '/images/src_amy.jpg', time:'07-17 12:17', content: 'OK. I\m not certain I can find that restaurant again, though.'},
          {id: 4, name: 'yeongeun', img: '/images/src_paul.png', time:'07-17 12:21', content: 'I\m getting hungry just thinking about it.'},
          {id: 5, name: 'yeongeun', img: '/images/src_paul.png', time:'07-17 12:25', content: 'But, I\m not sure I can take hot food because it it getting hotter.'},
          {id: 6, name: 'amy', img: '/images/src_paul.png', time:'07-17 12:27', content: 'I love tha Korean noodles in cold water.'}
        ],
        chatInput: '',
        icon: null,
        title: 'let\'s talk!',
        placeholder: 'choose channel',
        name: '',
        nameState: null,
        cont: ''
      }
    },
    created: function() {
      
    },
    beforeMount: function() {
      
    },
    mounted: async function() {
      await axios.get("http://localhost:4000/api/channel/list")
        .then(function(res) {
          this.channels = res.data
          console.log(res.data)
        }.bind(this))
        .catch(function (e) {
          console.log(e)
        })
    },
    updated: function() {
      scrollDown()
    },
    methods: {
      getTitle: function(icon, title) {
        this.title = title
        this.icon = icon
        if(icon === 'hashtag') {
          this.placeholder = 'Message # ' + title
        } else {
          this.placeholder = 'Message to ' + title
        }
      },
      addMessage: function() {
        var today = new Date()
        var month = '0' + eval(today.getMonth()+1)
        var date = '0' + today.getDate()
        var tmp_time = month.slice(-2) + '-' + date.slice(-2) + ' ' + today.getHours() + ':' + today.getMinutes()
        this.chatMessage.push({id: this.chatMessage.length + 1, 
                              name: 'yeongeun', 
                              img: '/images/src_paul.png',
                              time: tmp_time, 
                              content: this.chatInput})
        this.chatInput = null;
      },
      addChannel: function() {

      },
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid ? 'valid' : 'invalid'
        return valid
      },
      resetModal() {
        this.name = ''
        this.nameState = null
        this.cont = ''
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // Hide the modal manually
        this.$nextTick(() => {
          this.$refs.modal.hide()
        })
      }
    }
  }

  function scrollDown() {
    var cardBody = document.querySelector('.card-body')
    cardBody.scrollTo(0, cardBody.scrollHeight)
  }

</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.list-group-item {
  border: 0px;
}

.links {
  padding-top: 15px;
}

.fa-icon {
  margin-right: 5px;
  margin-left: 5px;
}

.bold {
  font-weight: bold;
}

.input-group {
  width: 80%;
  margin-left: 10%;
}

.form-control, .input-group-append .btn {
  height: 2em;
  margin-top: 0.3em;
}

.aligncenter {
  text-align: center;
}

.pd0 {
  padding-right: 0px;
  padding-left: 0px;
}

.pointer {
  cursor: pointer;
}
</style>

