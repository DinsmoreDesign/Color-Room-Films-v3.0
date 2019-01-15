<template>

    <picture>

        <!-- ((1280px - 640px) / 2) + 640px -->
        <!-- <source media="(max-width: 960px)" type="image/webp" :srcset=" smallImage + '.webp' " v-if="smallImage" />
        <source media="(max-width: 960px)" type="image/jpeg" :srcset=" smallImage + '.jpg' " v-if="smallImage" /> -->

        <!-- ((1920px - 1280px) / 2) + 1280px -->
        <source media="(max-width: 1600px)" type="image/webp" :srcset=" smallImage + '.webp' " v-if="smallImage" />
        <source media="(max-width: 1600px)" type="image/jpeg" :srcset=" smallImage + '.jpg' " v-if="smallImage" />

        <!-- 1px + ((2560px - 1920px) / 2) + 1920px -->
        <source media="(min-width: 1601px)" type="image/webp" :srcset=" mediumImage + '.webp' " v-if="mediumImage" />
        <source media="(min-width: 1601px)" type="image/jpeg" :srcset=" mediumImage + '.jpg' " v-if="mediumImage" />

        <!-- 2560px - ((2560px - 1920px) / 2) + 1px -->
        <source media="(min-width: 2241px)" type="image/webp" :srcset=" largeImage + '.webp' " v-if="largeImage" />
        <source media="(min-width: 2241px)" type="image/jpeg" :srcset=" largeImage + '.jpg' " v-if="largeImage" />

        <img :src=" largeImage + '.jpg' " sizes="100vw" :srcset="imageSources.jpg">

    </picture>

</template>





<script>

    export default {

        props: {
            smallImage: { // 480p
                type: String,
                required: true
            },
            mediumImage: { // 720p
                type: String,
                required: false
            },
            largeImage: { // 1080p
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