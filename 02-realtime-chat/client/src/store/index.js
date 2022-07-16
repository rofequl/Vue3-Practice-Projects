import {createStore} from 'vuex'
import auth from './modules/Auth';
import user from './modules/User';

const store = createStore({
    modules: {
        auth,
        user,
    }
})

export default store;