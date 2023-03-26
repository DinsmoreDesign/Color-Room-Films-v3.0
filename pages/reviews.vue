<template>
    <div>
        <!-- Hero and Title Block -->
        <Hero
            :class="[
                $store.state.supportsWebP ? 'reviews-hero-webp' : 'reviews-hero'
            ]"
            height="calc(100vh - 70px)"
        />

        <TitleBlock
            title="Reviews of our favorite memories"
            subtitle="...cherished forever:"
            color="dark"
        />

        <!-- CTA -->
        <section class="dark reviews">
            <div class="container">
                <div class="row">
                    <div
                        class="col-sm-4 col-xs-12 review-link"
                        v-for="link in reviews.links"
                        :key="link.icon"
                    >
                        <a :href="link.url" :title="link.title" target="_blank">
                            <p>
                                <i :class="'icon-' + link.icon"></i>
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import Hero from "~/components/Hero.vue";
import TitleBlock from "~/components/TitleBlock.vue";
import ReviewBlock from "~/components/ReviewBlock.vue";

export default {
    watchQuery: ["page"],
    key: to => to.fullPath,
    transition(to, from) {
        if (!from) return "slide-left";
        return +to.query.page < +from.query.page ? "slide-right" : "slide-left";
    },
    components: {
        Hero,
        TitleBlock,
        ReviewBlock
    },
    head() {
        return {
            title: "Reviews | Color Room Films IN",
            meta: [
                {
                    property: "og:title",
                    content: "Reviews | Color Room Films IN"
                },
                {
                    name: "description",
                    content:
                        "We are the best Wedding videographer and photographer  in ocean county. Don’t just take our word for it, see what others have to say about us."
                },
                {
                    property: "og-description",
                    content:
                        "We are the best Wedding videographer and photographer  in ocean county. Don’t just take our word for it, see what others have to say about us."
                },
                {
                    name: "keywords",
                    content:
                        "Indiana, videographer, reviews, wedding film, cinematic, motion picture memories, IN, wedding video, wedding movie, portfolio, contact, special day, Fort Wayne, Indiana, IN"
                }
            ]
        };
    },
    computed: {
        ...mapState({
            reviews: state => state.reviews
        })
    },
    created() {
        this.updateCallToAction({
            isVisible: true,
            url: "/contact",
            title: "Visit our Contact page to send us a message",
            content: "SEND US A MESSAGE"
        });

        this.updateFooter({
            title: "OUR PHILOSOPHY",
            content:
                "The most important thing to us is your story. At Color Room Films, we deliver precious memories of your special day that you can relive for years to come. Our goal is to remain discreet and make sure you remain the focal point all day, while telling your story in the most emotional, cinematic and honest way possible. We use only the highest grade cinematic tools available to tell your story; the same cameras, lenses, aerial drones and other tools you would see on a Hollywood set, at the best value for your dollar."
        });
    },
    methods: {
        ...mapActions({
            updateCallToAction: "cta/updateCallToAction",
            updateFooter: "footer/updateFooter"
        })
    }
};
</script>

<style lang="scss" scoped>
.reviews {
    text-align: center;
    padding-top: 0;

    h3 {
        font-weight: 300;
    }

    a {
        color: #fff;
        text-decoration: none;

        i {
            font-size: 3.5rem;
        }

        &:hover i {
            opacity: 0.7;
        }
    }
}

.review,
.review-link {
    margin-bottom: 3rem;

    &:last-child {
        margin-bottom: 0;
    }
}

@media screen and (min-width: 768px) {
    .review-link {
        margin-bottom: 0;
    }
}

/* Modern Browsers: */
.reviews-hero-webp {
    // 480p default
    background-image: linear-gradient(
            rgba(255, 255, 255, 0.3),
            rgba(255, 255, 255, 0.3)
        ),
        url(/images/heros/reviews/480p.webp);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}

@media only screen and (min-width: 960px) {
    // Halfway between 480p and 720p
    .reviews-hero-webp {
        background-image: linear-gradient(
                rgba(255, 255, 255, 0.3),
                rgba(255, 255, 255, 0.3)
            ),
            url(/images/heros/reviews/720p.webp);
    }
}

