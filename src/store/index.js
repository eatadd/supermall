import {createStore} from 'vuex'

export default createStore({
  state: {
    cartList: []
  },
  getters: {
    cartLength(state) {
      return state.cartList.length
    }
  },
  mutations: {
    addCart(state, payLoad) {
      let loadPayLoad = null;
      for (let item of state.cartList) {
        if (item.iid === payLoad.iid) {
          loadPayLoad = item;
        }
      }
      if (loadPayLoad) {
        loadPayLoad.count += 1;
      } else {
        payLoad.count = 1;
        state.cartList.push(payLoad);
      }
      // state.cartList.push(payLoad);
      console.log(state.cartList);
    }
  },
  actions: {
    upDataCart(e, payload) {
      e.commit('addCart', payload)
    }
  },
  modules: {}
})
