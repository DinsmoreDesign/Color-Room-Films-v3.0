<template>
  
    <div>

        <Hero background="https://colorroomfilms.com/img/heros/weddings.jpg">
            <h1 class="title is-1"> These are the
                <strong>
                    <a href="https://www.instagram.com/explore/tags/MotionPictureMemories/" title="Check out some #MotionPictureMemories on Instagram!" target="_blank">#MotionPictureMemories</a>
                </strong> you'll cherish forever.
            </h1>
        </Hero>

    </div>

</template>





<script>

    import Hero from '../components/Hero.vue';

    export default {

        watchQuery: ['page'],
        key: to => to.fullPath,
        transition(to, from) {
            if (!from) return 'slide-left'
            return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
        },
        components: {
            Hero
        }

    }

</script>





<style>



</style>