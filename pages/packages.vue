<template>
  
    <div>

        <TitleBlock title="All the coverage you want" subtitle="...with packages starting at only $3389." color="dark" />

        <section>
            <div class="container">

                <div class="row center-xs">
                    <div class="col-xs-10 col-lg-6">
                        <CollectionsCard
                            :title="pricingOptions.epic.title"
                            :content="pricingOptions.epic.content"
                        />
                    </div>
                </div>

                <div class="row center-xs">
                    <div class="col-xs-12 col-lg-7">
                        <CollectionsCard
                            :title="pricingOptions.gemini.title"
                            :content="pricingOptions.gemini.content"
                            isBold
                        />
                    </div>
                </div>

                <div class="row center-xs">
                    <div class="col-xs-10 col-lg-6">
                        <CollectionsCard
                            :title="pricingOptions.legacy.title"
                            :content="pricingOptions.legacy.content"
                        />
                    </div>
                </div>

            </div>
        </section>

    </div>

</template>





<script>

    import { mapState, mapActions } from 'vuex';

    import Hero from '~/components/Hero.vue';
    import CollectionsCard from '~/components/CollectionsCard.vue';
    import TitleBlock from '~/components/TitleBlock.vue';

    export default {

        name: 'Packages',
        watchQuery: ['page'],
        key: to => to.fullPath,
        transition(to, from) {

            if (!from) return 'slide-left'
            return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'

        },
        components: {

            Hero,
            CollectionsCard,
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

                pricingOptions: state => state.pricing.options,
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

            ...mapActions({

                updateCallToAction: 'cta/updateCallToAction',
                updateFooter: 'footer/updateFooter',
                updateCurrentQuote: 'updateCurrentQuote'

            })

        }

    }

</script>





<style lang="scss" scoped>

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

</style>