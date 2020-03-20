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

        name: 'PricingLimelight',
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

            return this.headData('Limelight Pricing');

        },
        data() {
            return {

                videos: [

                    {
                        bride: 'Jaclyn',
                        groom: 'Anthony',
                        jpg: '/images/thumbs/jaclyn_anthony.jpg',
                        webp: '/images/thumbs/jaclyn_anthony.webp',
                        videoId: 333555829
                    },
                    {
                        bride: 'Holly',
                        groom: 'Shaun',
                        jpg: '/images/thumbs/holly_shaun.jpg',
                        webp: '/images/thumbs/holly_shaun.webp',
                        videoId: 310199337
                    },
                    {
                        bride: 'Kathryn',
                        groom: 'Christopher',
                        jpg: '/images/thumbs/kathryn_christopher.jpg',
                        webp: '/images/thumbs/kathryn_christopher.webp',
                        videoId: 300603230
                    },
                    {
                        bride: 'Sarah',
                        groom: 'Frank',
                        jpg: '/images/thumbs/sarah_frank.jpg',
                        webp: '/images/thumbs/sarah_frank.webp',
                        videoId: 268634746
                    },
                    {
                        bride: 'Jessica',
                        groom: 'Chris',
                        jpg: '/images/thumbs/jessica_chris.jpg',
                        webp: '/images/thumbs/jessica_chris.webp',
                        videoId: 263243092
                    },
                    {
                        bride: 'Keri',
                        groom: 'Cody',
                        jpg: '/images/thumbs/keri_cody.jpg',
                        webp: '/images/thumbs/keri_cody.webp',
                        videoId: 241564631
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