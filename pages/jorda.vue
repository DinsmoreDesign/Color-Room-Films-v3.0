<template>

    <div class="extra-pricing">
        
        <PricingPartial
            :customVideos="{
                epic: videos[0],
                gemini: videos[1],
                legacy: videos[2]
            }"
        />

    </div>

</template>





<script>

    import { mapGetters } from 'vuex';

    import PricingPartial from '~/partials/Pricing.vue';

    export default {

        name: 'PricingJorda',
        watchQuery: ['page'],
        key: to => to.fullPath,
        transition(to, from) {

            if (!from) return 'slide-left'
            return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'

        },
        components: {

            PricingPartial

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
                        videoId: 355163482
                    },
                    {
                        bride: 'Stefanie',
                        groom: 'Justin',
                        jpg: '/images/thumbs/stefanie_justin.jpg',
                        webp: '/images/thumbs/stefanie_justin.webp',
                        videoId: 341647337
                    },
                    {
                        bride: 'Nicole',
                        groom: 'Collin',
                        jpg: '/images/thumbs/nicole_collin.jpg',
                        webp: '/images/thumbs/nicole_collin.webp',
                        videoId: 309320059
                    },
                    {
                        bride: 'Claire',
                        groom: 'Michael',
                        jpg: '/images/thumbs/claire_michael.jpg',
                        webp: '/images/thumbs/claire_michael.webp',
                        videoId: 246142533
                    },
                    {
                        bride: 'Jennifer',
                        groom: 'Josh',
                        jpg: '/images/thumbs/jennifer_josh.jpg',
                        webp: '/images/thumbs/jennifer_josh.webp',
                        videoId: 329390649
                    }

                ]

            }
        },
        computed: {

            ...mapGetters('pricing',[

                'headData'

            ])

        }

    }

</script>