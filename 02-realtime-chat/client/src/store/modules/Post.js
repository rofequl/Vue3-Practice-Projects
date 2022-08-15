import apiService from "../../core/services/api.service";
import {crypt} from "../../core/plugins/encription";

const post = {
    state: {
        timelinePost: {},
        postUser: {},
    },
    getters: {
        timelinePost: (state) => state.timelinePost,
        userInfoById: state => id => state.postUser.find(value => value._id === id),
    },
    actions: {
        CREATE_NEW_POST({commit}, data) {
            return new Promise((resolve, reject) => {
                apiService.post("posts", data)
                    .then(({data}) => {
                        commit("SET_NEW_POST", data);
                        resolve();
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        TIMELINE_POST({commit}) {
            return new Promise((resolve, reject) => {
                apiService.get("posts/timeline")
                    .then(({data}) => {
                        commit("SET_TIMELINE_POST", data);
                        resolve();
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        LIKE_POST({commit}, id) {
            return new Promise((resolve, reject) => {
                apiService.put(`posts/${crypt('16cc6b8a68713948a580131e782c201ab1db5e00b4bbf39acdef48a6765b59f0', id)}/like`)
                    .then(() => {
                        commit("SET_POST_REACT", id);
                        resolve();
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
    },
    mutations: {
        SET_NEW_POST: (state, post) => {
            state.timelinePost.unshift(post);
        },
        SET_TIMELINE_POST: (state, post) => {
            state.timelinePost = post.post;
            state.postUser = post.user;
        },
        SET_POST_REACT: (state, id) => {
            let post = state.timelinePost.find(element => element._id === id);
            post.totalLikes = post.likePost ? post.totalLikes - 1 : post.totalLikes + 1;
            post.likePost = !post.likePost;
        },
    },
};

export default post;