<template>

    <footer class="footer">
        <div class="container">
            
            <i :class="[ 'icon-' + iconName ]"></i>

            <div class="footer-section">
                <h4 class="title" v-if="title">{{ title }}</h4>
                <p>
                    {{ content }}
                </p>
            </div>

            <div class="footer-section">
                <hr/>
            </div>

            <div class="footer-section pad-small">
                <h4 class="title">CONTACT US</h4>
                <p v-for="(line, index) in address" :key="index">
                    {{ line }}
                </p>
                <!-- <p>
                    <a :href=" 'tel:' + phone " :title=" 'Give ' + companyName + ' a Call' ">{{ phone }}</a>
                </p> -->
                <p>
                    <a :href=" 'mailto:' + email " :title=" 'Send ' + companyName + ' an Email' ">{{ email }}</a>
                </p>
            </div>
            
            <div class="footer-section pad-small">
                <a v-for="link in socialLinks" :key="link.icon"
                    :href="link.url"
                    :title="link.title"
                    target="_blank"
                    class="icon"
                >
                    <i :class="[ 'icon-' + link.icon ]"></i>
                </a>
            </div>
            
            <p>© {{ copyright }}. All Rights Reserved.</p>
            
        </div>
    </footer>

</template>





<script>

    export default {

        props: {
            // phone: {
            //     type: String,
            //     required: true
            // },
            email: {
                type: String,
                required: true
            },
            companyName: {
                type: String,
                required: true
            },
            socialLinks: {
                type: Array,
                required: true
            },
            address: {
                type: Array,
                required: true
            },
            iconName: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: false
            },
            content: {
                type: String,
                required: true
            }
        },
        computed: {

            copyright() {

                return new Date().getFullYear() + ' ' + this.companyName;

            }

        }

    }

</script>




<style lang="scss" scoped>

    .footer {
        padding-top: 5rem;
        padding-bottom: 5rem;
        text-align: center;
        background: #dbdbdb;

        .title {
            font-size: 1.3rem;
        }

        h4 {
            font-weight: 700;
        }

        p,
        a,
        i,
        h4 {
            color: #5e5e5e;
        }

        p {
            margin: 0;
            font-weight: 400;
            font-size: 1.2rem;
        }

        a {
            text-decoration: none;

            &:hover {
                opacity: 0.7;
            }

        }

        .icon {
            font-size: 1.5rem;

            &:not(:last-child) {
                margin-right: 1.5rem;
            }

        }

        .footer-section {
            margin-bottom: 3rem;

            &.pad-small {
                margin-bottom: 1.33rem;
            }

        }

        i.icon-crf {
            font-size: 8rem;    
        }

        hr {
            width: 50%;
            margin: 0 auto;
            border-color: #5e5e5e;
        }

    }

</style>