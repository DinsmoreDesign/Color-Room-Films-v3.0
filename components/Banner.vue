<template>

    <section class="banner">
        <p>{{ title }}</p>
        <nuxt-link
            class="cta"
            :title="urlTitle"
            :to="url"
        >
            {{ cta }}
        </nuxt-link>
    </section>

</template>





<script>

    export default {

        name: 'Banner',
        props: {

            title: {
                type: String,
                required: true
            },
            urlTitle: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
            cta: {
                type: String,
                required: true
            }

        }

    }

</script>





<style lang="scss" scoped>

    .banner {
        position: fixed;
        bottom: 0;
        z-index: 9999;
        opacity: 0.95;
        display: flex;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        width: 100%;
        background-color: #71cbd2;
        color: #FFF;

        p {
            margin-bottom: 0;
            text-align: center;
        }

        .cta {
            text-align: center;
            color: #FFF;
            padding: 0.5rem 1rem;
            text-decoration: none;
            padding: .5rem;
            border: 2px solid #FFF;
            border-radius: 3px;
            font-weight: 700;
            background-color: transparent;
            transition: background-color 0.5s, color 0.5s;

            &:hover {
                background-color: #FFF;
                color: #71cbd2;
            }

        }

    }

</style>