<template>

    <div class="special-pricing">

        <transition name="fade">
            <VideoModal v-if="modal.isVisible"
                @close="toggleModal(false, null, null)"
                background="#000"
            >
                <ResponsiveVideo
                    source="https://player.vimeo.com/video/"
                    :id="modal.url"
                    queries="?color=26a69a&title=0&byline=0&portrait=0&autoplay=1"
                    :title="modal.title"
                />
            </VideoModal>
        </transition>

        <TitleBlock :title="company" subtitle="Special Package Pricing" color="dark" />

        <section>
            <div class="container">
                <div class="row">

                    <div class="col-xs-12 info-block">
                        <div class="callout-block">
                            <h2 class="title">${{ price }}<small>, including all taxes and fees:</small></h2>
                            <h3 class="subtitle">{{ separatedOptions }}</h3>
                        </div>
                        <h4>Delivery via Vimeo in 4K resolution — Drone included, pending weather conditions</h4>
                    </div>

                </div>
            </div>
        </section>

        <section class="light">
            <div class="container">
                <div class="row">

                    <div class="col-xs-12" v-html="content"></div>

                </div>
            </div>
        </section>

        <section class="dark">
            <div class="container">
                <div class="row">

                    <div class="col-xs-12 info-block">
                        <h2>A curated collection of wedding films, shot with {{ shortName }}:</h2>
                    </div>

                </div>
            </div>
        </section>

        <section>
            <div class="container" style="padding-top: 0;">

                <div class="row video-grid">
                    <div class="col-xs-12 col-sm-6 col-md-4" v-for="video in videos" :key="video.id">
                        <VideoGridImage
                            :image="supportsWebP ? video.webp : video.jpg"
                            :title="`${video.bride} & ${video.groom}`"
                            :url="`https://vimeo.com/${video.id}`"
                            @openModal="toggleModal(true, `${video.bride} & ${video.groom}`, video.id)"
                        />
                    </div>
                </div>

            </div>
        </section>

    </div>

</template>





<script>

    import { mapState } from 'vuex';

    import ResponsiveVideo from '~/components/ResponsiveVideo.vue';
    import TitleBlock from '~/components/TitleBlock.vue';
    import VideoGridImage from '~/components/VideoGridImage.vue';
    import Modal from '~/components/Modal.vue';

    export default {

        name: 'SpecialPricingPartial',
        components: {

            ResponsiveVideo,
            TitleBlock,
            VideoGridImage,
            VideoModal: Modal,

        },
        props: {

            company: {
                type: String,
                required: true
            },
            hours: {
                type: Number,
                required: true
            },
            shortName: {
                type: String,
                required: true
            },
            longName: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            packageOptions: {
                type: Array,
                required: true
            },
            videos: {
                type: Array,
                required: true
            },
            allowLessTime: {
                type: Boolean,
                required: false,
                default: false
            }

        },
        data() {
            return {

                modal: {
                    isVisible: false,
                    title: null,
                    url: null
                }

            }
        },
        computed: {
            
            ...mapState({

                supportsWebP: state => state.supportsWebP

            }),
            separatedOptions() {

                return this.packageOptions.reduce((separatedOptions, option, currentIndex) => {

                    return currentIndex !== 0
                        ? `${ separatedOptions } — ${ option }`
                        : option;

                })

            },
            content() {

                const changeHours = this.allowLessTime
                    ? `We can also add or subtract hours, if needed. If you want us to push a little later into the night, or don't need as much coverage time, we'd be happy to provide a custom quote!`
                    : `We can also add hours, if needed. If you want us to push a little later into the night, we'd be happy to provide a custom quote!`;

                const getPossessive = name => name.slice(-1) === 's' ? `'` : `'s`;

                return `
                    <p>
                        I have designed this package specifically for ${ this.shortName }${ getPossessive(this.shortName) } couples. With ${ this.hours } hours of custom coverage, we lock directly in with ${ this.longName }${ getPossessive(this.longName) } timeline allowing a seamless day for you and your families.
                    </p>
                    <p>
                        You will receive a trailer, full film and Instagram teasers. Full film lengths vary and we never put a limit to it. For your portrait session, we let ${ this.shortName } run the show, making for a great experience for you and your families!
                    </p>
                    <p>
                        For your reception, you will receive all dance floor footage in its entirety along with all the day's major events. This custom ${ this.hours }-hour package will ensure all the events of your day are captured, as we will be working on the same timeline. ${ changeHours }
                    </p>
                    <p>
                        <strong>We never use lights</strong>! This is to help us achieve the best ambience when it comes to candid dance floor footage, which also helps ${ this.shortName } capture the best photos possible!
                    </p>
                `;

            }

        },
        methods: {
            
            toggleModal(condition, title, url) {

                this.modal = {

                    isVisible: condition,
                    title: title + ' - Wedding Trailer',
                    url: url

                }

            }

        }

    }

</script>




<style lang="scss" scoped>

    .special-pricing {

        h2, h3, h4 { margin: 0; }

        h2 {
            font-size: 2.5rem;

            small {
                font-weight: 300;
                font-size: 85%;
            }

        }

        h3, h4 {
            font-weight: 300;
            font-size: 1.5rem;
        }

        .info-block {
            text-align: center;

            .callout-block {
                border: 2px solid #5e5e5e;
                margin-bottom: 2rem;

                .title, .subtitle { padding: 1rem; }

                .subtitle {
                    color: #FFF;
                    background-color: #5e5e5e;
                }

            }

            h4 {
                font-size: 1.3rem;
                font-style: italic;
            }

        }

        .video-grid {
            margin-bottom: -2rem;

            div {
                margin-bottom: 2rem;
            }

        }

    }

</style>