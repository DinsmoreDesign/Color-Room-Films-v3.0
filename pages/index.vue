<template>
  
    <div>

        <Hero :background="require('~/static/images/heros/home.jpg')">
            <h1 class="title is-1 is-hidden-mobile"> Your wedding isn't just an event, it's an experience.
                <br> We create the
                <strong>
                    <a href="https://www.instagram.com/explore/tags/MotionPictureMemories/" title="Check out some #MotionPictureMemories on Instagram!" target="_blank">#MotionPictureMemories</a>
                </strong> you'll cherish forever.
            </h1>
            <h1 class="title is-3 is-hidden-tablet"> Your wedding isn't just an event, it's an experience.
                <br> We create the
                <strong>
                    <a href="https://www.instagram.com/explore/tags/MotionPictureMemories/" title="Check out some #MotionPictureMemories on Instagram!" target="_blank">#MotionPictureMemories</a>
                </strong> you'll cherish forever.
            </h1>
        </Hero>

        <ContentBlock color="dark" id="content">
            <h3 class="title is-2">
                <strong>Our Philosophy</strong>
            </h3>
            <p class="subtitle is-4 is-spaced">
                The most important thing to us is <strong>your</strong> story. At Color Room Films, we deliver precious memories of your special day that you can relive for years to come. Our goal is to remain discreet and make sure <strong>you</strong> remain the focal point all day, while telling your story in the most emotional, cinematic and honest way possible. We use only the highest grade cinematic tools available to tell your story; the same cameras, lenses, aerial drones and other tools you would see on a Hollywood set, at the best value for your dollar.
            </p>
            <h3 class="title is-2">
                <strong>Why Us?</strong>
            </h3>
            <p class="subtitle is-4">
                Every wedding is unique and every couple is different, that's why every project we work on is approached differently. No two events we've filmed are ever the same; we purchase exclusive music publishing rights for each wedding and don't believe in releasing films that are lacking individuality. It's our job to get to know you and what you like, so we can represent your personality as genuinely as possible.
            </p>
        </ContentBlock>

        <ContentBlock hasTextCentered>
            <h3 class="title is-1">
                <span>Don't just take our word for it,</span>
            </h3>
            <p class="subtitle is-4">
                <em>see what others have to say about us:</em>
            </p>
        </ContentBlock>

        <ReviewsContainer
            :background="require('~/static/images/heros/rolls_royce.jpg')"
            :reviews="reviews"
        >
            <AwardsOverlay/>
        </ReviewsContainer>

        <ContentBlock hasTextCentered>
            <div class="has-text-centered">

                <h3 class="title is-1 has-text-centered">
                    <span>Don't just take our word for it,</span>
                </h3>
                <p class="subtitle is-4">
                    <em>see what others have to say about us:</em>
                </p>

            </div>
        </ContentBlock>

        <div class="video-container">
            <iframe :src="video.src" frameborder="0" :title="video.title" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>

    </div>

</template>





<script>

    import { mapState } from 'vuex';

    import Hero from "../components/Hero.vue";
    import ContentBlock from "../components/ContentBlock.vue";
    import ReviewsContainer from '../components/ReviewsContainer.vue';
    import AwardsOverlay from '../components/AwardsOverlay.vue';

    export default {
        name: 'Home',
        watchQuery: ["page"],
        key: to => to.fullPath,
        transition(to, from) {

            if (!from) return "slide-left";
            return +to.query.page < +from.query.page ? "slide-right" : "slide-left";
            
        },
        components: {
            Hero,
            ContentBlock,
            ReviewsContainer,
            AwardsOverlay
        },
        data() {
            return {

                video: {
                    src: 'https://player.vimeo.com/video/265609381?color=26a69a&title=0&byline=0&portrait=0',
                    title: 'Nicole & Daniel - Wedding Trailer by Color Room Films'
                }

            }
        },
        computed: {

            ...mapState({
                reviews: state => state.reviews.home
            })

        },
    };

</script>





<style>



</style>