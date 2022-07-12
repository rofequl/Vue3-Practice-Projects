import { createStore } from 'vuex'
import auth from './modules/Auth';

const store = createStore({
  modules:{
    auth,
  }
})

export default store;