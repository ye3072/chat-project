import Vue from 'vue'
import Vuex from 'vuex'

const cookieparser = process.server ? require('cookieparser') : undefined

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: () => ({
    token: ''
  }),
  mutations: {
    SET_TOKEN (state, token) {
      state.token = token
    }
  },
  actions: {
    nuxtServerInit ({ commit }, { req }) {
      let token = null
      if (req.headers.cookie) {
        const parsed = cookieparser.parse(req.headers.cookie)
        try {
          token = parsed['JWT-TOKEN']
        } catch (err) {
          console.log(err);
          // No valid cookie found
        }
      }
      commit('SET_TOKEN', token)
    },
    login ({ commit }, { username, password }) {
      return fetch('/api/login', {
        // Send the client cookies to the server
        credentials: 'same-origin',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: username,
          password: password
        })
      })
      .then((res) => {
        if (res.status === 401) {
          throw new Error('Bad credentials')
        } else {
          return res.json().token
        }
      })
      .then((token) => {
        commit('SET_TOKEN', token)
      })
    },
    logout ({ commit }) {
      return fetch('/api/logout', {
        // Send the client cookies to the server
        credentials: 'same-origin',
        method: 'POST'
      })
      .then(() => {
        commit('SET_TOKEN', null)
      })
    }
  }
})

export default store

// https://nuxtjs.org/examples/auth-routes
// https://nuxtjs.org/examples/auth-external-jwt/