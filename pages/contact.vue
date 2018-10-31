<template>
  
    <div>
        <Hero background="https://colorroomfilms.com/img/heros/contact.jpg">
            <h1 class="title is-1">
                <strong>We'd love to talk!</strong>
            </h1>
            <h2 class="subtitle is-4">
                <em>Call, text or email us your questions.</em>
            </h2>
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