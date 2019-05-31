<template>

    <div class="card">
        <div class="video" v-if="videoId && image">
            <VideoGridImage v-if="!showVideo"
                :image="image"
                :title="videoTitle"
                :showTitle="false"
                @openModal="showVideo = true"
            />
            <ResponsiveVideo v-else
                style="background-color: #7a7a7a;"
                source="https://player.vimeo.com/video/"
                :id="videoId"
                queries="?color=26a69a&title=0&byline=0&portrait=0&autoplay=1"
                :title="videoTitle"
            />
        </div>
        <div class="header">
            <h3 class="title">{{ title }} Package</h3>
            <p class="subtitle">${{ price }}</p>
        </div>
        <div class="content">
            <p v-if="typeof content === 'string'">
                {{ content }}
            </p>
            <p v-else v-for="(paragraph, index) in content" :key="index">
                {{ paragraph }}
            </p>
        </div>
    </div>

</template>





<script>

    import ResponsiveVideo from '~/components/ResponsiveVideo.vue';
    import VideoGridImage from '~/components/VideoGridImage.vue';

    export default {

        components: {

            ResponsiveVideo,
            VideoGridImage

        },
        props: {

            image: {
                type: String,
                required: false
            },
            videoId: {
                type: Number,
                required: false
            },
            title: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            content: {
                type: [String, Array],
                required: true
            }

        },
        data() {
            return {

                showVideo: false

            }
        },
        computed: {

            videoTitle() {

                return `${this.title} Package Example Video`;

            }

        }

    }

</script>





<style lang="scss" scoped>

    .card {
        background: #FFF;
        color: #5e5e5e;
        box-sizing: border-box;
        box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);

        .header,
        .content {
            padding: 1.5rem;
        }

        .header {
            padding-bottom: 0;
            text-align: center;

            .title {
                font-size: 2.25rem;
                color: #000;
                margin: 0;
            }
            .subtitle {
                font-size: 1.5rem;
                font-weight: 300;
            }

        }

    }

</style>