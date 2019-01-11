<template>

    <div>
        
        <Navigation :navItems="navItems" />

        <nuxt />

        <!-- <ContentBlock hasTextCentered v-if="cta.isVisible">

            <div class="columns">
                <div class="column">
                    <h3 class="title is-1">{{ cta.content.header }}</h3>
                    <nuxt-link class="button is-primary is-outlined is-large" :to="cta.content.url" :title="cta.content.urlTitle">
                        {{ cta.content.buttonText }}
                    </nuxt-link>
                </div>
                <div class="column">
                    <h3 class="title is-1">Ready to talk?</h3>
                    <nuxt-link class="button is-primary is-large" to="/contact" title="Visit our Contact page and send us a message">
                        Call, text or message us!
                    </nuxt-link>
                </div>
            </div>

        </ContentBlock> -->

        <MainFooter
            iconName="crf"
            :address="contactInfo.address"
            :phone="contactInfo.phoneNumber"
            :email="contactInfo.emailAddress"
            :companyName="contactInfo.companyName"
            :socialLinks="contactInfo.socialLinks"
        >
            <div v-if=" $route.name !== 'index' ">
                <h4 class="title is-4 has-text-white">OUR PHILOSOPHY</h4>
                <p style="padding-bottom: 3rem;">
                    The most important thing to us is your story. At Color Room Films, we deliver precious memories of your special day that you can relive for years to come. Our goal is to remain discreet and make sure you remain the focal point all day, while telling your story in the most emotional, cinematic and honest way possible. We use only the highest grade cinematic tools available to tell your story; the same cameras, lenses, aerial drones and other tools you would see on a Hollywood set, at the best value for your dollar.
                </p>
                <h4 class="title is-4 has-text-white">WHY US?</h4>
                <p>
                    Every wedding is unique and every couple is different, that's why every project we work on is approached differently. No two events we've filmed are ever the same; we purchase exclusive music publishing rights for each wedding and don't believe in releasing films that are lacking individuality. It's our job to get to know you and what you like, so we can represent your personality as genuinely as possible.
                </p>
            </div>
            <p v-else>
                Every story is unique and we strive to create a film as unique as your relationship, which you can share with your loved ones for years to come. Your wedding is a precious moment in your life and our goal is to capture it in the most emotional and honest way possible. We pride ourselves on <em>getting it right</em> without <em>getting in the way</em> to deliver a film you'll be proud to call your own.
            </p>
        </MainFooter>
        <SubFooter/>

    </div>

</template>





<script>

    import { mapState } from 'vuex';

    import Navigation from '../components/Navigation.vue';
    import MainFooter from '../components/MainFooter.vue';
    import SubFooter from '../components/SubFooter.vue';
    import ContentBlock from '../components/ContentBlock.vue';

    export default {

        components: {
            Navigation,
            MainFooter,
            SubFooter,
            ContentBlock
        },
        computed: {

            ...mapState({
                contactInfo: state => state.contactInfo,
                cta: state => state.cta,
                navItems: state => state.navItems
            })

        }

    }

</script>





<style lang="scss">

    html,
    body {
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }

    .container {
        width: 90%;
        margin-left: auto;
        margin-right: auto;

        @media only screen and (min-width: 48em) {
            width: 80%;
        }

        @media only screen and (min-width: 64em) {
            width: 75%;
            //max-width: 60rem;
        }
    }

    .row.no-gap {
        margin: 0;
    }

    .row.no-gap div[class^="col-"] {
        padding: 0;
    }

    section {
        padding: 3rem 0;

        h1 {
            font-size: 3rem;
        }

        h1,
        p {
            margin: 0;
        }

    }

    .has-text-centered {
        text-align: center;
    }

    .page-enter-active, .page-leave-active {
        transition: opacity .5s
    }
    .page-enter, .page-leave-active {
        opacity: 0
    }

    .bounce-enter-active {
        animation: bounce-in .8s;
    }
    .bounce-leave-active {
        animation: bounce-out .5s;
    }
    @keyframes bounce-in {
        0% { transform: scale(0) }
        50% { transform: scale(1.5) }
        100% { transform: scale(1) }
    }
    @keyframes bounce-out {
        0% { transform: scale(1) }
        50% { transform: scale(1.5) }
        100% { transform: scale(0) }
    }

    .slide-left-enter,
    .slide-right-leave-active {
        opacity: 0;
        transform: translate(30px, 0);
    }
    .slide-left-leave-active,
    .slide-right-enter {
        opacity: 0;
        transform: translate(-30px, 0);
    }

</style>
