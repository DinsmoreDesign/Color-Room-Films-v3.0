<template>
  
    <div>

        <Modal>
            <div style="position: relative; padding-bottom: 53.25%; height: 0;">
                <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://player.vimeo.com/video/303306826?color=26a69a&amp;title=0&amp;byline=0&amp;portrait=0" frameborder="0" title="Ashley &amp; Adam - Wedding Trailer by Color Room Films" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" name="fitvid0"></iframe>
            </div>
        </Modal>

        <Hero class="wedding-hero"/>

        <section class="container title-block has-text-centered">
            <h1>#MotionPictureMemories</h1>
            <p>You'll cherish forever.</p>
        </section>

        <section class="container" style="padding-top: 0;">
            <div class="row">
                <div class="col-xs-4">
                    <VideoGridImage
                        :image="require('../static/images/heros/about-720p.jpg')"
                        title="Test"
                        url="google.com"
                    />
                </div>
                <div class="col-xs-4">
                    <VideoGridImage
                        :image="require('../static/images/heros/about-720p.jpg')"
                        title="Test"
                        url="google.com"
                    />
                </div>
                <div class="col-xs-4">
                    <VideoGridImage
                        :image="require('../static/images/heros/about-720p.jpg')"
                        title="Test"
                        url="google.com"
                    />
                </div>
                <div class="col-xs-4">
                    <VideoGridImage
                        :image="require('../static/images/heros/about-720p.jpg')"
                        title="Test"
                        url="google.com"
                    />
                </div>
                <div class="col-xs-4">
                    <VideoGridImage
                        :image="require('../static/images/heros/about-720p.jpg')"
                        title="Test"
                        url="google.com"
                    />
                </div>
                <div class="col-xs-4">
                    <VideoGridImage
                        :image="require('../static/images/heros/about-720p.jpg')"
                        title="Test"
                        url="google.com"
                    />
                </div>
                <div class="col-xs-4">
                    <VideoGridImage
                        :image="require('../static/images/heros/about-720p.jpg')"
                        title="Test"
                        url="google.com"
                    />
                </div>
                <div class="col-xs-4">
                    <VideoGridImage
                        :image="require('../static/images/heros/about-720p.jpg')"
                        title="Test"
                        url="google.com"
                    />
                </div>
                <div class="col-xs-4">
                    <VideoGridImage
                        :image="require('../static/images/heros/about-720p.jpg')"
                        title="Test"
                        url="google.com"
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

    import { mapActions } from 'vuex';

    import Hero from '../components/Hero.vue';
    import VideoGridImage from '../components/VideoGridImage.vue';
    import Modal from '../components/Modal.vue';

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
            Modal
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
            ])

        }

    }

</script>





<style lang="scss" scoped>

    .wedding-hero {
        background: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(../static/images/heros/about-720p.jpg) no-repeat center center fixed;
    }

    @media only screen and (min-width: 1280px) {
        .contact-hero {
            background: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(../static/images/heros/about-1080p.jpg) no-repeat center center fixed;
        }
    }

    @media only screen and (min-width: 1920px) {
        .contact-hero {
            background: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(../static/images/heros/about-2k.jpg) no-repeat center center fixed;
        }
    }

</style>