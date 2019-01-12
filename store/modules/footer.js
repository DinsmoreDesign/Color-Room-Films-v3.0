export default {

    state: {

        title: '',
        content: ''

    },
    mutations: {

        UPDATE_FOOTER_TITLE(state, title) {

            state.title = title;

        },
        UPDATE_FOOTER_CONTENT(state, content) {

            state.content = content;

        },

    },
    actions: {

        updateFooter({commit}, { title, content }) {

            commit('UPDATE_FOOTER_TITLE', title);
            commit('UPDATE_FOOTER_CONTENT', content);

        }

    }

}