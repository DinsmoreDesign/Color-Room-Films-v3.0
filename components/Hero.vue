<template>

    <section class="hero is-fullheight is-primary" :style=" 'background:url(' + background + ') no-repeat center center fixed' ">
        <div class="hero is-fullheight dark-overlay">
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
                                <a href="#content" title="Continue to content">
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
                required: true
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

        &.dark-overlay {
            background-color: rgba(0, 0, 0, 0.25);
        }

    }

</style>