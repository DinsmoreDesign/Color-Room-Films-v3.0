<template>
  
    <div>

        <TitleBlock title="All the coverage you want" subtitle="...with packages for every budget." />

        <section class="dark">
            <div class="container">
                <div class="row">

                    <div class="col-xs-12 col-sm-6">
                        <PricingCard
                            :image="supportsWebP ? pricingOptions.epic.webp : pricingOptions.epic.jpg"
                            :videoId="pricingOptions.epic.videoId"
                            :title="pricingOptions.epic.title"
                            :price="pricingOptions.epic.newPrice"
                            :content="pricingOptions.epic.content"
                        />
                    </div>

                    <div class="col-xs">
                        <div class="row">
                            <div class="col-xs-12">
                                <PricingCard
                                    :image="supportsWebP ? pricingOptions.gemini.webp : pricingOptions.gemini.jpg"
                                    :videoId="pricingOptions.gemini.videoId"
                                    :title="pricingOptions.gemini.title"
                                    :price="pricingOptions.gemini.newPrice"
                                    :content="pricingOptions.gemini.content"
                                />
                            </div>
                            <div class="col-xs-12" style="margin-top: 2rem;">
                                <PricingCard
                                    :image="supportsWebP ? pricingOptions.legacy.webp : pricingOptions.legacy.jpg"
                                    :videoId="pricingOptions.legacy.videoId"
                                    :title="pricingOptions.legacy.title"
                                    :price="pricingOptions.legacy.newPrice"
                                    :content="pricingOptions.legacy.content"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    </div>

</template>





<script>

    import { mapState, mapActions } from 'vuex';

    import Hero from '~/components/Hero.vue';
    import PricingCard from '~/components/PricingCard.vue';
    import TitleBlock from '~/components/TitleBlock.vue';

    export default {

        name: 'Pricing',
        watchQuery: ['page'],
        key: to => to.fullPath,
        transition(to, from) {

            if (!from) return 'slide-left'
            return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'

        },
        components: {

            Hero,
            PricingCard,
            TitleBlock

        },
        head() {
            return {

                title: 'Package Pricing | Color Room Films NJ',
                meta: [
                    { property: 'og:title', content: 'Package Pricing | Color Room Films NJ' },
                    { name: 'description', content: 'Color Room Films is New Jersey’s premier cinematographer. One price - All the coverage you want.' },
                    { property: 'og-description', content: 'Color Room Films is New Jersey’s premier cinematographer. One price - All the coverage you want.' },
                    { name: 'keywords', content: 'New Jersey, videographer, wedding film, cinematic, motion picture memories, NJ, wedding video, wedding movie, special, Jackson, pricing' }
                ]

            }
        },
        computed: {

            ...mapState({

                pricingOptions: state => state.pricing,
                supportsWebP: state => state.supportsWebP

            })

        },
        created() {

            this.updateCallToAction({
                isVisible: true,
                url: '/reviews',
                title: 'Visit our Reviews page to see what others have to say about our work',
                content: 'SEE WHAT OTHERS HAVE TO SAY'
            });

            this.updateFooter({
                title: 'WHY US?',
                content: `Every wedding is unique and every couple is different, that's why every project we work on is approached differently. No two events we've filmed are ever the same; we purchase exclusive music publishing rights for each wedding and don't believe in releasing films that are lacking individuality. It's our job to get to know you and what you like, so we can represent your personality as genuinely as possible.`
            })

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





<style lang="scss" scoped>

    .callout {
        margin-top: 5rem;
        text-align: center;
        font-size: 2rem;
        font-weight: 300;
    }

    .row {
        margin-top: 2rem;
    }

    @media only screen and (min-width: 768px) {

        .row {
            margin-top: 0;
        }
        
        .row:not(:first-child) {
            margin-top: 2rem;
        }

    }

    /* Modern Browsers: */
    .pricing-hero-webp { // 480p default
        background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                            url(/images/heros/pricing/480p.webp);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    }

    @media only screen and (min-width: 960px) { // Halfway between 480p and 720p
        .pricing-hero-webp {
            background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                                url(/images/heros/pricing/720p.webp);
        }
    }

    @media only screen and (min-width: 1600px) { // Halfway between 720p and 1080p
        .pricing-hero-webp {
            background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                                url(/images/heros/pricing/1080p.webp);
        }
    }

    @media only screen and (min-width: 2240px) { // Halfway between 1080p and 1440p
        .pricing-hero-webp {
            background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                                url(/images/heros/pricing/1440p.webp);
        }
    }

    /* Legacy Browsers: */
    .pricing-hero { // 480p default
        background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                            url(/images/heros/pricing/480p.jpg);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    }

    @media only screen and (min-width: 960px) { // Halfway between 480p and 720p
        .pricing-hero {
            background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                                url(/images/heros/pricing/720p.jpg);
        }
    }

    @media only screen and (min-width: 1600px) { // Halfway between 720p and 1080p
        .pricing-hero {
            background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                                url(/images/heros/pricing/1080p.jpg);
        }
    }

    @media only screen and (min-width: 2240px) { // Halfway between 1080p and 1440p
        .pricing-hero {
            background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                                url(/images/heros/pricing/1440p.jpg);
        }
    }

</style>