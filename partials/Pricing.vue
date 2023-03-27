<template>
    <div class="pricing">
        <TitleBlock
            title="All the coverage you want"
            subtitle="...in one inclusive package."
        />

        <section class="dark">
            <div class="container">
                <div class="row center-xs">
                    <div class="col-xs-12 col-sm-10 col-lg-6">
                        <PricingCard
                            :image="
                                supportsWebP
                                    ? options.epic.webp
                                    : options.epic.jpg
                            "
                            :videoId="options.epic.videoId"
                            :title="options.epic.title"
                            :price="options.epic.price"
                            :content="options.epic.content"
                        />
                    </div>

                    <div class="col-xs">
                        <div class="row">
                            <div class="col-xs-12">
                                <PricingCard
                                    :image="
                                        supportsWebP
                                            ? options.scarlett.webp
                                            : options.scarlett.jpg
                                    "
                                    :videoId="options.scarlett.videoId"
                                    :title="options.scarlett.title"
                                    :price="options.scarlett.price"
                                    :content="options.scarlett.content"
                                />
                            </div>
                            <div class="col-xs-12" style="margin-top: 2rem;">
                                <PricingCard
                                    :image="
                                        supportsWebP
                                            ? options.legacy.webp
                                            : options.legacy.jpg
                                    "
                                    :videoId="options.legacy.videoId"
                                    :title="options.legacy.title"
                                    :price="options.legacy.price"
                                    :content="options.legacy.content"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-12" style="margin-top: 2rem;">
                        <PricingCard
                            :image="
                                supportsWebP
                                    ? options.essentials.webp
                                    : options.essentials.jpg
                            "
                            :videoId="options.essentials.videoId"
                            :title="options.essentials.title"
                            :price="options.essentials.price"
                            :content="options.essentials.content"
                        />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

import PricingCard from "~/components/PricingCard.vue";
import TitleBlock from "~/components/TitleBlock.vue";

export default {
    name: "PricingPartial",
    components: {
        PricingCard,
        TitleBlock
    },
    props: {
        customVideos: {
            type: [Object],
            required: false,
            default() {
                return {};
            }
        }
    },
    computed: {
        ...mapState({
            pricingOptions: state => state.pricing.options,
            cta: state => state.pricing.cta,
            footer: state => state.pricing.footer,
            supportsWebP: state => state.supportsWebP
        }),
        options() {
            let options = {
                epic: { ...this.pricingOptions.epic },
                scarlett: { ...this.pricingOptions.scarlett },
                legacy: { ...this.pricingOptions.legacy },
                essentials: { ...this.pricingOptions.essentials }
            };

            const entries = Object.entries(this.customVideos);

            for (const [key, value] of entries) {
                options[key].jpg = value.jpg;
                options[key].webp = value.webp;
                options[key].videoId = value.videoId;
            }

            return options;
        }
    },
    created() {
        this.updateCallToAction(this.cta);
        this.updateFooter(this.footer);
        this.updateCurrentQuote();
    },
    methods: {
        ...mapActions({
            updateCallToAction: "cta/updateCallToAction",
            updateFooter: "footer/updateFooter",
            updateCurrentQuote: "updateCurrentQuote"
        })
    }
};
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
