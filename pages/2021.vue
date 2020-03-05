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
                            :price="pricingOptions.epic.price21"
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
                                    :price="pricingOptions.gemini.price21"
                                    :content="pricingOptions.gemini.content"
                                />
                            </div>
                            <div class="col-xs-12" style="margin-top: 2rem;">
                                <PricingCard
                                    :image="supportsWebP ? pricingOptions.legacy.webp : pricingOptions.legacy.jpg"
                                    :videoId="pricingOptions.legacy.videoId"
                                    :title="pricingOptions.legacy.title"
                                    :price="pricingOptions.legacy.price21"
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

    import { mapActions, mapGetters, mapState } from 'vuex';

    import Hero from '~/components/Hero.vue';
    import PricingCard from '~/components/PricingCard.vue';
    import TitleBlock from '~/components/TitleBlock.vue';

    export default {

        name: 'Pricing2021',
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

            return this.headData('2021 Package Pricing');

        },
        computed: {

            ...mapGetters([

                'headData'

            ]),
            ...mapState({

                pricingOptions: state => state.pricing.options,
                cta: state => state.pricing.cta,
                footer: state => state.pricing.footer,
                supportsWebP: state => state.supportsWebP

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