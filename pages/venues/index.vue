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

        <!-- Header -->
            <!-- <Hero :class="[$store.state.supportsWebP ? 'venues-hero-webp' : 'venues-hero']" height="calc(65vh - 70px)" /> -->

            <TitleBlock title="Great Venues" subtitle="We love to work with." color="dark" />

        <!-- Content -->
            <section>
                <div class="container" style="padding-top: 0;">

                    <SelectContainer
                        title="Select a Venue"
                        :buttonTitle="venues.length === selectedVenues.length ? 'Unselect All' : 'Select All'"
                        :options="venues"
                        v-model="selectedVenues"
                        @buttonClicked="unselectVenues(venues.length === selectedVenues.length)"
                    />

                    <transition name="fade">
                        <transition-group name="list" tag="div" class="row video-grid" v-if="videos.length > 0">
                            <div class="col-xs-12 col-sm-6 col-md-4" v-for="video in videos" :key="video.id">
                                <VideoGridImage
                                    :image="supportsWebP ? video.webp : video.jpg"
                                    :title="`${video.bride} & ${video.groom}`"
                                    :subtitle="video.venue"
                                    :url="`https://vimeo.com/${video.id}`"
                                    @openModal="toggleModal(true, `${video.bride} & ${video.groom}`, video.id)"
                                />
                            </div>
                        </transition-group>
                    </transition>
                   

                </div>
            </section>

    </div>

</template>





<script>

    import { mapActions, mapGetters, mapState } from 'vuex';

    import Hero from '~/components/Hero.vue';
    import VideoGridImage from '~/components/VideoGridImage.vue';
    import Modal from '~/components/Modal.vue';
    import TitleBlock from '~/components/TitleBlock.vue';
    import ResponsiveVideo from '~/components/ResponsiveVideo';
    import SelectContainer from '~/components/SelectContainer';

    export default {

        name: 'Venues',
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
            SelectContainer

        },
        head() {
            return {

                title: 'Venues | Color Room Films NJ',
                meta: [
                    { property: 'og:title', content: 'Venues | Color Room Films NJ' },
                    { name: 'description', content: 'View New Jersey’s premier videographers’ favorite venues. We specialize in cinematic films and making everyone feel like a star.' },
                    { property: 'og-description', content: 'View New Jersey’s premier videographers’ favorite venues. We specialize in cinematic films and making everyone feel like a star.' },
                    { name: 'keywords', content: 'New Jersey, videographer, wedding film, cinematic, motion picture memories, NJ, wedding video, wedding movie, portfolio, contact, special day, venues' }
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
                selectedVenues: []

            }
        },
        computed: {

            ...mapState({

                supportsWebP: state => state.supportsWebP
                
            }),
            ...mapGetters({

                venuesObjects: 'venues/getVenues',
                videos: 'venues/shuffleVenueVideos'

            }),
            venues() {

                return this.venuesObjects.map(obj => obj.name);

            }

        },
        watch: {
            
            selectedVenues(newVal) {

                this.updateSelectedVenues(newVal);

            }

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

            this.selectAllVenues();

        },
        methods: {

            ...mapActions({

                updateCallToAction: 'cta/updateCallToAction',
                updateFooter: 'footer/updateFooter',
                updateCurrentQuote: 'updateCurrentQuote',
                updateSelectedVenues: 'venues/updateSelectedVenues'

            }),
            toggleModal(condition, title, url) {

                this.modal = {

                    isVisible: condition,
                    title: title + ' - Wedding Trailer',
                    url: url

                }

            },
            selectAllVenues() {

                this.selectedVenues = [ ...this.venues ]

            },
            unselectVenues(condition) {

                if(condition) {

                    this.selectedVenues = [];

                } else {

                    this.selectAllVenues();

                }

            }

        }

    }

</script>





<style lang="scss" scoped>

    .select-container {
        
        &:not(:last-child) {
            margin-bottom: 2rem;
        }
        
        header {
            display: flex;
            margin-bottom: 0.5rem;
            align-items: center;

            h3 {
                flex: 1;
                margin-bottom: 0;
                font-size: 2rem;
                font-weight: 300;
            }

            button {
                padding: 1rem;
                border: 2px solid #5e5e5e;
                color: #5e5e5e;
                background: #FFF;
                border-radius: 3px;
                font-size: 1.2rem;
                margin: 0 0.5rem 0.5rem 0;
                cursor: pointer;
                text-transform: uppercase;

                &:hover {
                    transform: scale(1.05);
                    box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.3);
                }

            }

        }

        label {
            display: inline-block;
            padding: 1rem;
            border: 2px solid #5e5e5e;
            border-radius: 3px;
            font-size: 1.2rem;
            margin: 0 0.5rem 0.5rem 0;
            cursor: pointer;

            &:hover {
                opacity: 0.6;
            }

        }

    }

    @media only screen and (max-width: 960px) { // Halfway between 480p and 720p
        
        .select-container header button,
        .select-container label  {
            padding: 0.5rem;
        }

    }

    .video-grid {
        margin-bottom: -2rem;

        div {
            margin-bottom: 2rem;
        }

    }

    /* Modern Browsers: */
    .venues-hero-webp { // 480p default
        background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                            url(/images/heros/venues/480p.webp);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    }

    @media only screen and (min-width: 960px) { // Halfway between 480p and 720p
        .venues-hero-webp {
            background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                                url(/images/heros/venues/720p.webp);
        }
    }

    @media only screen and (min-width: 1600px) { // Halfway between 720p and 1080p
        .venues-hero-webp {
            background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                                url(/images/heros/venues/1080p.webp);
        }
    }

    @media only screen and (min-width: 2240px) { // Halfway between 1080p and 1440p
        .venues-hero-webp {
            background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                                url(/images/heros/venues/1440p.webp);
        }
    }

    /* Legacy Browsers: */
    .venues-hero { // 480p default
        background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                            url(/images/heros/venues/480p.jpg);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    }

    @media only screen and (min-width: 960px) { // Halfway between 480p and 720p
        .venues-hero {
            background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                                url(/images/heros/venues/720p.jpg);
        }
    }

    @media only screen and (min-width: 1600px) { // Halfway between 720p and 1080p
        .venues-hero {
            background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                                url(/images/heros/venues/1080p.jpg);
        }
    }

    @media only screen and (min-width: 2240px) { // Halfway between 1080p and 1440p
        .venues-hero {
            background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                                url(/images/heros/venues/1440p.jpg);
        }
    }

</style>