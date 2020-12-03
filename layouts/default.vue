<template>

    <div>

        <!-- <Banner
            v-if="banner.show"
            :title="banner.title"
            :urlTitle="banner.urlTitle"
            :url="banner.url"
            :cta="banner.cta"
        /> -->
        
        <Navigation :navItems="navItems" />

        <nuxt />

        <TitleBlock
            v-if="showQuote && quote.position === 1"
            title="Why couples love us:"
            :subtitle="quote.message"
            :color="cta && cta.isVisible ? 'light' : 'dark'"
        />

        <section class="container has-text-centered" v-if="cta.isVisible">
            <ButtonLink :url="cta.url" :title="cta.title">
                {{ cta.content }}
            </ButtonLink>
        </section>

        <TitleBlock
            v-if="showQuote && quote.position === 2"
            title="Why couples love us:"
            :subtitle="quote.message"
            color="dark"
        />

        <MainFooter
            iconName="crf"
            :address="footer.contactInfo.address"
            :phone="footer.contactInfo.phoneNumber"
            :email="footer.contactInfo.emailAddress"
            :companyName="footer.contactInfo.companyName"
            :socialLinks="footer.contactInfo.socialLinks"
            :title="footer.title"
            :content="footer.content"
        />

        <SubFooter/>

    </div>

</template>





<script>

    import { mapState, mapActions } from 'vuex';

    import Banner from '../components/Banner.vue';
    import TitleBlock from '../components/TitleBlock.vue';
    import Navigation from '../components/Navigation.vue';
    import ButtonLink from '../components/ButtonLink.vue';
    import MainFooter from '../components/MainFooter.vue';
    import SubFooter from '../components/SubFooter.vue';

    export default {

        components: {

            Banner,
            TitleBlock,
            Navigation,
            ButtonLink,
            MainFooter,
            SubFooter
            
        },
        computed: {

            ...mapState({

                cta: state => state.cta,
                footer: state => state.footer,
                navItems: state => state.navItems,
                quote: state => state.currentQuote

            }),
            showQuote() {

                return this.$route.name !== 'reviews' ? true : false;

            },
            banner() {

                return {
                    title: 'Now accepting bookings for 2022 and beyond.',
                    urlTitle: 'Book your wedding now!',
                    url: {
                        name: 'contact',
                        hash: '#formTitle'
                    },
                    cta: 'Book now!',
                    show: this.$route.name !== 'contact'
                }

            }

        },
        created() {

            this.updateSupportsWebP().then(() => { this.updateQuotePositions(2) });

        },
        methods: {

            ...mapActions([

                'updateSupportsWebP',
                'updateQuotePositions'

            ])

        }

    }

</script>





<style lang="scss">

    * {
        box-sizing: border-box;
    }
    html,
    body {
        margin: 0;
        font-family: 'Roboto', Arial, sans-serif;
        color: #5e5e5e;
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
    
    h1,
    h2,
    h3,
    h4,
    h5 {
        font-weight: 400;
    }

    section {
        padding: 5rem 0;

        h3 {
            font-size: 1.75rem;
            margin: 0 0 3rem 0;
        }

        p {
            margin: 0 0 1.5rem 0;
            font-weight: 400;
            font-size: 1.2rem;

            &:last-child {
                margin: 0;
            }

        }

        &.dark {
            background: #5e5e5e;
            color: #FFF;
        }

        &.light {
            background: #dbdbdb;
            color: #5e5e5e;
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

    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
        opacity: 0;
        transform: translateY(30px);
    }

</style>
