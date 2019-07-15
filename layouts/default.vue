<template>
  <div>
    <b-row>
      <b-col cols="3">
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
          <b-list-group-item v-for="channel in channels" :key="channel.id" href="/channel"><Icon name="bookmark"/>{{channel.title}}</b-list-group-item>
          <b-list-group-item class="bold"><Icon name="plus"/>Add a channel</b-list-group-item>
          <b-list-group-item class="bold">Direct Messages</b-list-group-item>
          <b-list-group-item><Icon name="heart" style="color:red;"/>Chatbot</b-list-group-item>
          <b-list-group-item v-for="message in messages" :key="message.id" href=""><Icon name="comment"/>{{message.opponent}}</b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col cols="9">
        <nuxt/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
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
        ]
      }
    } 
  }
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
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

</style>

