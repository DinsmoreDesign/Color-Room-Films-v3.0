<template>

    <div class="video-container" :style="componentStyle">
        <iframe
            :src="videoSource"
            :title="title"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
            allow="autoplay; encrypted-media"
        ></iframe>
    </div>
    <!-- <script src="https://player.vimeo.com/api/player.js"></script> --> <!-- I don't think we need this...? -->

</template>





<script>

    export default {

        props: {

            source: {
                type: String,
                required: true
            },
            id: {
                type: [String, Number],
                required: true
            },
            queries: {
                type: String,
                required: false
            },
            title: {
                type: String,
                required: true
            },
            componentStyle: {
                type: String,
                required: false,
                default: 'padding: 52.73% 0 0 0'
            }

        },
        computed: {

            videoSource() {

                return this.source + this.id + this.queries;

            }

        }

    }

</script>





<style lang="scss" scoped>

    .video-container {
        position: relative;

        iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

    }

</style>