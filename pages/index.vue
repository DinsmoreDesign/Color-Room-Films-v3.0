<template>

    <div>

        <div class="row no-gap between-xs">
            <div class="col-xs-12 col-md-6">
                <div style="margin-right: 1rem; background-color: #FFF;">
                    <ResponsiveImage style="opacity: 0.7;"
                        :smallImage="require('../static/images/heros/home-480p.jpg')"
                        :mediumImage="require('../static/images/heros/home-720p.jpg')"
                        :largeImage="require('../static/images/heros/home-1080p.jpg')"
                        :xlImage="require('../static/images/heros/home-2k.jpg')"
                    />
                </div>
            </div>
            <div class="col-xs-12 col-md-6">
                <div style="margin-left: 1rem; background-color: #FFF;">
                    <ResponsiveImage style="opacity: 0.7;"
                        :smallImage="require('../static/images/heros/reviews-480p.jpg')"
                        :mediumImage="require('../static/images/heros/reviews-720p.jpg')"
                        :largeImage="require('../static/images/heros/reviews-1080p.jpg')"
                        :xlImage="require('../static/images/heros/reviews-2k.jpg')"
                    />
                </div>
            </div>
        </div>

        <section class="container">
            <h1>Your wedding, your way</h1>
            <p>Award-winning #MotionPictureMemories for every event.</p>
        </section>

        <AwardsContainer/>

    </div>
    

</template>





<script>

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

        }

    };

</script>





<style lang="scss" scoped>

    .row div[class^="col-"] {
        margin-bottom: -0.4rem !important;
    }

    section {
        padding: 3rem 0;
        text-align: center;

        h1 {
            font-size: 3rem;
        }

        h1,
        p {
            margin: 0;
        }

    }




    .home-hero {
        background: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(../static/images/heros/home-480p.jpg) no-repeat center right fixed;
    }

    @media only screen and (min-width: 1280px) {
        .home-hero {
            background: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(../static/images/heros/home-720p.jpg) no-repeat center center fixed;
        }
    }

    @media only screen and (min-width: 1920px) {
        .home-hero {
            background: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(../static/images/heros/home-1080p.jpg) no-repeat center center fixed;
        }
    }

    @media only screen and (min-width: 2048) {
        .home-hero {
            background: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(../static/images/heros/home-2k.jpg) no-repeat center center fixed;
        }
    }

</style>