<template>

    <picture>

        <!-- Default: 480p -->
        <source media="(max-width: 960px)" type="image/webp" :srcset=" smallImage + '.webp' " v-if="smallImage" />
        <source media="(max-width: 960px)" type="image/jpeg" :srcset=" smallImage + '.jpg' " v-if="smallImage" />

        <!-- Halfway between 480p and 720p -->
        <source media="(min-width: 960px)" type="image/webp" :srcset=" mediumImage + '.webp' " v-if="mediumImage" />
        <source media="(min-width: 960px)" type="image/jpeg" :srcset=" mediumImage + '.jpg' " v-if="mediumImage" />

        <!-- Halfway between 720p and 1080p -->
        <source media="(min-width: 1600px)" type="image/webp" :srcset=" largeImage + '.webp' " v-if="largeImage" />
        <source media="(min-width: 1600px)" type="image/jpeg" :srcset=" largeImage + '.jpg' " v-if="largeImage" />

        <!-- Halfway between 1080p and 1440p -->
        <source media="(min-width: 2240px)" type="image/webp" :srcset=" xlImage + '.webp' " v-if="xlImage" />
        <source media="(min-width: 2240px)" type="image/jpeg" :srcset=" xlImage + '.jpg' " v-if="xlImage" />

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
                required: true
            },
            xlImage: { // 1440p
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

                sources.webp += `${ this.smallImage }.webp 640w`;
                sources.jpg += `${ this.smallImage }.jpg 640w`;

                if (this.mediumImage) {
                    sources.webp += `, ${ this.mediumImage }.webp 960w`;
                    sources.jpg += `, ${ this.mediumImage }.jpg 960w`;
                }
                if (this.largeImage) {
                    sources.webp += `, ${this.largeImage}.webp 1600w`;
                    sources.jpg += `, ${this.largeImage}.jpg 1600w`;
                }
                if (this.xlImage) {
                    sources.webp += `, ${this.xlImage}.webp 2240w`;
                    sources.jpg += `, ${this.xlImage}.jpg 2240w`;
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