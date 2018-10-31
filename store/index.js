import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({

        state: {

            reviews: {
                home: [
                    {
                        text: `Color Room Films is simply put, THE BEST. My husband and I were hesitant to even book a videographer, as we weren't sure it was a necessary expense. BOY WAS I WRONG. Choosing Color Room Films to shoot our wedding was one of the best decisions we made in the entire wedding planning process. It wasn't until we came across one of their wedding trailers that were we convinced we needed a videographer - and it had to be them!`,
                        name: 'Elizabeth M.',
                        website: 'theknot'
                    },
                    {
                        text: `Steve and his team were absolutely amazing! They were so sweet but also stayed in the background and were not intrusive. He knew the important things I wanted captured without even asking! The turnaround for the trailer and video was so fast I couldn't believe it! Color Room Films truly went above and beyond what I thought I was receiving in the package and I would recommend them to anyone planning a wedding!`,
                        name: 'Dana',
                        website: 'weddingwire'
                    },
                    {
                        text: `At first, a videographer was not in our budget. After attending a wedding that Color Room filmed, we fell in love with the beautiful trailer they created for our friends and instantly knew we needed them to capture our day. I reached out to Color Room and immediately connected with them. They were quick to respond, listened to our needs, and had an acute sense to detail. We have shared our trailer and video with all of our family and friends and the feedback is unanimous: Color Room films exceeded all expectations.`,
                        name: 'Allison D.',
                        website: 'theknot'
                    },
                    {
                        text: `I found Color Room Films on “The Knot” and I am seriously so THANKFUL that I did. I picked up the phone, spoke with Steve and knew instantly he would be incredible to work with! I had spoken with a few other companies and no one was as attentive, polite, enthusiastic and as easy to speak with as Steve was. Please TRUST ME when I say that I had done extensive research and no other company seemed to have such a simple contract and price. Aside from Steve and Jane being the most reliable and responsive people; the traditional, heartfelt and beautiful ways they were able to capture our wedding is hard to put into words. The video is not just a video, in my opinion, it is a work of art. I have received SO many compliments after posting our trailer; our friends and family were BLOWN away. People have also told me it's the BEST wedding video they have EVER seen.`,
                        name: 'Megan',
                        website: 'weddingwire'
                    },
                    {
                        text: `My wedding hit a bump when another cinematographer up and backed out three months before the big day. I was pretty stressed about it when a friend recommended Steve and Color Room Films and since that day I was so happy! Steve was so incredibly responsive, faster than anyone I've spoken to! He was accommodating and really easy to work with! Steve, his wife and assistant were absolutely perfect on our wedding day, so kind, so fun and you barely knew they were there!!! The videos we received were so great and the turnaround was unreal! I've never seen work that fast! I highly recommend using them and would love to work with them again if ever needed!`,
                        name: 'Kelly M.',
                        website: 'theknot'
                    },
                    {
                        text: `The first few minutes on my phone consultation with Steve, I knew I had to book them. Our wedding trailer and full wedding video came out absolutely amazing. I also reached out to Steve to ask if there was any way he could help me make a video tribute to my mom, stepdad, and grandparents for the wedding and without hesitation, he said yes. There was not a dry eye in the house when the video came on at the wedding. They made the whole process leading up to the wedding super easy and everyone who has watched my wedding video, wedding trailer, and tribute video, has been absolutely blown away and are even using Color Room Films for their own weddings now. I honestly would look no further than Color Room because Steve and Jane are the best of the best and I promise you will be so happy with all they do and their work.`,
                        name: 'Brittany',
                        website: 'weddingwire'
                    }
                ]
            }

        },

    })
}

export default createStore
