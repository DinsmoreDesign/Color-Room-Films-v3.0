import FontFaceObserver from 'fontfaceobserver';

export const observeFont = {

    methods: {

        observeFont(fontName, callback) {

            const font = new FontFaceObserver(fontName);

            font.load()
                .then(response => callback(response))
                .catch(error => { console.log(error) })

        }

    },
    mounted() {
        
        // Wait for Allura to load from Google Fonts, then inject "loaded" class to each section
        this.observeFont('allura', () => {

            const alluraNodes = document.getElementsByClassName('allura');

            for (let node of alluraNodes) {

                node.classList.add('loaded');

            }

        });

    }

}