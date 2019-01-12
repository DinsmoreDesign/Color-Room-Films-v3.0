<template>
  
    <div>

        <Hero class="contact-hero"/>

        <section class="container title-block has-text-centered">
            <h1>We'd love to talk!</h1>
            <p>Call, text or email us your questions.</p>
        </section>

        <section class="dark">
            <div class="container address-container">

                <div class="row">
                    <div class="col-xs-12 col-sm-6 has-text-right">
                        <p><strong>Location:</strong></p>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                        <p>
                            521 Bangs Ave,<br/>
                            Ashbury Park, NJ 07712
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-6 has-text-right">
                        <p><strong>Phone #:</strong></p>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                        <p>+1.862.221.5716</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-6 has-text-right">
                        <p><strong>Email Address:</strong></p>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                        <p>info@colorroomfilms.com</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-6 has-text-right">
                        <p><strong>Hours:</strong></p>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                        <p>By appointment</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="container">

            <iframe name="lc_contact_form" frameborder="0" width="100%" height="600" src="https://302419.17hats.com/embed/lead/form/bbkznbwthtzczfvphrfcrwfzrfzntdbf"></iframe><script type="text/javascript" src="https://302419.17hats.com/vendor/iframeSizer.min.js"></script>

        </section>

    </div>

</template>





<script>

    import { mapActions } from 'vuex';

    import Hero from '../components/Hero.vue';

    export default {

        name: 'Contact',
        watchQuery: ['page'],
        key: to => to.fullPath,
        transition(to, from) {
            if (!from) return 'slide-left'
            return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
        },
        components: {
            Hero
        },
        created() {

            this.updateCallToAction({
                isVisible: false
            });

            this.updateFooter({
                title: 'WHY US?',
                content: `Every wedding is unique and every couple is different, that's why every project we work on is approached differently. No two events we've filmed are ever the same; we purchase exclusive music publishing rights for each wedding and don't believe in releasing films that are lacking individuality. It's our job to get to know you and what you like, so we can represent your personality as genuinely as possible.`
            })

        },
        methods: {

            ...mapActions([
                'updateCallToAction',
                'updateFooter'
            ])

        }

    }

</script>





<style lang="scss" scoped>

    .address-container {
        
        p {
            font-size: 1.5rem;
            font-weight: 300;
        }

        .row {
            margin-bottom: 1.5rem;

            div {
                text-align: center;
            }

            @media only screen and (min-width: 768px) {
                div {
                    text-align: left;

                    &:first-child {
                        text-align: right;
                    }

                }
            }

        }

    }
    

    .contact-hero {
        background: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(../static/images/heros/about-720p.jpg) no-repeat center center fixed;
    }

    @media only screen and (min-width: 1280px) {
        .contact-hero {
            background: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(../static/images/heros/about-1080p.jpg) no-repeat center center fixed;
        }
    }

    @media only screen and (min-width: 1920px) {
        .contact-hero {
            background: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(../static/images/heros/contact.jpg) no-repeat center center fixed;
        }
    }

</style>