import apiService from "../../core/services/api.service";
import JwtService from "../../core/services/jwt.service";

const auth = {
    state: {
        user: {},
        isAuthenticated: !!JwtService.getToken(),
        isLoad: false,
    },
    getters: {
        isAuthenticated: (state) => state.isAuthenticated,
        currentUser: (state) => state.user,
        isLoadProfile: (state) => state.isLoad,
    },
    actions: {
        REGISTER({commit}, credentials) {
            return new Promise((resolve, reject) => {
                apiService.post("user/signup", credentials)
                    .then(({data}) => {
                        commit("SET_AUTH", data);
                        resolve();
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        LOGIN({commit}, credentials) {
            return new Promise((resolve, reject) => {
                apiService.post("user/login", credentials)
                    .then(({data}) => {
                        commit("SET_AUTH", data);
                        resolve();
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        VERIFY_AUTH({commit, state}) {
            return new Promise((resolve, reject) => {
                if (JwtService.getToken()) {
                    state.isLoad = true
                    apiService.get("user/profile")
                        .then(({data}) => {
                            commit('SET_AUTH_USERS', data.user);
                            resolve();
                        })
                        .catch((error) => {
                            reject(error);
                        })
                } else resolve();
            });
        },
    },
    mutations: {
        SET_AUTH: (state, user) => {
            state.isAuthenticated = true;
            JwtService.saveToken(user.token);
        },
        SET_AUTH_USERS: (state, user) => {
            state.user = user;
        },
    },
};

export default auth;
