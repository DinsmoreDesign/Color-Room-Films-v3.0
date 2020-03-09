<template>

    <div class="video-block">

        <transition name="fade">
            <Modal v-if="modal.isVisible"
                @close="toggleModal({})"
                background="#000"
            >
                <ResponsiveVideo
                    source="https://player.vimeo.com/video/"
                    :id="modal.videoId"
                    queries="?color=26a69a&title=0&byline=0&portrait=0&autoplay=1"
                    :title="modal.title"
                />
            </Modal>
        </transition>

        <section :class="{ 'dark': !hasLightHeader }">
            <div class="container">
                <div class="row">

                    <div class="col-xs-12 info-block">
                        <h2>{{ title }}</h2>
                    </div>

                </div>
            </div>
        </section>

        <section :class="{ 'dark': hasLightHeader }">
            <div class="container" style="padding-top: 0;">

                <div class="row video-grid">
                    <div class="col-xs-12 col-sm-6 col-md-4" v-for="video in videos" :key="video.id">
                        <VideoGridImage
                            :image="supportsWebP ? video.webp : video.jpg"
                            :title="`${video.bride} & ${video.groom}`"
                            :url="`https://vimeo.com/${video.id}`"
                            @openModal="toggleModal({
                                isVisible: true,
                                title: `${video.bride} & ${video.groom} - Wedding Trailer`,
                                videoId: video.id
                            })"
                        />
                    </div>
                </div>

            </div>
        </section>

    </div>

</template>





<script>

    import { mapState } from 'vuex';

    import Modal from '~/components/Modal.vue';
    import ResponsiveVideo from '~/components/ResponsiveVideo.vue';
    import VideoGridImage from '~/components/VideoGridImage.vue';

    export default {

        name: 'VideoGrid',
        components: {

            Modal,
            ResponsiveVideo,
            VideoGridImage

        },
        props: {

            title: {
                type: String,
                required: true
            },
            videos: {
                type: Array,
                required: true
            },
            hasLightHeader: {
                type: Boolean,
                required: false,
                default: false
            }

        },
        data() {
            return {

                modal: {
                    isVisible: false,
                    title: '',
                    videoId: ''
                }

            }
        },
        computed: {

            ...mapState({

                supportsWebP: state => state.supportsWebP

            })

        },
        methods: {
            
            toggleModal({ isVisible = false, title = '', videoId = '' }) {

                this.modal = {

                    isVisible,
                    title,
                    videoId

                }

            }

        }

    }

</script>





<style lang="scss" scoped>

    .video-block {
        text-align: center;

        h2 {
            margin: 0;
            font-size: 2.5rem;
        }

        .video-grid {
            margin-bottom: -2rem;

            div {
                margin-bottom: 2rem;
            }

        }

    }

</style>