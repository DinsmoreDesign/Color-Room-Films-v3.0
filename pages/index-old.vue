<template>
    <div>
        <video
            playsinline
            autoplay
            muted
            loop
            :poster="require('~/static/videos/landing.jpg')"
        >
            <source src="~/static/videos/landing.webm" type="video/webm" />
            <source src="~/static/videos/landing.mp4" type="video/mp4" />
            <img
                src="~/static/videos/landing.jpg"
                alt="Couple walking up stairs"
            />
        </video>

        <Hero>
            <div class="container">
                <div class="row">
                    <div
                        class="logo-container"
                        v-html="
                            require('!svg-inline-loader!../static/images/crf-mark-w.svg')
                        "
                    ></div>
                </div>
                <div class="row">
                    <ButtonLink
                        url="/home"
                        title="Enter the Color Room Films website"
                        :isWhite="true"
                        >ENTER</ButtonLink
                    >
                </div>
            </div>
            <div class="social-icons" slot="footer">
                <a
                    v-for="link in socialLinks"
                    :key="link.icon"
                    :href="link.url"
                    :title="link.title"
                    target="_blank"
                    class="icon"
                >
                    <i :class="['icon-' + link.icon]"></i>
                </a>
            </div>
        </Hero>
    </div>
</template>

<script>
import { mapState } from "vuex";

import Hero from "~/components/Hero.vue";
import ButtonLink from "~/components/ButtonLink.vue";

export default {
    name: "Index",
    layout: "blank",
    watchQuery: ["page"],
    key: to => to.fullPath,
    transition(to, from) {
        if (!from) return "slide-left";
        return +to.query.page < +from.query.page ? "slide-right" : "slide-left";
    },
    components: {
        Hero,
        ButtonLink
    },
    computed: {
        ...mapState({
            socialLinks: state => state.footer.contactInfo.socialLinks
        })
    }
};
</script>

<style lang="scss" scoped>
video {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0.7;
    z-index: -1;
}

.row {
    margin-top: 2rem;

    * {
        margin: 0 auto;
    }

    &:first-child {
        margin-top: 0;
    }
}

.logo-container {
    max-width: 90%;

    ::v-deep svg {
        height: 100%;
        width: 100%;
        max-width: 350px;
    }
}

.social-icons {
    width: 100%;

    a {
        text-decoration: none;
        padding: 0.5rem;

        i {
            font-size: 1.5rem;
            width: 1.5rem;
            text-align: center;
            line-height: 1.5rem;
            background-color: #fff;
            color: #5e5e5e;
            border-radius: 50%;
            padding: 0.5rem 0.5rem 0.1rem 0.5rem;
            transition: color 0.3s, background-color 0.3s;

            &:hover {
                color: #fff;
                background-color: transparent;
            }
        }
    }
}
</style>
