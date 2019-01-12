<template>

    <a @click.prevent="$emit('openModal', url)" href="javascript:void(0)" :title="imageTitle">
        <img :src="image" :alt="imageTitle">
        <p>{{ title }}</p>
    </a>

</template>





<script>

    export default {

        props: {

            image: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }

        },
        computed: {

            imageTitle() {

                return `View ${ this.title }'s wedding trailer.`

            }

        }

    }

</script>





<style lang="scss" scoped>

    img {
        min-width: 100%;
        width: 100%;
    }

    a {
        display: block;
        position: relative;
    }
    p {
        color: #FFF;
        font-size: 2.5rem;
        font-family: 'Allura', cursive;
        font-weight: 400;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

</style>