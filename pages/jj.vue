<template>
  
    <SpecialPricing
        company="Jac & Jules"
        :hours="10"
        shortName="Jac & Jules"
        longName="Jacqui & Julia"
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

        name: 'PricingJJ',
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

            return this.headData(`Jac & Jules' Package Pricing`);

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
                        bride: 'Megan',
                        groom: 'Ryan',
                        jpg: '/images/thumbs/megan_ryan.jpg',
                        webp: '/images/thumbs/megan_ryan.webp',
                        id: 366793381
                    },
                    {
                        bride: 'Alina',
                        groom: 'David',
                        jpg: '/images/thumbs/alina_david.jpg',
                        webp: '/images/thumbs/alina_david.webp',
                        id: 362335967
                    },
                    {
                        bride: 'Nicole',
                        groom: 'Donald',
                        jpg: '/images/thumbs/nicole_donald.jpg',
                        webp: '/images/thumbs/nicole_donald.webp',
                        id: 344420214
                    },
                    {
                        bride: 'Lisa',
                        groom: 'Michael',
                        jpg: '/images/thumbs/lisa_michael.jpg',
                        webp: '/images/thumbs/lisa_michael.webp',
                        id: 294645057
                    },
                    {
                        bride: 'Kari',
                        groom: 'Tom',
                        jpg: '/images/thumbs/kari_tom.jpg',
                        webp: '/images/thumbs/kari_tom.webp',
                        id: 291922022
                    },
                    {
                        bride: 'Liz',
                        groom: 'Rob',
                        jpg: '/images/thumbs/liz_rob.jpg',
                        webp: '/images/thumbs/liz_rob.webp',
                        id: 276253878
                    },
                    {
                        bride: 'Kaitlin',
                        groom: 'James',
                        jpg: '/images/thumbs/kaitlin_james.jpg',
                        webp: '/images/thumbs/kaitlin_james.webp',
                        id: 239027718
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