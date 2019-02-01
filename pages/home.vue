<template>

    <div>

        <div class="row no-gap between-xs show-tablet">
            <div class="col-xs-12 col-sm-6">
                <div class="image-container right-border">
                    <ResponsiveImage style="opacity: 0.7;"
                        smallImage="/images/heros/home/left-480p"
                        mediumImage="/images/heros/home/left-720p"
                        largeImage="/images/heros/home/left-1080p"
                        xlImage="/images/heros/home/left-1440p"
                        title="Bride Surrounded by Bridesmaids"
                    />
                </div>
            </div>
            <div class="col-xs-12 col-sm-6">
                <div class="image-container left-border">
                    <ResponsiveImage style="opacity: 0.7;"
                        smallImage="/images/heros/home/right-480p"
                        mediumImage="/images/heros/home/right-720p"
                        largeImage="/images/heros/home/right-1080p"
                        xlImage="/images/heros/home/right-1440p"
                        title="Bride and Groom Outside Church"
                    />
                </div>
            </div>
        </div>

        <Hero :class="[ 'show-mobile', $store.state.supportsWebP ? 'home-hero-webp' : 'home-hero']" height="calc(100vh - 61px)" />

        <TitleBlock title="Your wedding, your way" subtitle="Award-winning #MotionPictureMemories for every event." />

        <AwardsContainer/>

    </div>
    

</template>





<script>

    import { mapActions } from 'vuex';

    import Hero from '~/components/Hero.vue';
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

            Hero,
            ResponsiveImage,
            AwardsContainer,
            TitleBlock

        },
        head() {
            return {

                title: 'Home | Color Room Films',
                meta: [
                    { property: 'og:title', content: 'Home | Color Room Films' },
                    { name: 'description', content: 'We create the MotionPictureMemories you’ll cherish forever. We deliver precious memories of your special day that you can relive for years to come.' },
                    { property: 'og-description', content: 'We create the MotionPictureMemories you’ll cherish forever. We deliver precious memories of your special day that you can relive for years to come.' },
                    { name: 'keywords', content: 'New Jersey, videographer, wedding film, cinematic, motion picture memories, NJ, wedding video, wedding movie' }
                ]

            }
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

    .show-mobile {
        display: flex;
    }
    .show-tablet {
        display: none;
    }

    @media only screen and (min-width: 768px) { // Halfway between 480p and 720p
        .show-mobile {
            display: none;
        }
        .show-tablet {
            display: flex;
        }
    }

    /* Modern Browsers: */
    .home-hero-webp { // Only shows on mobile
        background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                            url(/images/heros/home/left-480p.webp);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    }

    /* Legacy Browsers: */
    .home-hero { // Only shows on mobile
        background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                            url(/images/heros/home/left-480p.jpg);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    }

</style>