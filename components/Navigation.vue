<template>

    <nav class="navbar is-fixed-top">

        <div class="navbar-brand">
            <nuxt-link class="navbar-item" to="/">
                <img src="https://colorroomfilms.com/img/logo.svg" alt="View the Color Room Films Homepage">
            </nuxt-link>
            <div class="navbar-burger burger" data-target="navMenu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div id="navMenu" class="navbar-menu">

            <div class="navbar-end">
                <nuxt-link class="navbar-item is-tab" to="/" exactActiveClass="is-active" activeClass="parent-is-active">Home</nuxt-link>
                <nuxt-link class="navbar-item is-tab" to="/about" exactActiveClass="is-active" activeClass="parent-is-active">About</nuxt-link>
                <nuxt-link class="navbar-item is-tab" to="/weddings" exactActiveClass="is-active" activeClass="parent-is-active">Weddings</nuxt-link>
                <nuxt-link class="navbar-item is-tab" to="/reviews" exactActiveClass="is-active" activeClass="parent-is-active">Reviews</nuxt-link>
                <nuxt-link class="navbar-item is-tab" to="/contact" exactActiveClass="is-active" activeClass="parent-is-active">Contact</nuxt-link>
                <a class="navbar-item is-tab is-icon is-hidden-mobile social" title="Visit Color Room Films on WeddingWire" href="http://www.weddingwire.com/reviews/color-room-films-jackson/fd77ea76d63e4a5f.html" target="_blank">
                    <i class="icon-weddingwire"></i>
                </a>
                <a class="navbar-item is-tab is-icon is-hidden-mobile social" title="Visit Color Room Films on The Knot" href="https://www.theknot.com/marketplace/color-room-films-llc-jackson-nj-963435" target="_blank">
                    <i class="icon-theknot"></i>
                </a>
            </div>
        </div>
    </nav>

</template>





<script>

    export default {



    }

</script>





<style lang="scss" scoped>

    .navbar {
        min-height: 3.25rem;
        background-color: rgba(255,255,255, 0.7);

        .navbar-brand {

            img {
                height: 1.75rem;
                max-height: 3rem;
            }

        }

        .navbar-item {
            color: #7a7a7a;
            font-size: 1.5rem;
            padding-bottom: calc(0.75rem - 1px);
            padding-left: 1rem;
            padding-right: 1rem;
            padding-top: calc(0.75rem - 1px);

            &.is-tab {

                &:hover {
                    border-bottom-color: #4a4a4a;
                    color: #4a4a4a;
                    border-bottom-width: 3px;
                }
                
                &.is-active {
                    border-bottom-color: #4a4a4a;
                    color: #4a4a4a;
                }

                &.is-icon {
                    color: white;
                    background-color: #4a4a4a;

                    &:hover {
                        color: white;
                        border-bottom-color: white;
                        background-color: #4a4a4a !important;
                    }

                }

            }

        }

    }

</style>