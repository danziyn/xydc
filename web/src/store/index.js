import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      // tel: null,
      tel: null,
      pass: '',
      age: '',
      sex: '暂无信息',
      address: '暂无信息',
      shoporder: [],
      nickname: '',
      // document.body.clientWidth
    },
    page: 0,
    item: {},
    // 存放near.或者xue这些类型
    type: '',
    goodlist: [],

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
