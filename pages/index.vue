<template>
    <div>
      <b-modal id="modal-prevent-closing" ref="modal" title="Add a channel"
        centered size="xl"
        @show="resetModal" @hidden="resetModal" @ok="handleOk">
        <form ref="channelForm" @submit.stop.prevent="handleSubmit">
          <b-form-group :state="nameState" label="Name"
            label-for="name-input" invalid-feedback="Name is required">
            <b-form-input id="name-input" name="name" v-model="name" :state="nameState" required ></b-form-input>
          </b-form-group>
          <b-form-group label="Content" label-for="cont-input">
            <b-form-textarea id="cont-input" name="content" v-model="content" rows="3" style="height:100%;">
            </b-form-textarea>
          </b-form-group>
        </form>
      </b-modal>
      <b-modal id="modal-prevent-closing-user" ref="modal" title="Add a user"
        centered size="md"
        @show="resetUserModal" @hidden="resetUserModal" @ok="handleUser">
        <form ref="userForm" @submit.stop.prevent="handleUserSubmit">
          {{ checkedUserList.id }}
          <b-input-group>
            <b-form-input id="searchUser"></b-form-input>
            <b-input-group-append>
              <b-button @click="findUser"><Icon name="search" style="margin-top:-5px;"/></b-button>
            </b-input-group-append>
          </b-input-group>
          <b-list-group style="height:300px;">
            <b-list-group-item class="pointer">
            <span v-for="n in Object.keys(searchUserList).length" :key="'searchUsr-'+n">
              <b-form-checkbox-group v-model="checkedUserList.id">
                <b-form-checkbox size="lg" :value="searchUserList[n-1].id">
                  {{ searchUserList[n-1].id }}
                </b-form-checkbox>
              </b-form-checkbox-group>
            </span>
            </b-list-group-item>
          </b-list-group>
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
                @click="getTitle('hashtag', channels[n-1].name, n-1)"><Icon name="hashtag"/>
              {{ channels[n-1].name }}
            </b-list-group-item>
            <b-list-group-item class="bold pointer" v-b-modal.modal-prevent-closing>
              <Icon name="plus"/>Add a channel
            </b-list-group-item>
            <b-list-group-item class="bold">Direct Messages</b-list-group-item>
            <b-list-group-item><Icon name="heart" style="color:red;"/>Chatbot</b-list-group-item>
            <b-list-group-item class="pointer"
                v-for="n in Object.keys(user).length" :key="'usr-'+n"
                @click="getTitle('comment', user[n-1].id, n-1)"><Icon name="comment"/>
              {{ user[n-1].id }}
            </b-list-group-item>
            <b-list-group-item class="bold pointer" v-b-modal.modal-prevent-closing-user>
              <Icon name="plus"/>Add a User
            </b-list-group-item>
          </b-list-group>
        </b-col>
        <b-col cols="9" class="pd0">
          <chat-title :title="title" :icon="icon"/>
          <div style="height:90%; overflow-y:scroll;">
            <b-card-body ref="content" style="position:relative; height:700px; width:100%; overflow-y:scroll; float:left;">
              <div style="width:100%;">
                <b-card v-for="message in chatMessage" :key="message.id" style="border:0px;"> 
                  <chat-body :message="message"/>
                </b-card>
              </div>
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
  /*
    middleware: 'auth',
    */
    components: {
      ChatTitle,
      ChatBody
    },
    data: function() {
      return {
        channels: [],
        channelId: '',
        user: [],
        searchUserList: [],
        checkedUserList: [],
        chatMessage: [
          {id: 1, name: 'amy', img: '/images/src_amy.jpg', time:'07-17 12:12', content: 'Do you have anything in particular you\'d like for dinner?'},
          {id: 2, name: 'yeongeun', img: '/images/src_paul.png', time:'07-17 12:15', content: 'I\'d love that whole chicken in a soup, Korean style. It\'s really delicious'},
          {id: 3, name: 'amy', img: '/images/src_amy.jpg', time:'07-17 12:17', content: 'OK. I\m not certain I can find that restaurant again, though.'},
          {id: 4, name: 'yeongeun', img: '/images/src_paul.png', time:'07-17 12:21', content: 'I\m getting hungry just thinking about it.'},
          {id: 5, name: 'yeongeun', img: '/images/src_paul.png', time:'07-17 12:25', content: 'But, I\m not sure I can take hot food because it it getting hotter.'},
          {id: 6, name: 'amy', img: '/images/src_amy.jpg', time:'07-17 12:27', content: 'I love tha Korean noodles in cold water.'}
        ],
        chatInput: '',
        name: '',
        nameState: null,
        content: '',
        icon: null,
        title: 'let\'s talk!',
        placeholder: 'choose channel',
      }
    },
    methods: {
      getTitle(icon, title, idx) {
        this.title = title
        this.icon = icon
        if(icon === 'hashtag') {
          this.placeholder = 'Message # ' + title
          this.channelId = this.channels[idx].id
        } else {
          this.placeholder = 'Message to ' + title
        }
      },
      addMessage() {
        var today = new Date()
        var month = '0' + eval(today.getMonth()+1)
        var date = '0' + today.getDate()
        var tmp_time = month.slice(-2) + '-' + date.slice(-2) + ' ' + today.getHours() + ':' + today.getMinutes()
        this.chatMessage.push({id: this.chatMessage.length + 1,
                              name: 'yeongeun',
                              img: '/images/src_paul.png',
                              time: tmp_time,
                              content: this.chatInput})
        axios.post('http://localhost:4000/api/chat/insert', {
          channelId: this.channelId,
          time: tmp_time,
          content: this.chatInput
        })
        this.chatInput = null;
        this.$nextTick(() => {
          scrollDown()
        })
      },
      addChannel() {

      },
      findUser() {
        axios.get('http://localhost:4000/api/user/find?id=' + this.$refs.userForm.searchUser.value)
        .then(function(res){
          console.log(res.data)
          this.searchUserList = res.data
        }.bind(this))
        .catch(function(e){
          console.log(e.response)
        })
      },
      getUser(userId) {
        this.checkedUserList.push(
          {id: userId}
          )
      },
      resetModal() {
        this.name = ''
        this.nameState = null
        this.content = ''
      },
      resetUserModal() {
        this.searchUser = ''
        this.searchUserList = []
        this.checkedUserList = []
      },
      handleUser() {
        axios.post('http://127.0.0.1:4000/api/user/insert', {
          checkedUserList
        })
        .then(function(res){
          console.log(res)
        })
        .catch(function(e){
          console.log(e)
        })
      },
      handleUserSubmit() {
        
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        this.handleSubmit()
      },
      handleSubmit() {
        //console.log(this.$refs.channelForm);
        axios.post('http://127.0.0.1:4000/api/channel/insert', {
          name: this.$refs.channelForm.name.value,
          content: this.$refs.channelForm.content.value
        })
        .then(function(res){
          console.log(res.status)
          // TODO 채널 갱신
        })
        .catch(function(e){
          console.log(e)
        })

        this.$nextTick(() => {
          this.$refs.modal.hide()
        })
      }
    },
    /*fetch ({ store, redirect }) {
      if (!store.state.token) {
        return redirect('/loginform')
      }
    },*/
    async asyncData (context) {
      let res = await axios.get('http://127.0.0.1:4000/api/channel/list')
      console.log(res.data);
      var usr = await axios.get('http://127.0.0.1:4000/api/user/list')
      console.log(usr.data);
      return {
          user : usr.data, 
          channels : res.data
        }
    }
}

function scrollDown() {
  var cardBody = document.querySelector('.card-body')
  if(cardBody !== null) {
    cardBody.scrollTo(0, cardBody.scrollHeight)
  }
}
</script>

<style src="~/static/css/index.css" scoped/>

