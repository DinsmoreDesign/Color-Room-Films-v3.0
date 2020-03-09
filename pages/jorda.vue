<template>

    <div class="extra-pricing">
        
        <PricingPartial/>

        <VideoGridPartial
            title="A curated collection of wedding films, shot with Chris Jorda Photography:"
            :videos="videos"
            hasLightHeader
        />

    </div>

</template>





<script>

    import { mapGetters } from 'vuex';

    import PricingPartial from '~/partials/Pricing.vue';
    import VideoGridPartial from '~/partials/VideoGrid.vue';

    export default {

        name: 'PricingJorda',
        watchQuery: ['page'],
        key: to => to.fullPath,
        transition(to, from) {

            if (!from) return 'slide-left'
            return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'

        },
        components: {

            PricingPartial,
            VideoGridPartial

        },
        head() {

            return this.headData('Jorda Pricing');

        },
        data() {
            return {

                videos: [

                    {
                        bride: 'Christina',
                        groom: 'Michael',
                        jpg: '/images/thumbs/christina_michael.jpg',
                        webp: '/images/thumbs/christina_michael.webp',
                        id: 355163482
                    },
                    {
                        bride: 'Stefanie',
                        groom: 'Justin',
                        jpg: '/images/thumbs/stefanie_justin.jpg',
                        webp: '/images/thumbs/stefanie_justin.webp',
                        id: 341647337
                    },
                    {
                        bride: 'Nicole',
                        groom: 'Collin',
                        jpg: '/images/thumbs/nicole_collin.jpg',
                        webp: '/images/thumbs/nicole_collin.webp',
                        id: 309320059
                    },
                    {
                        bride: 'Claire',
                        groom: 'Michael',
                        jpg: '/images/thumbs/claire_michael.jpg',
                        webp: '/images/thumbs/claire_michael.webp',
                        id: 246142533
                    },
                    {
                        bride: 'Jennifer',
                        groom: 'Josh',
                        jpg: '/images/thumbs/jennifer_josh.jpg',
                        webp: '/images/thumbs/jennifer_josh.webp',
                        id: 329390649
                    }

                ]

            }
        },
        computed: {

            ...mapGetters([

                'headData'

            ])

        }

    }

</script>