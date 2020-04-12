<template>
  
    <PricingPartial year="21" />

</template>





<script>

    import { mapGetters } from 'vuex';

    import PricingPartial from '~/partials/Pricing.vue';

    export default {

        name: 'Pricing2021',
        watchQuery: ['page'],
        key: to => to.fullPath,
        transition(to, from) {

            if (!from) return 'slide-left'
            return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'

        },
        components: {

            PricingPartial

        },
        head() {

            return this.headData('2021 Package Pricing');

        },
        computed: {

            ...mapGetters('pricing',[

                'headData'

            ])

        }

    }

</script>