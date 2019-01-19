<template>

    <div>

        <video playsinline autoplay muted loop poster="../static/images/heros/home/2k.jpg" id="bgvid">
            <!-- <source src="../static/videos/testvideobg.webm" type="video/webm"> -->
            <source src="../static/videos/weddingtrailer.mp4" type="video/mp4">
        </video>

        <Hero>
            <div class="container">
                <div class="row">
                    <img src="../static/images/crf-mark-w.svg" style="height: 350px">
                </div>
                <div class="row">
                    <ButtonLink url="/home" title="Enter the Color Room Films website" :isWhite="true">ENTER</ButtonLink>
                </div>
            </div>
        </Hero>

    </div>
    

</template>





<script>

    import Hero from '../components/Hero.vue';
    import ButtonLink from '../components/ButtonLink.vue';

    export default {

        name: 'Index',
        layout: 'blank',
        watchQuery: ["page"],
        key: to => to.fullPath,
        transition(to, from) {

            if (!from) return "slide-left";
            return +to.query.page < +from.query.page ? "slide-right" : "slide-left";
            
        },
        components: {
            
            Hero,
            ButtonLink

        },
        created() {

            

        },
        methods: {

            

        }

    };

</script>





<style lang="scss" scoped>

    video {
        object-fit: cover;
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        opacity: 0.7;
        z-index: -1;
    }

    .row {
        margin-top: 2rem;

        * {
            margin: 0 auto;
        }

        &:first-child {
            margin-top: 0;
        }

    }

    /* Modern Browsers: */
    .home-hero-webp {
        background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                            url(../static/images/heros/home/720p.webp);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    }

    @media only screen and (min-width: 1280px) {
        .home-hero-webp {
            background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                                url(../static/images/heros/home/1080p.webp);
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
        }
    }

    @media only screen and (min-width: 1920px) {
        .home-hero-webp {
            background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                                url(../static/images/heros/home/2k.webp);
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
        }
    }

    /* Legacy Browsers: */
    .home-hero {
        background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                            url(../static/images/heros/home/720p.jpg);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    }

    @media only screen and (min-width: 1280px) {
        .home-hero {
            background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                                url(../static/images/heros/home/1080p.jpg);
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
        }
    }

    @media only screen and (min-width: 1920px) {
        .home-hero {
            background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                                url(../static/images/heros/home/2k.jpg);
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
        }
    }

</style>