@media only screen and (min-width: 1600px) {
    // Halfway between 720p and 1080p
    .reviews-hero-webp {
        background-image: linear-gradient(
                rgba(255, 255, 255, 0.3),
                rgba(255, 255, 255, 0.3)
            ),
            url(/images/heros/reviews/1080p.webp);
    }
}

@media only screen and (min-width: 2240px) {
    // Halfway between 1080p and 1440p
    .reviews-hero-webp {
        background-image: linear-gradient(
                rgba(255, 255, 255, 0.3),
                rgba(255, 255, 255, 0.3)
            ),
            url(/images/heros/reviews/1440p.webp);
    }
}

.reviews-testimonial-webp {
    // 480p default
    background-image: linear-gradient(
            rgba(255, 255, 255, 0.3),
            rgba(255, 255, 255, 0.3)
        ),
        url(/images/heros/reviews/testimonial-480p.webp);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}

@media only screen and (min-width: 960px) {
    // Halfway between 480p and 720p
    .reviews-testimonial-webp {
        background-image: linear-gradient(
                rgba(255, 255, 255, 0.3),
                rgba(255, 255, 255, 0.3)
            ),
            url(/images/heros/reviews/testimonial-720p.webp);
    }
}

@media only screen and (min-width: 1600px) {
    // Halfway between 720p and 1080p
    .reviews-testimonial-webp {
        background-image: linear-gradient(
                rgba(255, 255, 255, 0.3),
                rgba(255, 255, 255, 0.3)
            ),
            url(/images/heros/reviews/testimonial-1080p.webp);
    }
}

@media only screen and (min-width: 2240px) {
    // Halfway between 1080p and 1440p
    .reviews-testimonial-webp {
        background-image: linear-gradient(
                rgba(255, 255, 255, 0.3),
                rgba(255, 255, 255, 0.3)
            ),
            url(/images/heros/reviews/testimonial-1440p.webp);
    }
}

/* Legacy Browsers: */
.reviews-hero {
    // 480p default
    background-image: linear-gradient(
            rgba(255, 255, 255, 0.3),
            rgba(255, 255, 255, 0.3)
        ),
        url(/images/heros/reviews/480p.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}

@media only screen and (min-width: 960px) {
    // Halfway between 480p and 720p
    .reviews-hero {
        background-image: linear-gradient(
                rgba(255, 255, 255, 0.3),
                rgba(255, 255, 255, 0.3)
            ),
            url(/images/heros/reviews/720p.jpg);
    }
}

@media only screen and (min-width: 1600px) {
    // Halfway between 720p and 1080p
    .reviews-hero {
        background-image: linear-gradient(
                rgba(255, 255, 255, 0.3),
                rgba(255, 255, 255, 0.3)
            ),
            url(/images/heros/reviews/1080p.jpg);
    }
}

@media only screen and (min-width: 2240px) {
    // Halfway between 1080p and 1440p
    .reviews-hero {
        background-image: linear-gradient(
                rgba(255, 255, 255, 0.3),
                rgba(255, 255, 255, 0.3)
            ),
            url(/images/heros/reviews/1440p.jpg);
    }
}

.reviews-testimonial {
    // 480p default
    background-image: linear-gradient(
            rgba(255, 255, 255, 0.3),
            rgba(255, 255, 255, 0.3)
        ),
        url(/images/heros/reviews/testimonial-480p.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}

@media only screen and (min-width: 960px) {
    // Halfway between 480p and 720p
    .reviews-testimonial {
        background-image: linear-gradient(
                rgba(255, 255, 255, 0.3),
                rgba(255, 255, 255, 0.3)
            ),
            url(/images/heros/reviews/testimonial-720p.jpg);
    }
}

@media only screen and (min-width: 1600px) {
    // Halfway between 720p and 1080p
    .reviews-testimonial {
        background-image: linear-gradient(
                rgba(255, 255, 255, 0.3),
                rgba(255, 255, 255, 0.3)
            ),
            url(/images/heros/reviews/testimonial-1080p.jpg);
    }
}

@media only screen and (min-width: 2240px) {
    // Halfway between 1080p and 1440p
    .reviews-testimonial {
        background-image: linear-gradient(
                rgba(255, 255, 255, 0.3),
                rgba(255, 255, 255, 0.3)
            ),
            url(/images/heros/reviews/testimonial-1440p.jpg);
    }
}
</style>
