<template>
  
    <SpecialPricing
        company="Susan Elizabeth Photography"
        :hours="10"
        shortName="Susan"
        longName="Susan"
        :price="4250"
        :packageOptions="options"
        :videos="videos"
        allowLessTime
    />

</template>





<script>

    import { mapActions, mapGetters, mapState } from 'vuex';

    import SpecialPricing from '~/partials/SpecialPricing.vue';

    export default {

        name: 'PricingSusan',
        watchQuery: ['page'],
        key: to => to.fullPath,
        transition(to, from) {

            if (!from) return 'slide-left'
            return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'

        },
        components: {

            SpecialPricing

        },
        head() {

            return this.headData(`Susan's Package Pricing`);

        },
        data() {
            return {

                options: [
                    '10-Hour Session',
                    '2-Shooter Coverage',
                    'Trailer',
                    'Full Film',
                    'Instagram Teasers'
                ],
                videos: [

                    {
                        bride: 'Ashley',
                        groom: 'Christopher',
                        jpg: '/images/thumbs/ashley_christopher.jpg',
                        webp: '/images/thumbs/ashley_christopher.webp',
                        id: 358948441
                    },
                    {
                        bride: 'Brielle',
                        groom: 'Tyler',
                        jpg: '/images/thumbs/brielle_tyler.jpg',
                        webp: '/images/thumbs/brielle_tyler.webp',
                        id: 339199739
                    },
                    {
                        bride: 'Julie',
                        groom: 'Greg',
                        jpg: '/images/thumbs/julie_greg.jpg',
                        webp: '/images/thumbs/julie_greg.webp',
                        id: 296932779
                    },
                    {
                        bride: 'Ashley',
                        groom: 'Adam',
                        jpg: '/images/thumbs/ashley_adam.jpg',
                        webp: '/images/thumbs/ashley_adam.webp',
                        id: 293412835
                    }

                ]

            }
        },
        computed: {

            ...mapGetters('pricing',[

                'headData'

            ]),
            ...mapState({

                cta: state => state.pricing.cta,
                footer: state => state.pricing.footer

            })

        },
        created() {

            this.updateCallToAction(this.cta);
            this.updateFooter(this.footer);
            this.updateCurrentQuote();

        },
        methods: {

            ...mapActions({

                updateCallToAction: 'cta/updateCallToAction',
                updateFooter: 'footer/updateFooter',
                updateCurrentQuote: 'updateCurrentQuote'

            })

        }

    }

</script>