<template>

    <section class="hero is-fullheight" :style=" background ? 'background:url(' + background + ') no-repeat center center fixed' : '' ">
        <div class="hero is-fullheight light-overlay">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <slot></slot>
                </div>
            </div>
            <div class="hero-foot is-hidden-mobile">
                <div class="container">
                    <div class="tabs is-centered">
                        <ul>
                            <li>
                                <a role="button" href="javascript:void(0);" title="Continue to content" @click="scrollToContent">
                                    <i class="icon-angle-down subtitle is-1" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>





<script>

    export default {

        props: {
            background: {
                type: String,
                required: false
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

    section {

        &.hero {
            -webkit-background-size: cover !important;
            -moz-background-size: cover !important;
            -o-background-size: cover !important;
            background-size: cover !important;
            color: white;
        }

    }

    .hero {

        &.light-overlay {
            background-color: rgba(255, 255, 255, 0.3);
        }

    }

</style>