<template>

    <section class="container title-block has-text-centered">
        <h1 class="allura title" v-if="title">{{ title }}</h1>
        <p class="subtitle" v-if="subtitle">{{ subtitle }}</p>
    </section>

</template>





<script>

    export default {

        props: {
            title: {
                type: String,
                required: false
            },
            subtitle: {
                type: String,
                required: false
            }
        }

    }

</script>





<style lang="scss" scoped>

    .title-block {
        color: #5e5e5e;

        h1.title {
            font-size: 4.5rem;
            font-family: cursive;
            font-weight: 400;
            word-wrap: break-word;

            &.allura.loaded {
                font-family: 'Allura', cursive;
            }

        }

        p {
            font-size: 1.3rem;
        }

        h1,
        p {
            margin: 0;
        }

    }

</style>