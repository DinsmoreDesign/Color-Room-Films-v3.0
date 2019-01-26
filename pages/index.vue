<template>

    <div>

        <video playsinline autoplay muted loop :poster="require('~/static/images/heros/reviews/1440p.jpg')">
            <!-- <source src="~/static/videos/weddingtrailer.webm" type="video/webm"> -->
            <source src="~/static/videos/weddingtrailer.mp4" type="video/mp4">
        </video>

        <Hero>
            <div class="container">
                <div class="row">
                    <img class="logo" src="~/static/images/crf-mark-w.svg" alt="Color Room Films Logo">
                </div>
                <div class="row">
                    <ButtonLink url="/home" title="Enter the Color Room Films website" :isWhite="true">ENTER</ButtonLink>
                </div>
            </div>
        </Hero>

    </div>
    

</template>





<script>

    import Hero from '~/components/Hero.vue';
    import ButtonLink from '~/components/ButtonLink.vue';

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

    .logo {
        max-width: 200px;
        max-height: 200px;
    }

    @media screen and (min-width: 768px) {

        .logo {
            max-width: 350px;
            max-height: 350px;
        }

    }

</style>