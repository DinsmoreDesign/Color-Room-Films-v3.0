<template>
  
    <div>

        <!-- Video Modal -->
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

        <!-- Hero Video Section -->
            <Hero v-if="!showHeroVideo"
                :class="[$store.state.supportsWebP ? 'weddings-hero-webp' : 'weddings-hero']"
                height="calc(100vh - 70px)"
            >
                <PlayButton @clicked="showHeroVideo = true" />
            </Hero>

            <ResponsiveVideo v-else
                style="background-color: #000;"
                source="https://player.vimeo.com/video/"
                id="347521909"
                queries="?color=26a69a&title=0&byline=0&portrait=0&autoplay=1"
                title="Wedding Header Video"
                componentStyle="height: calc(100vh - 70px)"
            />

        <!-- Content -->
            <TitleBlock title="#MotionPictureMemories" subtitle="You'll cherish forever." />

            <section class="container" style="padding-top: 0;">
                <div class="row video-grid">
                    <div class="col-xs-12 col-sm-6 col-md-4" v-for="video in videos" :key="video.id">
                        <VideoGridImage
                            :image="supportsWebP ? video.webp : video.jpg"
                            :title="`${video.bride} & ${video.groom}`"
                            @openModal="toggleModal(true, `${video.bride} & ${video.groom}`, video.id)"
                        />
                    </div>
                </div>
            </section>

            <section class="dark">
                <div class="container">
                    <h3>It's <strong>your</strong> day, not ours!</h3>
                    <p>
                        The main focus of a wedding is the couple. Our #1 priority is to give you the best and most honest wedding film possible while never getting in the way of the guest's experience. We do this by blending into to the background, normally working behind the photographer, which helps us get the most honest and candid films possible.
                    </p>
                    <h3>How we work</h3>
                    <p>
                        Color Room Films only uses the best gear for the job. To capture our weddings we choose to use 8K cinema cameras. The same cameras that are used on Hollywood sets. No bigger than a shoe box, our cameras aren't intrusive and we never use lights on our couples, making them feel uncomfortable. We only pose couples after the photographer has finished with their portrait session and we'll never ask you to do something you don't want to for the sake of a shot.
                    </p>
                </div>
            </section>

    </div>

</template>





<script>

    import { mapActions, mapState } from 'vuex';

    import Hero from '~/components/Hero.vue';
    import VideoGridImage from '~/components/VideoGridImage.vue';
    import Modal from '~/components/Modal.vue';
    import TitleBlock from '~/components/TitleBlock.vue';
    import ResponsiveVideo from '~/components/ResponsiveVideo';
    import PlayButton from '~/components/PlayButton';

    export default {

        name: 'Weddings',
        watchQuery: ['page'],
        key: to => to.fullPath,
        transition(to, from) {

            if (!from) return 'slide-left'
            return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
            
        },
        components: {

            Hero,
            VideoGridImage,
            VideoModal: Modal,
            TitleBlock,
            ResponsiveVideo,
            PlayButton

        },
        head() {
            return {

                title: 'Weddings | Color Room Films NJ',
                meta: [
                    { property: 'og:title', content: 'Weddings | Color Room Films NJ' },
                    { name: 'description', content: 'View New Jersey’s premier videographers’ portfolio of recent wedding films. We specialize in cinematic films and making everyone feel like a star.' },
                    { property: 'og-description', content: 'View New Jersey’s premier videographers’ portfolio of recent wedding films. We specialize in cinematic films and making everyone feel like a star.' },
                    { name: 'keywords', content: 'New Jersey, videographer, wedding film, cinematic, motion picture memories, NJ, wedding video, wedding movie, portfolio, contact, special day' }
                ]

            }
        },
        data() {
            return {

                modal: {
                    isVisible: false,
                    title: null,
                    url: null
                },
                showHeroVideo: false

            }
        },
        computed: {

            ...mapState({

                videos: state => state.weddingVideos,
                supportsWebP: state => state.supportsWebP
                
            })

        },
        created() {

            this.updateCallToAction({
                isVisible: true,
                url: '/reviews',
                title: 'Visit our Reviews page to see what others have to say about our work',
                content: 'SEE WHAT OTHERS HAVE TO SAY'
            });

            this.updateFooter({
                title: 'WHY US?',
                content: `Every wedding is unique and every couple is different, that's why every project we work on is approached differently. No two events we've filmed are ever the same; we purchase exclusive music publishing rights for each wedding and don't believe in releasing films that are lacking individuality. It's our job to get to know you and what you like, so we can represent your personality as genuinely as possible.`
            })

            this.updateCurrentQuote();

        },
        methods: {

            ...mapActions([

                'updateCallToAction',
                'updateFooter',
                'updateCurrentQuote'

            ]),
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

    

    .video-grid {
        margin-bottom: -2rem;

        div {
            margin-bottom: 2rem;
        }

    }

    /* Modern Browsers: */
    .weddings-hero-webp { // 480p default
        background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                            url(/images/heros/weddings/480p.webp);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    }

    @media only screen and (min-width: 960px) { // Halfway between 480p and 720p
        .weddings-hero-webp {
            background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                                url(/images/heros/weddings/720p.webp);
        }
    }

    @media only screen and (min-width: 1600px) { // Halfway between 720p and 1080p
        .weddings-hero-webp {
            background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                                url(/images/heros/weddings/1080p.webp);
        }
    }

    @media only screen and (min-width: 2240px) { // Halfway between 1080p and 1440p
        .weddings-hero-webp {
            background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                                url(/images/heros/weddings/1440p.webp);
        }
    }

    /* Legacy Browsers: */
    .weddings-hero { // 480p default
        background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                            url(/images/heros/weddings/480p.jpg);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    }

    @media only screen and (min-width: 960px) { // Halfway between 480p and 720p
        .weddings-hero {
            background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                                url(/images/heros/weddings/720p.jpg);
        }
    }

    @media only screen and (min-width: 1600px) { // Halfway between 720p and 1080p
        .weddings-hero {
            background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                                url(/images/heros/weddings/1080p.jpg);
        }
    }

    @media only screen and (min-width: 2240px) { // Halfway between 1080p and 1440p
        .weddings-hero {
            background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                                url(/images/heros/weddings/1440p.jpg);
        }
    }

</style>