export const state = () => ({

    checkedWebPSupport: false,
    supportsWebP: false

});

export const mutations = {

    UPDATE_CHECKED_WEB_P_SUPPORT(state) {

        state.checkedWebPSupport = true;

    },
    UPDATE_SUPPORTS_WEB_P(state, condition) {

        state.supportsWebP = condition;

    }

};

export const actions = {

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

    }

};