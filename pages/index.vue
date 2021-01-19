<template>

    <div>

        <video playsinline autoplay muted loop :poster="require('~/static/videos/landing.jpg')">
            <source src="~/static/videos/landing.webm" type="video/webm">
            <source src="~/static/videos/landing.mp4" type="video/mp4">
            <img src="~/static/videos/landing.jpg" alt="Couple walking up stairs">
        </video>

        <Hero style="padding: 0;">
            <div class="body">
                <div class="content">
                    <div class="logo" v-html="require('!svg-inline-loader!../static/images/crf-mark-w.svg')"></div>
                    <h1>We'd love to talk!</h1>
                    <a 
                        href="#"
                        class="email"
                        data-address="info"
                        data-domain="colorroomfilms"
                        data-tld="com"
                        onclick="window.location.href = 'mailto:' + this.dataset.address + '@' + this.dataset.domain + '.' + this.dataset.tld; return false;"
                    ></a>
                </div>
                <div class="footer">
                    <p>2022 packages starting at $5500.</p>
                </div>
            </div>
        </Hero>

    </div>
    

</template>





<script>

    import Hero from '~/components/Hero.vue';

    export default {

        name: 'Maintenance',
        layout: 'blank',
        watchQuery: ["page"],
        key: to => to.fullPath,
        components: { Hero }

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

    .body {
        min-height: 100vh;
        background-color: rgba(0, 0, 0, 0.4);
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        align-items: center;
        padding: 2rem 1rem;
        gap: 1rem;

        .content {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .logo { margin-bottom: 2rem; }

            /deep/ svg {
                height: 100%;
                width: 100%;
                max-width: 350px;
            }

            h1 {
                margin: 0;
                font-size: 3.5rem;
                line-height: 1;
                font-family: cursive;
                font-weight: 400;
                word-wrap: break-word;
                font-family: 'Allura', sans-serif;
            }

            .email {
                color: #FFF;
                font-size: 1.2rem;
                text-align: center;
                text-decoration: none;
                transition: text-decoration 0.5s;

                &:after { content: attr(data-address) "@" attr(data-domain) "." attr(data-tld); }
                &:hover { text-decoration: underline; }
            }

        }
        .footer { font-style: italic; }

    }

    @media screen and (min-width: 992px) {

        .content {
            h1 { font-size: 4.5rem; }
            .email { font-size: 1.5rem; }
        }
    }

</style>