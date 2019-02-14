<template>

    <nav class="navbar">

        <span class="navbar-toggle" @click="showMobileNav = !showMobileNav">
            <i class="icon-bars" v-if="!showMobileNav"></i>
            <i class="icon-close" v-else></i>
        </span>

        <nuxt-link class="logo" to="/" title="Return to the Color Room Films landing page">
            <img src="~static/images/logo.svg" alt="View the Color Room Films Homepage">
        </nuxt-link>

        <ul :class="{ 'main-nav': true, 'active': showMobileNav }">

            <li v-for="item in navItems" :key="item.name" @click="showMobileNav = false">
                <nuxt-link
                    :title="`View the Color Room Films ${item.name.toLowerCase()} page`"
                    class="nav-links"
                    :to="item.url"
                    exactActiveClass="active"
                    activeClass="parent-active"
                >{{ item.name }}</nuxt-link>
            </li>
            <li>
                <a class="nav-links" title="Visit Color Room Films on WeddingWire" href="https://www.weddingwire.com/reviews/color-room-films-jackson/fd77ea76d63e4a5f.html" target="_blank">
                    <i class="icon-weddingwire"></i>
                </a>
            </li>
            <li>
                <a class="nav-links" title="Visit Color Room Films on The Knot" href="https://www.theknot.com/marketplace/color-room-films-llc-jackson-nj-963435" target="_blank">
                    <i class="icon-theknot"></i>
                </a>
            </li>
            
        </ul>

    </nav>

</template>





<script>

    export default {

        props: {

            navItems: {
                type: Array,
                required: true
            }

        },
        data() {

            return {
                showMobileNav: false
            }
            
        }

    }

</script>





<style lang="scss" scoped>

    .navbar {
        font-size: 1.25rem;
        background-color: #FFF;
        padding-bottom: 0.5rem;

        .nav-links,
        .logo {
            text-decoration: none;
            height: 2rem;

            img {
                height: 2rem;
            }
            
        }

        .nav-links {
            color: #4a4a4a;

            &:hover {
                opacity: 0.7;
            }

            &.active {
                color: #26a69a;
            }

        }

        ul {
            margin: 1.25rem;
            padding: 0;
        }
        
    }

    .main-nav {
        list-style-type: none;
        display: none;

        &.active {
            display: block;
        }

        li {
            text-align: center;
            margin: 15px auto;
        }

    }

    .logo {
        display: inline-block;
        margin-top: 1rem;
        margin-left: 1rem;
    }

    .navbar-toggle {
        position: absolute;
        top: 1rem;
        right: 1rem;
        cursor: pointer;
        font-size: 1.75rem;
    }

    @media screen and (min-width: 1024px) {
        .navbar {
            display: flex;
            justify-content: space-between;
            padding-bottom: 0;
            height: 70px;
            align-items: center;
        }

        .main-nav {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
        }

        .nav-links {

            &.active {
                
                &.active {
                    color: #4a4a4a;
                }

                &:after {
                    content: '';
                    height: 1px;
                    background: #4a4a4a; 
                    display:block;
                }

            }

            &:hover {

                &:after {
                    content: '';
                    height: 1px;
                    background: #4a4a4a; 
                    display:block;
                }

            }

        }

        .main-nav li {
            margin: 0;

            &:not(:first-child) {
                margin-left: 1.5rem;
            }

        }

        .logo {
            margin-top: 0;

            &:hover {
                opacity: 0.7;
            }

        }

        .navbar-toggle {
            display: none;
        }
    }

    /* Slide-down transitions for navigation and dropdowns */

	.slide-down-enter-active,
    .slide-down-leave-active {
		-moz-transition-duration: 0.3s;
		-webkit-transition-duration: 0.3s;
		-o-transition-duration: 0.3s;
		transition-duration: 0.3s;
		-moz-transition-timing-function: ease-in;
		-webkit-transition-timing-function: ease-in;
		-o-transition-timing-function: ease-in;
		transition-timing-function: ease-in;
		max-height: 1000px;
		overflow: hidden;
    }

	.slide-down-enter,
	.slide-down-leave-to {
		overflow: hidden;
		max-height: 0;
		padding-top: 0;
		padding-bottom: 0;
		margin-top: 0;
		margin-bottom: 0;
		-moz-transition-duration: 0.3s;
		-webkit-transition-duration: 0.3s;
		-o-transition-duration: 0.3s;
		transition-duration: 0.3s;
		-moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
		-webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
		-o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
		transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
	}

</style>