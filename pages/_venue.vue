<template>
  
    <div v-if="venueObj">

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
            <TitleBlock :title="venueObj.name" subtitle="...a few special moments" color="dark" />

        <!-- Content -->
            <section>
                <div class="container" style="padding-top: 0;">

                    <div class="row video-grid" v-if="videos.length > 0">
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

    import { mapActions, mapGetters, mapState } from 'vuex';

    import VideoGridImage from '~/components/VideoGridImage.vue';
    import Modal from '~/components/Modal.vue';
    import TitleBlock from '~/components/TitleBlock.vue';
    import ResponsiveVideo from '~/components/ResponsiveVideo';

    export default {

        name: 'Venue',
        watchQuery: ['page'],
        key: to => to.fullPath,
        transition(to, from) {

            if (!from) return 'slide-left'
            return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
            
        },
        components: {

            VideoGridImage,
            VideoModal: Modal,
            TitleBlock,
            ResponsiveVideo

        },
        head() {
            return {

                title: `${ this.venueObj ? this.venueObj.name : 'Venue'} | Color Room Films IN`,
                meta: [
                    { property: 'og:title', content: `${ this.venueObj ? this.venueObj.name : 'Venue'} | Color Room Films IN` },
                    { name: 'description', content: `View New Jersey’s premier videographers' favorite videos ${ this.venueObj ? 'from ' + this.venueObj.name : ''}. We specialize in cinematic films and making everyone feel like a star.` },
                    { property: 'og-description', content: `View New Jersey’s premier videographers' favorite ${ this.venueObj ? 'from ' + this.venueObj.name : ''}. We specialize in cinematic films and making everyone feel like a star.` },
                    { name: 'keywords', content: `${ this.venueObj ? this.venueObj.name + ', ' : ''} New Jersey, videographer, wedding film, cinematic, motion picture memories, NJ, wedding video, wedding movie, portfolio, contact, special day, venues, Fort Wayne, Indiana, IN` }
                ]

            }
        },
        data() {
            return {

                venueObj: null,
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
            ...mapGetters({

                venues: 'venues/getVenues',
                videos: 'venues/shuffleVenueVideos'

            })

        },
        created() {

            const match = this.venues.filter(venue => venue.slug === this.$route.params.venue.toLowerCase().replace(/\s/g, ''));

            this.venueObj = match[0];
            
            if (!this.venueObj) {

                this.$router.push({ name: 'NuxtError' });

            } else {

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

                this.updateSelectedVenues([ this.venueObj.name ]);
                
            }

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

</style>