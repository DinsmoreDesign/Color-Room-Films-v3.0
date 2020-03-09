<template>

    <div class="extra-pricing">
        
        <PricingPartial/>

        <VideoGridPartial
            title="A curated collection of wedding films, shot with Kaitlin Noel Photography:"
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

        name: 'PricingKNP',
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

            return this.headData('KNP Pricing');

        },
        data() {
            return {

                videos: [

                    {
                        bride: 'Elizabeth',
                        groom: 'William',
                        jpg: '/images/thumbs/elizabeth_william.jpg',
                        webp: '/images/thumbs/elizabeth_william.webp',
                        id: 337549579
                    },
                    {
                        bride: 'Alyssa',
                        groom: 'Andrew',
                        jpg: '/images/thumbs/alyssa_andrew.jpg',
                        webp: '/images/thumbs/alyssa_andrew.webp',
                        id: 365287223
                    },
                    {
                        bride: 'Danielle',
                        groom: 'Jeffrey',
                        jpg: '/images/thumbs/danielle_jeffrey.jpg',
                        webp: '/images/thumbs/danielle_jeffrey.webp',
                        id: 297977778
                    },
                    {
                        bride: 'Danielle',
                        groom: 'Tyler',
                        jpg: '/images/thumbs/danielle_tyler.jpg',
                        webp: '/images/thumbs/danielle_tyler.webp',
                        id: 237608486
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