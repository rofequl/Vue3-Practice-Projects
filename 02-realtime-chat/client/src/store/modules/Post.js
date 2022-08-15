import apiService from "../../core/services/api.service";

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
    },
    mutations: {
        SET_TIMELINE_POST: (state, post) => {
            state.timelinePost = post.post;
            state.postUser = post.user;
        },
    },
};

export default post;