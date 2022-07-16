import apiService from "../../core/services/api.service";
import {crypt} from "../../core/plugins/encription";

const user = {
    state: {
        knowPeople: {},
    },
    getters: {
        knowPeople: (state) => state.knowPeople,
    },
    actions: {
        KNOW_PEOPLE({commit}) {
            return new Promise((resolve, reject) => {
                apiService.get("all-user")
                    .then(({data}) => {
                        commit("SET_KNOW_PEOPLE", data);
                        resolve();
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },

        FOLLOW_PEOPLE({commit}, userid) {
            return new Promise((resolve, reject) => {
                apiService.put(`user/${crypt('16cc6b8a68713948a580131e782c201ab1db5e00b4bbf39acdef48a6765b59f0', userid)}/follow`)
                    .then(({data}) => {
                        if (data.success && data.success === true) {
                            commit('SET_FOLLOWING', userid);
                        }
                        resolve();
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },

        UNFOLLOW_PEOPLE({commit}, userid) {
            return new Promise((resolve, reject) => {
                apiService.put(`user/${crypt('16cc6b8a68713948a580131e782c201ab1db5e00b4bbf39acdef48a6765b59f0', userid)}/unfollow`)
                    .then(({data}) => {
                        if (data.success && data.success === true) {
                            commit('REMOVE_FOLLOWING', userid);
                        }
                        resolve();
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
    },
    mutations: {
        SET_KNOW_PEOPLE: (state, user) => {
            state.knowPeople = user;
        },
    },
};

export default user;