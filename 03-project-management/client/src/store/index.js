import {createStore} from 'vuex'
import auth from "./modules/Auth.js";

const store = createStore({
    modules: {
        auth
    }
})

export default store;