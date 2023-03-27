<template>
    <div>
        <transition name="fade">
            <VideoModal
                v-if="modal.isVisible"
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

        <div class="row no-gap between-xs">
            <div
                class="col-xs-12 col-sm-4 home-video"
                v-for="video in videos"
                :key="video.id"
            >
                <VideoGridImage
                    :image="supportsWebP ? video.webp : video.jpg"
                    :title="video.title"
                    :showTitle="false"
                    :url="`https://vimeo.com/${video.id}`"
                    @openModal="
                        toggleModal(
                            true,
                            `${video.bride} & ${video.groom}`,
                            video.id
                        )
                    "
                />
                <p class="image-footer">{{ video.title }}</p>
            </div>
        </div>

        <AwardsContainer />
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

import Hero from "~/components/Hero.vue";
import AwardsContainer from "~/components/AwardsContainer.vue";
import ResponsiveImage from "~/components/ResponsiveImage.vue";
import ResponsiveVideo from "~/components/ResponsiveVideo.vue";
import TitleBlock from "~/components/TitleBlock.vue";
import VideoGridImage from "~/components/VideoGridImage.vue";
import Modal from "~/components/Modal.vue";

export default {
    name: "Home",
    watchQuery: ["page"],
    key: to => to.fullPath,
    transition(to, from) {
        if (!from) return "slide-left";
        return +to.query.page < +from.query.page ? "slide-right" : "slide-left";
    },
    components: {
        Hero,
        AwardsContainer,
        ResponsiveImage,
        ResponsiveVideo,
        TitleBlock,
        VideoGridImage,
        VideoModal: Modal
    },
    head() {
        return {
            title: "Home | Color Room Films",
            meta: [
                { property: "og:title", content: "Home | Color Room Films" },
                {
                    name: "description",
                    content:
                        "We create the MotionPictureMemories you’ll cherish forever. We deliver precious memories of your special day that you can relive for years to come."
                },
                {
                    property: "og-description",
                    content:
                        "We create the MotionPictureMemories you’ll cherish forever. We deliver precious memories of your special day that you can relive for years to come."
                },
                {
                    name: "keywords",
                    content:
                        "Indiana, videographer, wedding film, cinematic, motion picture memories, IN, wedding video, wedding movie, Fort Wayne, Indiana, IN"
                }
            ]
        };
    },
    data() {
        return {
            modal: {
                isVisible: false,
                title: null,
                url: null
            }
        };
    },
    computed: {
        ...mapState({
            supportsWebP: state => state.supportsWebP,
            videos: state => state.home.videos
        })
    },
    created() {
        this.updateCallToAction({
            isVisible: false
        });

        this.updateFooter({
            title: "",
            content: `Every story is unique and we strive to create a film as unique as your relationship, which you can share with your loved ones for years to come. Your wedding is a precious moment in your life and our goal is to capture it in the most emotional and honest way possible. We pride ourselves on getting it right without getting in the way to deliver a film you'll be proud to call your own.`
        });

        this.updateCurrentQuote();
    },
    methods: {
        ...mapActions({
            updateCallToAction: "cta/updateCallToAction",
            updateFooter: "footer/updateFooter",
            updateCurrentQuote: "updateCurrentQuote"
        }),
        toggleModal(condition, title, url) {
            this.modal = {
                isVisible: condition,
                title: title + " - Wedding Trailer",
                url: url
            };
        }
    }
};
</script>

<style lang="scss" scoped>
.home-video {
    .image-footer {
        color: #fff;
        background-color: #5e5e5e;
        text-align: center;
        padding: 1rem;
        margin: 0;
        margin-bottom: 4px;

        &:not(:last-child) {
            border-right: 1px solid #fff;
        }
    }

    @media screen and (min-width: 768px) {
        &:not(:last-child) .image-footer {
            border-right: 2px solid #fff;
        }
        &:not(:first-child) .image-footer {
            border-left: 2px solid #fff;
        }
    }
}
</style>
