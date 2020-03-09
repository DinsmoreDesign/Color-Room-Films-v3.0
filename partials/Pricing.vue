<template>

    <div class="pricing">

        <TitleBlock title="All the coverage you want" subtitle="...with packages for every budget." />

        <section class="dark">
            <div class="container">
                <div class="row">

                    <div class="col-xs-12 col-sm-6">
                        <PricingCard
                            :image="supportsWebP ? pricingOptions.epic.webp : pricingOptions.epic.jpg"
                            :videoId="pricingOptions.epic.videoId"
                            :title="pricingOptions.epic.title"
                            :price="pricingOptions.epic[pricingYear]"
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
                                    :price="pricingOptions.gemini[pricingYear]"
                                    :content="pricingOptions.gemini.content"
                                />
                            </div>
                            <div class="col-xs-12" style="margin-top: 2rem;">
                                <PricingCard
                                    :image="supportsWebP ? pricingOptions.legacy.webp : pricingOptions.legacy.jpg"
                                    :videoId="pricingOptions.legacy.videoId"
                                    :title="pricingOptions.legacy.title"
                                    :price="pricingOptions.legacy[pricingYear]"
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

    import { mapActions, mapState } from 'vuex';

    import PricingCard from '~/components/PricingCard.vue';
    import TitleBlock from '~/components/TitleBlock.vue';

    export default {

        name: 'PricingPartial',
        components: {

            PricingCard,
            TitleBlock

        },
        props: {

            year: {
                type: [String, Number],
                required: false,
                default: ''
            }

        },
        computed: {
            
            ...mapState({

                pricingOptions: state => state.pricing.options,
                cta: state => state.pricing.cta,
                footer: state => state.pricing.footer,
                supportsWebP: state => state.supportsWebP

            }),
            pricingYear() {

                return `price${this.year}`

            }

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

    .pricing {

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

    }

</style>