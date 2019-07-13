export default {

    state: {

        selectedVenues: [],
        videos: [
            // Ryland Inn
            {
                bride: 'Jillian',
                groom: 'Kyle',
                venue: 'Ryland Inn',
                jpg: require('~/static/images/thumbs/jillian_kyle.jpg'),
                webp: require('~/static/images/thumbs/jillian_kyle.webp'),
                id: 239835508
            },
            {
                bride: 'Diana',
                groom: 'Joseph',
                venue: 'Ryland Inn',
                jpg: require('~/static/images/thumbs/diana_joseph.jpg'),
                webp: require('~/static/images/thumbs/diana_joseph.webp'),
                id: 311700211
            },
            {
                bride: 'Ashley',
                groom: 'Adam',
                venue: 'Ryland Inn',
                jpg: require('~/static/images/thumbs/ashley_adam.jpg'),
                webp: require('~/static/images/thumbs/ashley_adam.webp'),
                id: 293412835
            },
            {
                bride: 'Michelle',
                groom: 'Jason',
                venue: 'Ryland Inn',
                jpg: require('~/static/images/thumbs/michelle_jason.jpg'),
                webp: require('~/static/images/thumbs/michelle_jason.webp'),
                id: 264474322
            },
            {
                bride: 'Claire',
                groom: 'Michael',
                venue: 'Ryland Inn',
                jpg: require('~/static/images/thumbs/claire_michael.jpg'),
                webp: require('~/static/images/thumbs/claire_michael.webp'),
                id: 246142533
            },
            {
                bride: 'Tina',
                groom: 'Ed',
                venue: 'Ryland Inn',
                jpg: require('~/static/images/thumbs/tina_ed.jpg'),
                webp: require('~/static/images/thumbs/tina_ed.webp'),
                id: 244086183
            },

            // Stone House Sterling Ridge
            {
                bride: 'Nicole',
                groom: 'Collin',
                venue: 'Stone House Sterling Ridge',
                jpg: require('~/static/images/thumbs/nicole_collin.jpg'),
                webp: require('~/static/images/thumbs/nicole_collin.webp'),
                id: 309320059
            },
            {
                bride: 'Stefanie',
                groom: 'Justin',
                venue: 'Stone House Sterling Ridge',
                jpg: require('~/static/images/thumbs/stefanie_justin.jpg'),
                webp: require('~/static/images/thumbs/stefanie_justin.webp'),
                id: 341647337
            },

            // Bonnet Island Estate
            {
                bride: 'Brielle',
                groom: 'Tyler',
                venue: 'Bonnet Island Estate',
                jpg: require('~/static/images/thumbs/brielle_tyler.jpg'),
                webp: require('~/static/images/thumbs/brielle_tyler.webp'),
                id: 339199739
            },
            {
                bride: 'Jaclyn',
                groom: 'Anthony',
                venue: 'Bonnet Island Estate',
                jpg: require('~/static/images/thumbs/jaclyn_anthony.jpg'),
                webp: require('~/static/images/thumbs/jaclyn_anthony.webp'),
                id: 333567838
            },
            {
                bride: 'Stephanie',
                groom: 'Fernando',
                venue: 'Bonnet Island Estate',
                jpg: require('~/static/images/thumbs/stephanie_fernando.jpg'),
                webp: require('~/static/images/thumbs/stephanie_fernando.webp'),
                id: 303312864
            },
            {
                bride: 'Jacquelyn',
                groom: 'Paul',
                venue: 'Bonnet Island Estate',
                jpg: require('~/static/images/thumbs/jacquelyn_paul.jpg'),
                webp: require('~/static/images/thumbs/jacquelyn_paul.webp'),
                id: 287446774
            },
            {
                bride: 'Katie',
                groom: 'Daniel',
                venue: 'Bonnet Island Estate',
                jpg: require('~/static/images/thumbs/katie_daniel.jpg'),
                webp: require('~/static/images/thumbs/katie_daniel.webp'),
                id: 280197591
            },
            {
                bride: 'Allison',
                groom: 'Kevin',
                venue: 'Bonnet Island Estate',
                jpg: require('~/static/images/thumbs/allison_kevin.jpg'),
                webp: require('~/static/images/thumbs/allison_kevin.webp'),
                id: 191984048
            },

            // Pleasantdale Chateau
            {
                bride: 'Stefanie',
                groom: 'Frank',
                venue: 'Pleasantdale Chateau',
                jpg: require('~/static/images/thumbs/stefanie_frank.jpg'),
                webp: require('~/static/images/thumbs/stefanie_frank.webp'),
                id: 199419146
            },
            {
                bride: 'Mimi',
                groom: 'JP',
                venue: 'Pleasantdale Chateau',
                jpg: require('~/static/images/thumbs/mimi_jp.jpg'),
                webp: require('~/static/images/thumbs/mimi_jp.webp'),
                id: 251212969
            },
            {
                bride: 'Nikoletta',
                groom: 'Bulent',
                venue: 'Pleasantdale Chateau',
                jpg: require('~/static/images/thumbs/nikoletta_bulent.jpg'),
                webp: require('~/static/images/thumbs/nikoletta_bulent.webp'),
                id: 255947944
            },

            // Cape May & Avalon
            {
                bride: 'Elizabeth',
                groom: 'William',
                venue: 'Cape May & Avalon',
                jpg: require('~/static/images/thumbs/elizabeth_william.jpg'),
                webp: require('~/static/images/thumbs/elizabeth_william.webp'),
                id: 337549579
            },
            {
                bride: 'Megan',
                groom: 'Fred',
                venue: 'Cape May & Avalon',
                jpg: require('~/static/images/thumbs/megan_fred.jpg'),
                webp: require('~/static/images/thumbs/megan_fred.webp'),
                id: 302095338
            },
            {
                bride: 'Danielle',
                groom: 'Tyler',
                venue: 'Cape May & Avalon',
                jpg: require('~/static/images/thumbs/danielle_tyler.jpg'),
                webp: require('~/static/images/thumbs/danielle_tyler.webp'),
                id: 237608486
            },

            // Clarks Landing Yacht Club
            {
                bride: 'Megan',
                groom: 'Ricky',
                venue: 'Clarks Landing Yacht Club',
                jpg: require('~/static/images/thumbs/megan_ricky.jpg'),
                webp: require('~/static/images/thumbs/megan_ricky.webp'),
                id: 210631181
            },
            {
                bride: 'Rochelle',
                groom: 'Mark',
                venue: 'Clarks Landing Yacht Club',
                jpg: require('~/static/images/thumbs/rochelle_mark.jpg'),
                webp: require('~/static/images/thumbs/rochelle_mark.webp'),
                id: 237918515
            },
            {
                bride: 'Maylon',
                groom: 'Joseph',
                venue: 'Clarks Landing Yacht Club',
                jpg: require('~/static/images/thumbs/maylon_joseph.jpg'),
                webp: require('~/static/images/thumbs/maylon_joseph.webp'),
                id: 313244091
            },
            {
                bride: 'Norma',
                groom: 'William',
                venue: 'Clarks Landing Yacht Club',
                jpg: require('~/static/images/thumbs/norma_william.jpg'),
                webp: require('~/static/images/thumbs/norma_william.webp'),
                id: 332471210
            },
            {
                bride: 'Kelly',
                groom: 'Steven',
                venue: 'Clarks Landing Yacht Club',
                jpg: require('~/static/images/thumbs/kelly_steven.jpg'),
                webp: require('~/static/images/thumbs/kelly_steven.webp'),
                id: 218028536
            },

            // Country Club Weddings
            {
                bride: 'Nicole',
                groom: 'Donald',
                venue: 'Country Club Weddings',
                jpg: require('~/static/images/thumbs/nicole_donald.jpg'),
                webp: require('~/static/images/thumbs/nicole_donald.webp'),
                id: 344420214
            },
            {
                bride: 'Ellen',
                groom: 'Michael',
                venue: 'Country Club Weddings',
                jpg: require('~/static/images/thumbs/ellen_michael.jpg'),
                webp: require('~/static/images/thumbs/ellen_michael.webp'),
                id: 340455628
            },
            // {
            //     bride: 'Kathryn',
            //     groom: 'Christopher',
            //     venue: 'Country Club Weddings',
            //     jpg: require('~/static/images/thumbs/kathryn_christopher.jpg'),
            //     webp: require('~/static/images/thumbs/kathryn_christopher.webp'),
            //     id: 300603230
            // },
            {
                bride: 'Kari',
                groom: 'Tom',
                venue: 'Country Club Weddings',
                jpg: require('~/static/images/thumbs/kari_tom.jpg'),
                webp: require('~/static/images/thumbs/kari_tom.webp'),
                id: 291922022
            },
            {
                bride: 'Lauren',
                groom: 'Ryan',
                venue: 'Country Club Weddings',
                jpg: require('~/static/images/thumbs/lauren_ryan.jpg'),
                webp: require('~/static/images/thumbs/lauren_ryan.webp'),
                id: 240880941
            },
            {
                bride: 'Gina',
                groom: 'Billy',
                venue: 'Country Club Weddings',
                jpg: require('~/static/images/thumbs/gina_billy.jpg'),
                webp: require('~/static/images/thumbs/gina_billy.webp'),
                id: 231079840
            },
            {
                bride: 'Danielle',
                groom: 'James',
                venue: 'Country Club Weddings',
                jpg: require('~/static/images/thumbs/danielle_james.jpg'),
                webp: require('~/static/images/thumbs/danielle_james.webp'),
                id: 221660336
            },
            {
                bride: 'Nicole',
                groom: 'Chris',
                venue: 'Country Club Weddings',
                jpg: require('~/static/images/thumbs/nicole_chris.jpg'),
                webp: require('~/static/images/thumbs/nicole_chris.webp'),
                id: 190918944
            },

            // Park Chateau
            {
                bride: 'Sarah',
                groom: 'Keith',
                venue: 'Park Chateau',
                jpg: require('~/static/images/thumbs/sarah_keith.jpg'),
                webp: require('~/static/images/thumbs/sarah_keith.webp'),
                id: 320394610
            },
            {
                bride: 'Jessica',
                groom: 'Benji',
                venue: 'Park Chateau',
                jpg: require('~/static/images/thumbs/jessica_benji.jpg'),
                webp: require('~/static/images/thumbs/jessica_benji.webp'),
                id: 233336221
            },

            // Windows on the Water Fogbridge
            {
                bride: 'Jillian',
                groom: 'Matthew',
                venue: 'Windows on the Water Fogbridge',
                jpg: require('~/static/images/thumbs/jillian_matthew.jpg'),
                webp: require('~/static/images/thumbs/jillian_matthew.webp'),
                id: 232832728
            },
            {
                bride: 'Kathryn',
                groom: 'Christopher',
                venue: 'Windows on the Water Fogbridge',
                jpg: require('~/static/images/thumbs/kathryn_christopher.jpg'),
                webp: require('~/static/images/thumbs/kathryn_christopher.webp'),
                id: 300603230
            },
            {
                bride: 'Toni',
                groom: 'James',
                venue: 'Windows on the Water Fogbridge',
                jpg: require('~/static/images/thumbs/toni_james.jpg'),
                webp: require('~/static/images/thumbs/toni_james.webp'),
                id: 271733664
            }
        ]

    },
    mutations: {

        UPDATE_SELECTED_VENUES(state, array) {

            state.selectedVenues = [...array];

        }

    },
    actions: {

        updateSelectedVenues({ commit }, array) {

            commit('UPDATE_SELECTED_VENUES', array);

        }

    },
    getters: {

        getVenues: state => {

            let venues = [];

            for (const video of state.videos) {

                if (!venues.includes(video.venue)) {

                    venues.push(video.venue);

                };

            };

            return venues;

        },
        getVenueVideos: state => {

            return state.videos.filter(video => state.selectedVenues.includes(video.venue));

        }

    }

}
