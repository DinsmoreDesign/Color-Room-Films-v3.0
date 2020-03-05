<template>
  
    <SpecialPricing
        company="Molly Sue Photography"
        shortName="Molly"
        longName="Molly"
        :price="4000"
        :packageOptions="options"
        :videos="videos"
    />

</template>





<script>

    import { mapActions, mapGetters, mapState } from 'vuex';

    import SpecialPricing from '~/partials/SpecialPricing.vue';

    export default {

        name: 'PricingMolly',
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

            return this.headData(`Molly's Package Pricing`);

        },
        data() {
            return {

                options: [
                    '9 Hour Session',
                    '2-Shooter Coverage',
                    'Trailer',
                    'Full Film',
                    'Instagram Teasers'
                ],
                videos: [

                    {
                        bride: 'Kathleen',
                        groom: 'Christopher',
                        jpg: '/images/thumbs/kathleen_christopher.jpg',
                        webp: '/images/thumbs/kathleen_christopher.webp',
                        id: 368343330
                    },
                    {
                        bride: 'Heather',
                        groom: 'Michael',
                        jpg: '/images/thumbs/heather_michael.jpg',
                        webp: '/images/thumbs/heather_michael.webp',
                        id: 360531313
                    },
                    {
                        bride: 'Ellen',
                        groom: 'Michael',
                        jpg: '/images/thumbs/ellen_michael.jpg',
                        webp: '/images/thumbs/ellen_michael.webp',
                        id: 340455628
                    },
                    {
                        bride: 'Tiffany',
                        groom: 'Matthew',
                        jpg: '/images/thumbs/tiffany_matthew.jpg',
                        webp: '/images/thumbs/tiffany_matthew.webp',
                        id: 282710433
                    }

                ]

            }
        },
        computed: {

            ...mapGetters([

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

            ...mapActions([
                'updateCallToAction',
                'updateFooter',
                'updateCurrentQuote'
            ])

        }

    }

</script>