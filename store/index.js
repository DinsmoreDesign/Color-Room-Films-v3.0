import Vuex from 'vuex';

import cta from './modules/cta.js';
import footer from './modules/footer.js';
import reviews from './modules/reviews.js';
import weddingVideos from './modules/weddingVideos.js';

const createStore = () => {
    return new Vuex.Store({

        modules: {
            cta,
            footer,
            reviews,
            weddingVideos
        },
        state: {

            supportsWebP: false,
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
            },
            navItems: [
                { name: 'HOME', url: '/' },
                { name: 'ABOUT', url: '/about' },
                { name: 'WEDDINGS', url: '/weddings' },
                { name: 'REVIEWS', url: '/reviews' },
                { name: 'CONTACT', url: '/contact' }
            ]

        },
        mutations: {

            UPDATE_SUPPORTS_WEB_P(state, condition) {

                state.supportsWebP = condition;

            }

        },
        actions: {

            async updateSupportsWebP({commit}) {
                
                async function supportsWebp() {

                    if (!self.createImageBitmap) return false;
                    
                    const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
                    const blob = await fetch(webpData).then(r => r.blob());
                    return createImageBitmap(blob).then(() => true, () => false);

                }

                (async () => {

                    if (await supportsWebp()) {

                        console.log('Browser Supports WebP Images');

                        commit('UPDATE_SUPPORTS_WEB_P', true);

                    }
                    else {

                        console.warn('Browser Does NOT Supports WebP Images');

                        commit('UPDATE_SUPPORTS_WEB_P', false);

                    }

                })();

            }

        }

    })
}

export default createStore
