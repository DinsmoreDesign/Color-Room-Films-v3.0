<template>

    <a @click.prevent="$emit('openModal')" href="javascript:void(0)" :title="imageTitle">
        <img :src="image" :alt="imageTitle + ' - Video Thumbnail'">
        <p class="allura title">{{ title }}</p>
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

        p.title {
            color: #FFF;
            font-size: 2rem;
            font-family: cursive;
            font-weight: 400;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-shadow: 4px 4px 10px rgba(0, 0, 0, 1);
            width: 90%;
            text-align: center;

            &.allura.loaded {
                font-family: 'Allura', cursive;
            }

        }

    }

</style>