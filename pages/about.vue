<template>
  
    <div>

        <Hero background="https://colorroomfilms.com/img/heros/about.jpg">
            <h1 class="title is-1">
                <strong>Steve &amp; Jane DiMaggio</strong>
            </h1>
            <h2 class="subtitle is-4">
                <em>Color Room Films - Owners / Cinematographers</em>
            </h2>
        </Hero>

        <ContentBlock :hasGradient="false" id="content">
            <h3 class="title is-2">
                We are humble filmmakers who's goal is to bring you an honest film in the most subtle way possible.
            </h3>
        </ContentBlock>

        <ContentBlock color="dark" id="content">
            <h3 class="title is-2">
                <strong>Our Story</strong>
            </h3>
            <p class="subtitle is-4 is-spaced">
                Before becoming a filmmaker, Steve was a professional musician and studio owner who traveled the country to record and play music. From New Jersey to California, and everywhere in between, he captured these stories experiences through motion picture.
            </p>
            <p class="subtitle is-4 is-spaced">
                After 10 years of recording and being on the road, Steve's passion for recording music had him, his soon to be wife and dog, Meeka, took a job offer halfway across the country to design recording studios and live sound systems for the music industries top names. While working in the midwest, Steve received a formal training in videography, cinematography techniques and equipment that formed the technical basis for his style, all while he continued to film bands and events.
            </p>
            <p class="subtitle is-4 is-spaced">
                After half a decade in the midwest, Steve and Jane decided to start a family and head back to New Jersey (now with 3 dogs and first daughter, Carmella). After a bit of soul-searching when returning, Steve took an opportunity to manage and create video content for a national music store.
            </p>
            <p class="subtitle is-4 is-spaced">
                Through Jane's love for the visual arts, their film work organically grew to what it is today. Because of this gradual maturation process, Steve and Jane have been able to hone their skills and really dig into what each couple wants. Our deepest core value is to deliver a wedding film that is honest and far above any previous expectation by the couple. We are able to accomplish this by keeping our rates low, using Hollywood-grade equipment and never allowing ourselves to be completely satisfied.
            </p>
        </ContentBlock>

    </div>

</template>





<script>

    import { mapActions } from 'vuex';

    import Hero from '../components/Hero.vue';
    import ContentBlock from '../components/ContentBlock.vue';

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
            ContentBlock
        },
        created() {

            this.updateCallToAction({
                isVisible: true,
                content: {
                    header: 'Want to learn more?',
                    buttonText: 'We have plenty to share!',
                    url: '/weddings',
                    urlTitle: 'Visit our Weddings page to view more of our work'
                }
            })

        },
        methods: {

            ...mapActions([
                'updateCallToAction'
            ])

        }

    }

</script>





<style>



</style>