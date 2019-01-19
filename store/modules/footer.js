export default {

    state: {

        title: '',
        content: '',
        contactInfo: {
            companyName: 'Color Room Films',
            address: [
                'Jackson, NJ'
            ],
            phoneNumber: '+1.862.221.5716',
            emailAddress: 'info@colorroomfilms.com',
            socialLinks: [
                {
                    url: 'https://www.facebook.com/colorroomfilms/',
                    title: 'Add Color Room Films on Facebook',
                    icon: 'facebook'
                },
                {
                    url: 'https://twitter.com/colorroomfilms',
                    title: 'Follow Color Room Films on Twitter',
                    icon: 'twitter'
                },
                {
                    url: 'https://www.instagram.com/color_room_films/',
                    title: 'Follow Color Room Films on Instagram',
                    icon: 'instagram'
                },
                {
                    url: 'https://vimeo.com/colorroomfilms',
                    title: 'View Color Room Films on Vimeo',
                    icon: 'vimeo'
                }
            ]
        }

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