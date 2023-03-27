export const state = () => ({
    options: {
        epic: {
            title: "Epic",
            price: 4899,
            videoId: 280197591,
            jpg: "/images/thumbs/katie_daniel.jpg",
            webp: "/images/thumbs/katie_daniel.webp",
            content: [
                "10 hours of coverage",
                "2 shooters",
                "3-5 minute trailer",
                "Trailer cuts for instagram posts",
                "Cinematic style full film",
                "Drone included (weather & location permitting)"
            ]
        },
        scarlett: {
            title: "Scarlett",
            price: 4000,
            content: [
                "8 hours of coverage",
                "2 shooters",
                "3-5 minute trailer",
                "Trailer cuts for instagram posts",
                "Cinematic style full film",
                "Drone included (weather & location permitting)"
            ]
        },
        legacy: {
            title: "Legacy",
            price: 3389,
            content: [
                "8 hours of coverage",
                "Single shooter",
                "3-5 minute trailer",
                "Cinematic style full film",
                "Drone included (weather & location permitting)"
            ]
        },
        essentials: {
            title: "Essentials",
            price: 1889,
            content: [
                "5 hours of coverage",
                "Single Shooter",
                `Traditional wedding film that covers the day's major events`
            ]
        }
    },
    cta: {
        isVisible: true,
        url: "/reviews",
        title:
            "Visit our Reviews page to see what others have to say about our work",
        content: "SEE WHAT OTHERS HAVE TO SAY"
    },
    footer: {
        title: "WHY US?",
        content: `Every wedding is unique and every couple is different, that's why every project we work on is approached differently. No two events we've filmed are ever the same; we purchase exclusive music publishing rights for each wedding and don't believe in releasing films that are lacking individuality. It's our job to get to know you and what you like, so we can represent your personality as genuinely as possible.`
    }
});

export const getters = {
    headData: state => title => ({
        title: `${title} | Color Room Films IN`,
        meta: [
            { property: "og:title", content: `${title} | Color Room Films IN` },
            {
                name: "description",
                content:
                    "Color Room Films is Indiana’s premier cinematographer. One price - All the coverage you want."
            },
            {
                property: "og-description",
                content:
                    "Color Room Films is Indiana’s premier cinematographer. One price - All the coverage you want."
            },
            {
                name: "keywords",
                content:
                    "Indiana, videographer, wedding film, cinematic, motion picture memories, NJ, wedding video, wedding movie, special, Jackson, pricing, Fort Wayne, Indiana, IN"
            }
        ]
    })
};
