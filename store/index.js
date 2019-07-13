import Vuex from 'vuex';

import contactInfo from './modules/contactInfo.js';
import cta from './modules/cta.js';
import footer from './modules/footer.js';
import pricing from './modules/pricing.js';
import reviews from './modules/reviews.js';
import venues from './modules/venues.js';
import weddingVideos from './modules/weddingVideos.js';

const createStore = () => {
    return new Vuex.Store({

        modules: {
            contactInfo,
            cta,
            footer,
            pricing,
            reviews,
            venues,
            weddingVideos
        },
        state: {

            checkedWebPSupport: false,
            supportsWebP: false,
            navItems: [
                { name: 'HOME', url: '/home' },
                { name: 'ABOUT', url: '/about' },
                { name: 'WEDDINGS', url: '/weddings' },
                { name: 'REVIEWS', url: '/reviews' },
                { name: 'VENUES', url: '/venues' },
                { name: 'CONTACT', url: '/contact' }
            ],
            quotes: [
                `"During the reception I didn’t even know he was there that’s how well he blended in and was behind the scenes but his camera caught everything!"`,
                `"The quality of the video is great and the turn around time from the wedding day was very quick so we were able to share with friends and family."`,
                `"The quality of his work and the turn around time for our video was impeccable! Steve is easy to work with, he was very responsive and easygoing! Steve managed to capture every single one of our special moments but really was able to blend in in the background."`,
                `"My husband and I could not be happier with our videos, and we were blown away with how fast Steve got us the footage!"`,
                `"On the day of the wedding, both Steve and Dave worked together to not only to highlight key aspects of the day (including small details) but succeed in doing so without interfering with the flow of the day. The turnaround time from the wedding day to provide both a trailer and full video was AMAZING!"`,
                `"You would never even know he was there, and the video he captures in absolutely incredible!"`
            ],
            quotePositions: 0,
            currentQuote: {
                message: null,
                position: null
            }

        },
        mutations: {

            UPDATE_CHECKED_WEB_P_SUPPORT(state) {

                state.checkedWebPSupport = true;

            },
            UPDATE_SUPPORTS_WEB_P(state, condition) {

                state.supportsWebP = condition;

            },
            UPDATE_CURRENT_QUOTE(state, object) {

                state.currentQuote = object;

            },
            UPDATE_QUOTE_POSITIONS(state, positions) {

                state.quotePositions = positions;

            }

        },
        actions: {

            async updateSupportsWebP({state, commit}) {
                
                if (!state.checkedWebPSupport) {

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

                        commit('UPDATE_CHECKED_WEB_P_SUPPORT');
    
                    })();

                }

            },
            updateQuotePositions({ commit }, positions) {

                return new Promise(resolve => {

                    commit('UPDATE_QUOTE_POSITIONS', positions);

                    resolve('Successfully updated quote.');

                });

            },
            updateCurrentQuote({ commit, state, getters }) {

                return new Promise(resolve => {

                    commit('UPDATE_CURRENT_QUOTE', getters.getRandomQuote(state.quotePositions));

                    resolve('Successfully updated quote.');

                });

            }

        },
        getters: {

            getRandomQuote: state => positions => {

                const count = state.quotes.length;
                const randomIndex = Math.floor(Math.random() * (count - 1));
                const randomPosition = Math.floor(Math.random() * positions) + 1;

                return {

                    message: state.quotes[randomIndex],
                    position: randomPosition

                }

            }

        }

    })
}

export default createStore
