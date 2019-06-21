<template>
  
    <div>

        <Hero :class="[$store.state.supportsWebP ? 'about-hero-webp' : 'about-hero']" height="calc(100vh - 70px)" />

        <TitleBlock title="Our Story" subtitle="Steve & Jane DiMaggio" />

        <section class="dark">
            <div class="container">
                <h3>Our goal is to bring you an honest film in the most subtle way possible.</h3>
                <p>
                    Before becoming a filmmaker, Steve was a professional musician and studio owner who traveled the country to record and play music. From New Jersey to California, and everywhere in between, he captured these stories experiences through motion picture.
                </p>
                <p>
                    After 10 years of recording and being on the road, Steve's passion for recording music had him, his soon to be wife and dog, Meeka, took a job offer halfway across the country to design recording studios and live sound systems for the music industries top names. While working in the midwest, Steve received a formal training in videography, cinematography techniques and equipment that formed the technical basis for his style, all while he continued to film bands and events.
                </p>
                <p>
                    After half a decade in the midwest, Steve and Jane decided to start a family and head back to New Jersey (now with 3 dogs and first daughter, Carmella). After a bit of soul-searching when returning, Steve took an opportunity to manage and create video content for a national music store.
                </p>
                <p>
                    Through Jane's love for the visual arts, their film work organically grew to what it is today. Because of this gradual maturation process, Steve and Jane have been able to hone their skills and really dig into what each couple wants. Our deepest core value is to deliver a wedding film that is honest and far above any previous expectation by the couple. We are able to accomplish this by keeping our rates low, using Hollywood-grade equipment and never allowing ourselves to be completely satisfied.
                </p>
            </div>
        </section>

    </div>

</template>





<script>

    import { mapActions } from 'vuex';

    import Hero from '~/components/Hero.vue';
    import TitleBlock from '~/components/TitleBlock.vue';

    export default {

        name: 'About',
        watchQuery: ['page'],
        key: to => to.fullPath,
        transition(to, from) {

            if (!from) return 'slide-left'
            return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
            
        },
        components: {

            Hero,
            TitleBlock

        },
        head() {
            return {

                title: 'About | Color Room Films NJ',
                meta: [
                    { property: 'og:title', content: 'About | Color Room Films NJ' },
                    { name: 'description', content: 'Steve and Jane DiMaggio are New Jersey’s premier cinematographers. Learn all about Color Room Films, its values and its mission here!' },
                    { property: 'og-description', content: 'Steve and Jane DiMaggio are New Jersey’s premier cinematographers. Learn all about Color Room Films, its values and its mission here!' },
                    { name: 'keywords', content: 'New Jersey, videographer, wedding film, cinematic, motion picture memories, NJ, wedding video, wedding movie, about, Steve DiMaggio, Jane DiMaggio, recording' }
                ]

            }
        },
        created() {

            this.updateCallToAction({
                isVisible: true,
                url: '/weddings',
                title: 'Visit our Weddings page to view more of our work',
                content: 'VIEW OUR RECENT WEDDINGS'
            });

            this.updateFooter({
                title: 'OUR PHILOSOPHY',
                content: 'The most important thing to us is your story. At Color Room Films, we deliver precious memories of your special day that you can relive for years to come. Our goal is to remain discreet and make sure you remain the focal point all day, while telling your story in the most emotional, cinematic and honest way possible. We use only the highest grade cinematic tools available to tell your story; the same cameras, lenses, aerial drones and other tools you would see on a Hollywood set, at the best value for your dollar.'
            })

            this.updateCurrentQuote();

        },
        methods: {

            ...mapActions([
                'updateCallToAction',
                'updateFooter',
                'updateCurrentQuote'
            ])

        }

    }

</script>





<style lang="scss" scoped>

    /* Modern Browsers: */
    .about-hero-webp { // 480p default
        background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                            url(/images/heros/about/480p.webp);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    }

    @media only screen and (min-width: 960px) { // Halfway between 480p and 720p
        .about-hero-webp {
            background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                                url(/images/heros/about/720p.webp);
        }
    }

    @media only screen and (min-width: 1600px) { // Halfway between 720p and 1080p
        .about-hero-webp {
            background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                                url(/images/heros/about/1080p.webp);
        }
    }

    @media only screen and (min-width: 2240px) { // Halfway between 1080p and 1440p
        .about-hero-webp {
            background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                                url(/images/heros/about/1440p.webp);
        }
    }

    /* Legacy Browsers: */
    .about-hero { // 480p default
        background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                            url(/images/heros/about/480p.jpg);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    }

    @media only screen and (min-width: 960px) { // Halfway between 480p and 720p
        .about-hero {
            background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                                url(/images/heros/about/720p.jpg);
        }
    }

    @media only screen and (min-width: 1600px) { // Halfway between 720p and 1080p
        .about-hero {
            background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                                url(/images/heros/about/1080p.jpg);
        }
    }

    @media only screen and (min-width: 2240px) { // Halfway between 1080p and 1440p
        .about-hero {
            background-image:   linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                                url(/images/heros/about/1440p.jpg);
        }
    }

</style>