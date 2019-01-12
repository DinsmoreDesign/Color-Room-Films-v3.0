export default {

    state: {

        isVisible: false,
        url: '',
        title: '',
        content: ''

    },
    mutations: {

        UPDATE_CTA_IS_VISIBLE(state, isVisible) {

            state.isVisible = isVisible;

        },
        UPDATE_CTA_URL(state, url) {

            state.url = url;

        },
        UPDATE_CTA_TITLE(state, title) {

            state.title = title;

        },
        UPDATE_CTA_CONTENT(state, content) {

            state.content = content;

        }

    },
    actions: {

        updateCallToAction({commit}, { isVisible, url, title, content }) {

            commit('UPDATE_CTA_IS_VISIBLE', isVisible);
            commit('UPDATE_CTA_URL', url);
            commit('UPDATE_CTA_TITLE', title);
            commit('UPDATE_CTA_CONTENT', content);

        }

    }

}