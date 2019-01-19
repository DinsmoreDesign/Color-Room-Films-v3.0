<template>

    <a @click.prevent="$emit('openModal')" href="javascript:void(0)" :title="imageTitle">
        <img :src="image" :alt="imageTitle + ' - Video Thumbnail'">
        <p class="title">{{ title }}</p>
        <PlayButton class="play-button" width="100px" />
    </a>

</template>





<script>

    import PlayButton from './PlayButton.vue';

    export default {

        components: {
            PlayButton
        },
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
        opacity: 0.7;
        transition: opacity 1s;
            -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }

    a {
        display: block;
        position: relative;

        &:hover {

            img {
                opacity: 1;
            }

            p.title {
                visibility: hidden;
                opacity: 0;
            }

            .play-button {
                visibility: visible;
                opacity: 1;
            }

        }

        p.title,
        .play-button {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            transition: opacity 1s;
        }

        p.title {
            opacity: 1;
            color: #FFF;
            font-size: 2rem;
            font-family: cursive;
            font-weight: 400;
            width: 90%;
            text-align: center;
            font-family: 'Allura', sans-serif;
        }

        .play-button {
            visibility: hidden;
            opacity: 0;
        }

    }

</style>