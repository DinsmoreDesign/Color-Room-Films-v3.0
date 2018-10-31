export default {

    state: {

        isVisible: false,
        content: {
            header: null,
            buttonText: null,
            url: null,
            urlTitle: null
        }

    },
    mutations: {

        UPDATE_IS_VISIBLE(state, condition) {

            state.isVisible = condition;

        },
        UPDATE_CONTENT(state, data) {

            Object.assign(state.content, data);

        }

    },
    actions: {

        updateCallToAction({commit}, { isVisible, content }) {

            if (!isVisible) {

                commit('UPDATE_IS_VISIBLE', false);

            } else {

                commit('UPDATE_IS_VISIBLE', true);
                commit('UPDATE_CONTENT', content);

            }

        }

    }

}