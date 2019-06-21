<template>

    <section
        :class="[
            'has-text-centered title-block',
            color,
            { 'container': color === 'default' }
        ]"
    >
        <div :class="{ 'container': color !== 'default' }">
            <h1 class="title" v-if="title">{{ title }}</h1>
            <p class="subtitle" v-if="subtitle">{{ subtitle }}</p>
        </div>
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
            },
            color: {
                type: String,
                required: false,
                default: 'default'
            }

        }

    }

</script>





<style lang="scss" scoped>

    .title-block {

        &.default {
            color: #5e5e5e;
        }
        
        h1.title {
            font-size: 3.5rem;
            line-height: 1;
            font-family: cursive;
            font-weight: 400;
            word-wrap: break-word;
            font-family: 'Allura', sans-serif;
        }

        p {
            font-size: 1.1rem;
        }

        h1,
        p {
            margin: 0;
        }

        @media screen and (min-width: 992px) {
            h1.title {
                font-size: 4.5rem;
            }
            p {
                font-size: 1.3rem;
            }
        }

    }

</style>