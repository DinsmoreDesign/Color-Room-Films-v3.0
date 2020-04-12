import {
    bonnetIsland, capeMay, clarksLanding,
    countryClub, parkChateau, pleasantdaleChateau,
    rylandInn, stoneHouse, windowsOnTheWater
} from '@/data/venueVideos';

export const state = () => ({

    selectedVenues: [],
    videos: [
        
        ...bonnetIsland,
        ...capeMay,
        ...clarksLanding,
        ...countryClub,
        ...parkChateau,
        ...pleasantdaleChateau,
        ...rylandInn,
        ...stoneHouse,
        ...windowsOnTheWater
        
    ]

});

export const mutations = {

    UPDATE_SELECTED_VENUES(state, array) {

        state.selectedVenues = [...array];

    }

};

export const actions = {

    updateSelectedVenues({ commit }, array) {

        commit('UPDATE_SELECTED_VENUES', array);

    }

};

export const getters = {

    getVenues: state => {

        let venues = [];

        for (const video of state.videos) {

            const filtered = venues.filter(venue => venue.name === video.venue);

            if (filtered.length === 0) {

                venues.push({
                    name: video.venue,
                    slug: video.venue.toLowerCase().replace(/\s/g, '')
                });

            };

        };

        return venues;

    },
    getVenueVideos: state => {

        return state.videos.filter(video => state.selectedVenues.includes(video.venue));

    },
    shuffleVenueVideos: (state, getters) => {

        let array = getters.getVenueVideos;

        let currentIndex = array.length;
        let temporaryValue;
        let randomIndex;
        
        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
        
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
            
        }
        
        return array;

    }

};