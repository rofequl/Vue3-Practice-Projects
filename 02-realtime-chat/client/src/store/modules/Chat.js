import apiService from "../../core/services/api.service";
import {crypt} from "../../core/plugins/encription";

const chat = {
    state: {
        chatUser: {},
        chatUserMessage: {},
    },
    getters: {
        chatUser: (state) => state.chatUser,
        chatUserMessage: (state) => state.chatUserMessage,
    },
    actions: {
        //New message action
        CHAT_BOX_MESSAGE({commit, dispatch}, user) {
            //if chatId exist get all message or send to new message
            if (user.chatId) {
                commit('SET_CHAT_USER', user);
                dispatch('GET_USER_MESSAGE', user.chatId)
            } else {
                commit('SET_CHAT_USER', user);
            }
        },
        //Get all chat message data
        GET_USER_MESSAGE({commit}, chatId) {
            return new Promise((resolve, reject) => {
                apiService.get(`message/${crypt('16cc6b8a68713948a580131e782c201ab1db5e00b4bbf39acdef48a6765b59f0', chatId)}`)
                    .then(({data}) => {
                        commit("SET_CHAT_USER_MESSAGE", data);
                        resolve();
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        }
    },
    mutations: {
        SET_CHAT_USER: (state, user) => {
            state.chatUser = user;
        },
        SET_CHAT_USER_MESSAGE: (state, message) => {
            state.chatUserMessage = message;
        },
    },
};

export default chat;