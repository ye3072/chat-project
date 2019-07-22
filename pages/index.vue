<template>
    <div>
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
            <b-list-group-item class="pointer" v-for="channel in channels" :key="channel.id" v-on:click="getTitle('hashtag', channel.title)"><Icon name="hashtag"/>
              {{channel.title}}
            </b-list-group-item>
            <b-list-group-item class="bold"><Icon name="plus"/>Add a channel</b-list-group-item>
            <b-list-group-item class="bold">Direct Messages</b-list-group-item> 
            <b-list-group-item><Icon name="heart" style="color:red;"/>Chatbot</b-list-group-item>
            <b-list-group-item class="pointer" v-for="message in messages" :key="message.id" v-on:click="getTitle('comment', message.opponent)"><Icon name="comment"/>
              {{message.opponent}}
            </b-list-group-item>
          </b-list-group>
        </b-col>
        <b-col cols="9" class="pd0">
          <chat-title v-bind:title="title" v-bind:icon="icon"/>
          <div style="height:80%; overflow-y:scroll;">
            <b-card-body ref="content" style="position:relative; height:800px; width:100%; overflow-y:scroll;
                        float:left;">
              <chat-body v-bind:chatMessage="chatMessage"/>
            </b-card-body>
          </div>
          <div style="height:10%;width:100%;display:table;">
            <div style="display:table-cell;vertical-align:middle;">
              <b-form inline>
                  <label class="sr-only" for="inline-form-input-username">Username</label>
                  <b-input-group class="mb-2 mr-sm-2 mb-sm-0 ml-4 mr-3" style="width:95%;">
                  <div class="input-group-prepend">
                      <div class="input-group-text" style="color:rgb(125,125,125);"><Icon name="plus"/></div>
                  </div>
                  <b-input id="inline-form-input-username" style="margin:0px;height:2.4em;border-right:0px;" 
                        v-model="chatInput" v-bind:placeholder="placeholder"></b-input>
                    <div class="input-group-append">
                        <div class="input-group-text emo">
                            <Icon name="smile"/>
                            <span v-on:click="addMessage()">
                                <Icon name="paper-plane"/>
                            </span>
                        </div>
                    </div>
                  </b-input-group>
              </b-form>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
</template>

<script>
import ChatTitle from '~/components/ChatTitle.vue'
import ChatBody from '~/components/ChatBody.vue'
import ChatText from '~/components/ChatText.vue'

export default {
    components: {
      ChatTitle,
      ChatBody,
      ChatText
    },
    data: function() {
      return {
        channels: [
          {id: 1, title: 'general'},
          {id: 2, title: 'article'},
          {id: 3, title: 'daejeon'},
          {id: 4, title: 'seoul'}
        ],
        messages: [
          {id: 1, opponent: 'amy'},
          {id: 2, opponent: 'ashley'},
          {id: 3, opponent: 'edsheeran'},
          {id: 4, opponent: 'tony'}
        ],
        chatInput: null,
        title: 'let\'s talk!',
        icon: null,
        placeholder: 'choose channel',
        chatMessage: [
          {id: 1, name: 'amy', img: '/_nuxt/assets/src_amy.jpg', time:'07-17 2:12 pm', content: 'Hello'},
          {id: 2, name: 'yeongeun', img: '/_nuxt/assets/src_paul.png', time:'07-17 2:15 pm', content: 'How are you?'},
          {id: 3, name: 'amy', img: '/_nuxt/assets/src_amy.jpg', time:'07-17 2:17 pm', content: 'Good, thanx.'},
          {id: 4, name: 'yeongeun', img: '/_nuxt/assets/src_paul.png', time:'07-17 2:21 pm', content: 'Are you busy now?'},
          {id: 5, name: 'amy', img: '/_nuxt/assets/src_amy.jpg', time:'07-17 2:25 pm', content: 'Actually, I\'m busy.. We can talk later.'},
          {id: 6, name: 'yeongeun', img: '/_nuxt/assets/src_paul.png', time:'07-17 2:27 pm', content: 'Oh, I see. I\'ll text you again.'}
        ]
      }
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
      addMessage() {
        this.chatMessage.push({id: this.chatMessage.length + 1, name: 'yeongeun', img: '/_nuxt/assets/src_paul.png', time:'07-17 2:30 pm', content: this.chatInput});
      }
    }
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

