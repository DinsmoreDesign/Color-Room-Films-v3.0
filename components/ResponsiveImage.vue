<template>

    <!-- <img :src="smallImage" :sizes="size" :srcset="imageSources"> -->

    <picture>
        <source type="image/webp" :srcset="imageSources.webp" />
        <source :srcset="imageSources.jpg" />
        <img :src=" largeImage + '.jpg' " :alt="title" />
    </picture>

</template>





<script>

    export default {

        props: {
            size: {
                type: String,
                required: false,
                default: "100vw"
            },
            smallImage: {
                type: String,
                required: true
            },
            mediumImage: {
                type: String,
                required: false
            },
            largeImage: {
                type: String,
                required: false
            },
            title: {
                type: String,
                required: true
            }
        },
        computed: {
            imageSources() {

                let sources = {
                    webp: '',
                    jpg: ''
                };

                if (this.smallImage) {
                    sources.webp += `${ this.smallImage }.webp 640w`;
                    sources.jpg += `${ this.smallImage }.jpg 640w`;
                }
                if (this.mediumImage) {
                    sources.webp += `, ${this.mediumImage}.webp 1280w`;
                    sources.jpg += `, ${this.mediumImage}.jpg 1280w`;
                }
                if (this.largeImage) {
                    sources.webp += `, ${this.largeImage}.webp 1920w`;
                    sources.jpg += `, ${this.largeImage}.jpg 1920w`;
                }

                return sources;

            }
        }

    }

</script>





<style scoped>

    img {
        min-width: 100%;
        width: 100%;
    }

</style>