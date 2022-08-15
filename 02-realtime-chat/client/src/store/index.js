import {createStore} from 'vuex'
import auth from './modules/Auth';
import user from './modules/User';
import post from './modules/Post';

const store = createStore({
    modules: {
        auth,
        user,
        post
    }
})

export default store;