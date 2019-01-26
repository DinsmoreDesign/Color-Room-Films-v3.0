<template>

    <div>

        <div class="row no-gap between-xs">
            <div class="col-xs-12 col-sm-6">
                <div class="image-container right-border">
                    <ResponsiveImage style="opacity: 0.7;"
                        smallImage="/images/heros/home/720p"
                        mediumImage="/images/heros/home/1080p"
                        largeImage="/images/heros/home/2k"
                        title="Couple Embracing Outdoors"
                    />
                </div>
            </div>
            <div class="col-xs-12 col-sm-6">
                <div class="image-container left-border">
                    <ResponsiveImage style="opacity: 0.7;"
                        smallImage="/images/heros/reviews/720p"
                        mediumImage="/images/heros/reviews/1080p"
                        largeImage="/images/heros/reviews/1440p"
                        title="Couple Embracing by Rolls Royce"
                    />
                </div>
            </div>
        </div>

        <TitleBlock title="Your wedding, your way" subtitle="Award-winning #MotionPictureMemories for every event." />

        <AwardsContainer/>

    </div>
    

</template>





<script>

    import { mapActions } from 'vuex';

    import ResponsiveImage from '~/components/ResponsiveImage.vue';
    import AwardsContainer from '~/components/AwardsContainer.vue';
    import TitleBlock from '~/components/TitleBlock.vue';

    export default {

        name: 'Home',
        watchQuery: ["page"],
        key: to => to.fullPath,
        transition(to, from) {

            if (!from) return "slide-left";
            return +to.query.page < +from.query.page ? "slide-right" : "slide-left";
            
        },
        components: {

            ResponsiveImage,
            AwardsContainer,
            TitleBlock

        },
        created() {

            this.updateCallToAction({
                isVisible: false
            });

            this.updateFooter({
                title: '',
                content: `Every story is unique and we strive to create a film as unique as your relationship, which you can share with your loved ones for years to come. Your wedding is a precious moment in your life and our goal is to capture it in the most emotional and honest way possible. We pride ourselves on getting it right without getting in the way to deliver a film you'll be proud to call your own.`
            })

        },
        methods: {

            ...mapActions([
                'updateCallToAction',
                'updateFooter'
            ])

        }

    };

</script>





<style lang="scss" scoped>

    .row div[class^="col-"] {
        margin-bottom: -0.4rem !important;
    }

    .image-container {
        box-sizing: border-box;
    }

    @media only screen and (min-width: 768px) {
        .left-border {
            border-left: .5rem solid transparent;
        }
        .right-border {
            border-right: .5rem solid transparent;
        }
    }

    @media only screen and (min-width: 992px) {
        .left-border {
            border-left: 1rem solid transparent;
        }
        .right-border {
            border-right: 1rem solid transparent;
        }
    }

</style>