<template>
    <div>
        <Hero
            :class="[
                $store.state.supportsWebP ? 'contact-hero-webp' : 'contact-hero'
            ]"
            height="calc(100vh - 70px)"
        />

        <TitleBlock
            title="We'd love to talk!"
            subtitle="Email us your questions."
            id="formTitle"
            color="dark"
        />

        <section class="container" id="form">
            <iframe
                name="lc_contact_form"
                frameborder="0"
                width="100%"
                height="600"
                src="https://302419.17hats.com/p#/embed/bbkznbwthtzczfvphrfcrwfzrfzntdbf"
            ></iframe>
        </section>
    </div>
</template>

<script>
import { mapActions } from "vuex";

import Hero from "~/components/Hero.vue";
import TitleBlock from "~/components/TitleBlock.vue";

export default {
    name: "Contact",
    watchQuery: ["page"],
    key: to => to.fullPath,
    transition(to, from) {
        if (!from) return "slide-left";
        return +to.query.page < +from.query.page ? "slide-right" : "slide-left";
    },
    components: {
        Hero,
        TitleBlock
    },
    head() {
        return {
            title: "Contact | Color Room Films IN",
            meta: [
                {
                    property: "og:title",
                    content: "Contact | Color Room Films IN"
                },
                {
                    name: "description",
                    content:
                        "Contact Indiana’s Color Room Films today and let us transform your wedding or special event into a film you can treasure for years."
                },
                {
                    property: "og-description",
                    content:
                        "Contact Indiana’s Color Room Films today and let us transform your wedding or special event into a film you can treasure for years."
                },
                {
                    name: "keywords",
                    content:
                        "Indiana, videographer, wedding film, cinematic, motion picture memories, IN, wedding video, wedding movie, contact us, special, Jackson, Fort Wayne, Indiana, IN"
                }
            ],
            script: [
                {
                    src: "https://302419.17hats.com/vendor/iframeSizer.min.js",
                    type: "text/javascript"
                }
            ]
        };
    },
    created() {
        this.updateCallToAction({
            isVisible: false
        });

        this.updateFooter({
            title: "WHY US?",
            content: `Every wedding is unique and every couple is different, that's why every project we work on is approached differently. No two events we've filmed are ever the same; we purchase exclusive music publishing rights for each wedding and don't believe in releasing films that are lacking individuality. It's our job to get to know you and what you like, so we can represent your personality as genuinely as possible.`
        });

        this.updateCurrentQuote();
    },
    methods: {
        ...mapActions({
            updateCallToAction: "cta/updateCallToAction",
            updateFooter: "footer/updateFooter",
            updateCurrentQuote: "updateCurrentQuote"
        })
    }
};
</script>

<style lang="scss" scoped>
.contact-container {
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

    .email-container {
        display: flex;
        justify-content: center;

        .email {
            color: #5e5e5e;
            font-size: 2rem;
            text-align: center;
            text-decoration: none;
            border-style: solid;
            border-width: 0 0 1px 0;
            border-color: #fff;
            transition: border-color 0.5s;

            &:after {
                content: attr(data-address) "@" attr(data-domain) "."
                    attr(data-tld);
            }

            &:hover {
                border-color: #5e5e5e;
            }
        }
    }
}

/* Modern Browsers: */
.contact-hero-webp {
    // 480p default
    background-image: linear-gradient(
            rgba(255, 255, 255, 0.3),
            rgba(255, 255, 255, 0.3)
        ),
        url(/images/heros/contact/480p.webp);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}

@media only screen and (min-width: 960px) {
    // Halfway between 480p and 720p
    .contact-hero-webp {
        background-image: linear-gradient(
                rgba(255, 255, 255, 0.3),
                rgba(255, 255, 255, 0.3)
            ),
            url(/images/heros/contact/720p.webp);
    }
}

@media only screen and (min-width: 1600px) {
    // Halfway between 720p and 1080p
    .contact-hero-webp {
        background-image: linear-gradient(
                rgba(255, 255, 255, 0.3),
                rgba(255, 255, 255, 0.3)
            ),
            url(/images/heros/contact/1080p.webp);
    }
}

@media only screen and (min-width: 2240px) {
    // Halfway between 1080p and 1440p
    .contact-hero-webp {
        background-image: linear-gradient(
                rgba(255, 255, 255, 0.3),
                rgba(255, 255, 255, 0.3)
            ),
            url(/images/heros/contact/1440p.webp);
    }
}

/* Legacy Browsers: */
.contact-hero {
    // 480p default
    background-image: linear-gradient(
            rgba(255, 255, 255, 0.3),
            rgba(255, 255, 255, 0.3)
        ),
        url(/images/heros/contact/480p.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}

@media only screen and (min-width: 960px) {
    // Halfway between 480p and 720p
    .contact-hero {
        background-image: linear-gradient(
                rgba(255, 255, 255, 0.3),
                rgba(255, 255, 255, 0.3)
            ),
            url(/images/heros/contact/720p.jpg);
    }
}

@media only screen and (min-width: 1600px) {
    // Halfway between 720p and 1080p
    .contact-hero {
        background-image: linear-gradient(
                rgba(255, 255, 255, 0.3),
                rgba(255, 255, 255, 0.3)
            ),
            url(/images/heros/contact/1080p.jpg);
    }
}

@media only screen and (min-width: 2240px) {
    // Halfway between 1080p and 1440p
    .contact-hero {
        background-image: linear-gradient(
                rgba(255, 255, 255, 0.3),
                rgba(255, 255, 255, 0.3)
            ),
            url(/images/heros/contact/1440p.jpg);
    }
}
</style>
