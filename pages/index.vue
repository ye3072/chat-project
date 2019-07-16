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
          <div style="height:80%;">
            <b-card-body ref="content" style="position:relative; height:100%; overflow-y:scroll;
                        border:1px solid black;">
              
            </b-card-body>
          </div>
          <div style="height:10%;width:100%;display:table;">
            <chat-text/>
          </div>
        </b-col>
      </b-row>
    </div>
</template>

<script>
import ChatTitle from '~/components/ChatTitle.vue'
import ChatBody from '~/components/ChatBody.vue'
import ChatBox from '~/components/ChatBox.vue'
import ChatText from '~/components/ChatText.vue'

export default {
    components: {
      ChatBox,
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
        title: 'let\'s talk!',
        icon: null
      }
    },
    methods: {
      getTitle: function(icon, title) {
        this.title = title
        this.icon = icon
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

