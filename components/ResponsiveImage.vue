<template>

    <img :src="smallImage" :sizes="size" :srcset="imageSources">  

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
            xlImage: {
                type: String,
                required: false
            }
        },
        computed: {
            imageSources() {

                let statement = '';

                if (this.smallImage) statement += this.smallImage + ' 640w, ';
                if (this.mediumImage) statement += this.mediumImage + ' 1280w, ';
                if (this.largeImage) statement += this.largeImage + ' 1920w, ';
                if (this.xlImage) statement += this.xlImage + ' 2048w';

                return statement;

            }
        }

    }

</script>





<style lang="scss" scoped>

    

</style>