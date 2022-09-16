import apiService from "../../core/services/api.service";

const conversion = {
    state: {
        newMessage: {},
    },
    getters: {
        newMessage: (state) => state.newMessage,
    },
    actions: {
        NEW_MESSAGE({commit}) {
            return new Promise((resolve, reject) => {
                apiService.get("new-message")
                    .then(({data}) => {
                        commit("SET_NEW_MESSAGE", data);
                        resolve();
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
    },
    mutations: {
        SET_NEW_MESSAGE: (state, user) => {
            state.newMessage = user;
        },
    },
};

export default conversion;