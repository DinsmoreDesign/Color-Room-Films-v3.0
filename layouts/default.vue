<template>

    <div>
        
        <Navigation />

        <nuxt />

        <ContentBlock hasTextCentered v-if="cta.isVisible">

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

        </ContentBlock>

        <FooterBlock
            iconName="crf"
            :address="contactInfo.address"
            :phone="contactInfo.phoneNumber"
            :email="contactInfo.emailAddress"
            :companyName="contactInfo.companyName"
            :socialLinks="contactInfo.socialLinks"
        >
            <p>
                Every story is unique and we strive to create a film as unique as your relationship, which you can share with your loved ones for years to come. Your wedding is a precious moment in your life and our goal is to capture it in the most emotional and honest way possible. We pride ourselves on <em>getting it right</em> without <em>getting in the way</em> to deliver a film you'll be proud to call your own.
            </p>
        </FooterBlock>

    </div>

</template>





<script>

    import { mapState } from 'vuex';

    import Navigation from '../components/Navigation.vue';
    import FooterBlock from '../components/FooterBlock.vue';
    import ContentBlock from '../components/ContentBlock.vue';

    export default {

        components: {
            Navigation,
            FooterBlock,
            ContentBlock
        },
        computed: {

            ...mapState({
                contactInfo: state => state.contactInfo,
                cta: state => state.cta
            })

        }

    }

</script>





<style>

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
