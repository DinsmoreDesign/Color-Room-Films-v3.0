import Vuex from 'vuex';

import reviews from './modules/reviews.js';
import cta from './modules/cta.js';

const createStore = () => {
    return new Vuex.Store({

        modules: {
            reviews,
            cta
        },
        state: {

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

        }

    })
}

export default createStore
