<template>

    <a @click.prevent="$emit('openModal')" :href="url" :title="imageTitle">
        <img :src="image" :alt="imageTitle + ' - Video Thumbnail'">
        <div class="title-block" v-if="showTitle || subtitle">
            <p class="title" v-if="showTitle">{{ title }}</p>
            <p class="subtitle" v-if="subtitle">{{ subtitle }}</p>
        </div>
        <PlayButton class="play-button has-title" width="100px" v-if="showTitle" />
        <PlayButton class="play-button" width="100px" v-else />
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
            },
            subtitle: {
                type: String,
                required: false
            },
            showTitle: {
                type: Boolean,
                required: false,
                default: true
            },
            url: {
                type: String,
                required: false,
                default: 'javascript:void(0)'
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

            .title-block {
                visibility: hidden;
                opacity: 0;
            }

            .play-button.has-title {
                visibility: visible;
                opacity: 1;
            }

        }

        .title-block,
        .play-button {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            transition: opacity 1s;
        }

        .title-block {
            opacity: 1;
            color: #FFF;
            width: 90%;
            text-align: center;

            .title {
                font-size: 2rem;
                font-family: cursive;
                font-weight: 400;
                font-family: 'Allura', sans-serif;
                margin-bottom: 0;
            }

            .subtitle {
                font-size: 1rem;
                font-family: sans-serif;
            }

        }

        .play-button.has-title {
            visibility: hidden;
            opacity: 0;
        }

    }

</style>