<template>
  
    <div>

        <Hero background="https://colorroomfilms.com/img/heros/reviews.jpg">
            <h1 class="title is-1"> Reviews of our
                <strong>
                    <a href="https://www.instagram.com/explore/tags/MotionPictureMemories/" title="Check out some #MotionPictureMemories on Instagram!" target="_blank">#MotionPictureMemories</a>
                </strong>... cherished forever.
            </h1>
        </Hero>

    </div>

</template>





<script>

    import Hero from '../components/Hero.vue';
    import TitleBlock from '../components/TitleBlock.vue';

    export default {

        watchQuery: ['page'],
        key: to => to.fullPath,
        transition(to, from) {

            if (!from) return 'slide-left'
            return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'

        },
        components: {

            Hero,
            TitleBlock

        }

    }

</script>





<style>



</style>