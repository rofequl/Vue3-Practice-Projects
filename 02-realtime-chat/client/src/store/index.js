import {createStore} from 'vuex'
import auth from './modules/Auth';
import user from './modules/User';
import post from './modules/Post';
import conversion from './modules/Conversion';
import chat from './modules/Chat';

const store = createStore({
    modules: {
        auth,
        user,
        post,
        conversion,
        chat
    }
})

export default store;