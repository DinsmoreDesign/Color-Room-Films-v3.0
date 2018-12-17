<template>
  
    <div>

        <Hero
            class="home-hero"
        />

    </div>

</template>





<script>

    import { mapState, mapActions } from 'vuex';

    import Hero from "../components/Hero.vue";

    export default {

        name: 'Home',
        watchQuery: ["page"],
        key: to => to.fullPath,
        transition(to, from) {

            if (!from) return "slide-left";
            return +to.query.page < +from.query.page ? "slide-right" : "slide-left";
            
        },
        components: {

            Hero

        },
        created() {

            this.updateCallToAction({

                isVisible: true,
                content: {
                    header: 'Want to see more?',
                    buttonText: 'We have plenty to share!',
                    url: '/weddings',
                    urlTitle: 'Visit our Weddings page to view more of our work'
                }

            })

        },
        methods: {

            ...mapActions([

                'updateCallToAction'

            ])

        }

    };

</script>





<style lang="scss">

    .home-hero {
        background: url(../static/images/heros/home-480p.jpg) no-repeat center right fixed;
    }

    @media only screen and (min-width: 1280px) {
        .home-hero {
            background: url(../static/images/heros/home-720p.jpg) no-repeat center center fixed;
        }
    }

    @media only screen and (min-width: 1920px) {
        .home-hero {
            background: url(../static/images/heros/home-1080p.jpg) no-repeat center center fixed;
        }
    }

    @media only screen and (min-width: 2048) {
        .home-hero {
            background: url(../static/images/heros/home-2k.jpg) no-repeat center center fixed;
        }
    }

</style>