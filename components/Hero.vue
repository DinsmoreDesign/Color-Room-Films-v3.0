<template>

    <section class="hero" :style="{ 'min-height': height }">
        <slot/>
        <a role="button" href="javascript:void(0);" title="Continue to content" @click="scrollToContent" v-if="showScrollIcon">
            <i class="icon-angle-down subtitle is-1" aria-hidden="true"></i>
        </a>
    </section>

</template>





<script>

    export default {

        props: {
            background: {
                type: String,
                required: false
            },
            height: {
                type: String,
                required: false,
                default: '100vh'
            },
            showScrollIcon: {
                type: Boolean,
                required: false,
                default: false
            },
            scrollAnchor: {
                type: String,
                required: false,
                default: 'content'
            }
        },
        methods: {
            scrollToContent() {

                document.getElementById(this.scrollAnchor).scrollIntoView({
                    behavior: 'smooth'
                });

            }
        }

    }

</script>





<style lang="scss" scoped>

    .hero {
            -webkit-background-size: cover !important;
            -moz-background-size: cover !important;
            -o-background-size: cover !important;
        background-size: cover !important;
        color: white;
        width: 100%;

        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
    }

</style>