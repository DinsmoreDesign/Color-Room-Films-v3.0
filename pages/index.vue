<template>

    <div>

        <div class="row no-gap between-xs">
            <div class="col-xs-12 col-sm-6">
                <div class="image-container right-border">
                    <ResponsiveImage style="opacity: 0.7;"
                        :smallImage="require('../static/images/heros/reviews-720p.jpg')"
                        :mediumImage="require('../static/images/heros/home-1080p.jpg')"
                        :largeImage="require('../static/images/heros/home-2k.jpg')"
                    />
                </div>
            </div>
            <div class="col-xs-12 col-sm-6">
                <div class="image-container left-border">
                    <ResponsiveImage style="opacity: 0.7;"
                        :smallImage="require('../static/images/heros/reviews-720p.jpg')"
                        :mediumImage="require('../static/images/heros/reviews-1080p.jpg')"
                        :largeImage="require('../static/images/heros/reviews-2k.jpg')"
                    />
                </div>
            </div>
        </div>

        <section class="container title-block has-text-centered">
            <h1>Your wedding, your way</h1>
            <p>Award-winning #MotionPictureMemories for every event.</p>
        </section>

        <AwardsContainer/>

    </div>
    

</template>





<script>

    import { mapActions } from 'vuex';

    import ResponsiveImage from "../components/ResponsiveImage.vue";
    import AwardsContainer from "../components/AwardsContainer.vue";

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
            AwardsContainer

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