<template>
  
    <div>

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

        <Hero v-if="!showHeroVideo"
            :class="[$store.state.supportsWebP ? 'weddings-hero-webp' : 'weddings-hero']"
            @click="showHeroVideo = true"
        >
            <svg @click="showHeroVideo = true" aria-hidden="true" data-prefix="far" data-icon="play-circle" class="svg-inline--fa fa-play-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"></path></svg>
        </Hero>

        <ResponsiveVideo v-else
            style="background-color: #000; padding: 56.25 0 0 0;"
            source="https://player.vimeo.com/video/"
            id="293412835"
            queries="?background=1&autoplay=1&loop=1&byline=0&title=0"
            title="Wedding Header Video"
        />

        <TitleBlock title="#MotionPictureMemories" subtitle="You'll cherish forever." />

        <section class="container" style="padding-top: 0;">
            <div class="row video-grid">
                <div class="col-xs-12 col-sm-6 col-md-4" v-for="video in videos" :key="video.id">
                    <VideoGridImage
                        :image="video.image"
                        :title="video.title"
                        @openModal="toggleModal(true, video.title, video.id)"
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

    import Hero from '../components/Hero.vue';
    import VideoGridImage from '../components/VideoGridImage.vue';
    import Modal from '../components/Modal.vue';
    import TitleBlock from '../components/TitleBlock.vue';
    import ResponsiveVideo from '../components/ResponsiveVideo';

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
            ResponsiveVideo

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
                videos: state => state.weddingVideos
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

        },
        methods: {

            ...mapActions([

                'updateCallToAction',
                'updateFooter'

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
    .weddings-hero-webp {
        background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                            url(../static/images/heros/about/720p.webp);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: fixed;
    }

    @media only screen and (min-width: 1280px) {
        .weddings-hero-webp {
            background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                                url(../static/images/heros/about/1080p.webp);
            background-repeat: no-repeat;
            background-position: center center;
            background-size: fixed;
        }
    }

    @media only screen and (min-width: 1920px) {
        .weddings-hero-webp {
            background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                                url(../static/images/heros/about/2k.webp);
            background-repeat: no-repeat;
            background-position: center center;
            background-size: fixed;
        }
    }

    /* Legacy Browsers: */
    .weddings-hero {
        background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                            url(../static/images/heros/about/720p.jpg);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: fixed;
    }

    @media only screen and (min-width: 1280px) {
        .weddings-hero {
            background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                                url(../static/images/heros/about/1080p.jpg);
            background-repeat: no-repeat;
            background-position: center center;
            background-size: fixed;
        }
    }

    @media only screen and (min-width: 1920px) {
        .weddings-hero {
            background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                                url(../static/images/heros/about/2k.jpg);
            background-repeat: no-repeat;
            background-position: center center;
            background-size: fixed;
        }
    }

</style>