<template>

    <nuxt />

</template>





<script>

    import { mapState, mapActions } from 'vuex';

    export default {

        created() {

            this.updateSupportsWebP();

        },
        methods: {

            ...mapActions([
                'updateSupportsWebP'
            ])

        }

    }

</script>