export const state = () => ({
    
    options: {
        epic: {
            title: 'Epic',
            price: 4999,
            price20: 4900,
            price21: 3800,
            videoId: 280197591,
            jpg: '/images/thumbs/katie_daniel.jpg',
            webp: '/images/thumbs/katie_daniel.webp',
            content: [
                `Our most popular package with couples needing all day coverage. 10 hour-2 shooter coverage. Drone is included weather pending. This package works great for couples that want everything captured and usually gets us close to the end of the night! You will receive a trailer and full film (full film lengths can vary), we never put a limit on the length of your full film either! Couples receive all dance floor footage in it's entirety along with all the days major events. Delivery is via Vimeo in 4K resolution. We also NEVER USE LIGHTS! This helps us achieve the best ambience when it comes to candid dancefloor footage!`
            ]
        },
        // gemini: {
        //     title: 'Gemini',
        //     price: 3800,
        //     price20: 4300,
        //     price21: 3389,
        //     videoId: 291922022,
        //     jpg: '/images/thumbs/kari_tom.jpg',
        //     webp: '/images/thumbs/kari_tom.webp',
        //     content: [
        //         `All the same coverages as Epic but in an 8 Hour package, if you are not sure if you will need 8 or 10 hours, you can book the Gemini and upgrade to the Epic up to a month before hand! Usually this package will get you from morning prep through intros and occasionally cake.`
        //     ]
        // },
        // legacy: {
        //     title: 'Legacy',
        //     price: 3389,
        //     price20: 3800,
        //     price21: 2889,
        //     content: [
        //         `This package works great for couples who only need 8 hours and one shooter with only a couple locations. We shoot this package in 4K and deliver is the same as our other packages. Normally drone is not including in single shooter packages. We shoot this package mainly for the full film and put together a complimentary recap for you also. This is part of our associate program and generally Steve will not shoot these but does on occasion.`
        //     ]
        // }
    },
    cta: {
        isVisible: true,
        url: '/reviews',
        title: 'Visit our Reviews page to see what others have to say about our work',
        content: 'SEE WHAT OTHERS HAVE TO SAY'
    },
    footer: {
        title: 'WHY US?',
        content: `Every wedding is unique and every couple is different, that's why every project we work on is approached differently. No two events we've filmed are ever the same; we purchase exclusive music publishing rights for each wedding and don't believe in releasing films that are lacking individuality. It's our job to get to know you and what you like, so we can represent your personality as genuinely as possible.`
    }

});

export const getters = {

    headData: state => title => ({
        title: `${title} | Color Room Films IN`,
        meta: [
            { property: 'og:title', content: `${title} | Color Room Films IN` },
            { name: 'description', content: 'Color Room Films is New Jersey’s premier cinematographer. One price - All the coverage you want.' },
            { property: 'og-description', content: 'Color Room Films is New Jersey’s premier cinematographer. One price - All the coverage you want.' },
            { name: 'keywords', content: 'New Jersey, videographer, wedding film, cinematic, motion picture memories, NJ, wedding video, wedding movie, special, Jackson, pricing, Fort Wayne, Indiana, IN' }
        ]
    })

};
