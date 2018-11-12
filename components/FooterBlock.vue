<template>

    <div>

        <footer class="footer has-text-centered">
            <div class="container">
                
                <i :class="[ 'icon-' + iconName ]"></i>

                <div class="footer-section" v-if="$slots.default">
                    <slot></slot>
                </div>

                <div class="footer-section" v-if="$slots.default">
                    <hr/>
                </div>

                <div class="footer-section">
                    <h4 class="title is-4 has-text-white">CONTACT US</h4>
                    <p v-for="(line, index) in address" :key="index">
                        {{ line }}
                    </p>
                    <p>
                        <a :href=" 'tel:' + phone " :title=" 'Give ' + companyName + ' a Call' ">{{ phone }}</a>
                    </p>
                    <p>
                        <a :href=" 'mailto:' + email " :title=" 'Send ' + companyName + ' an Email' ">{{ email }}</a>
                    </p>
                </div>
                
                <div class="footer-section">
                    <a v-for="link in socialLinks" :key="link.icon"
                        :href="link.url"
                        :title="link.title"
                        target="_blank"
                    >
                        <i :class="[ 'icon-' + link.icon ]"></i>
                    </a>
                </div>
                
                <p>© {{ copyright }}. All Rights Reserved.</p>
                
            </div>
        </footer>
    
        <div class="subfooter has-text-centered has-background-grey-light">
            <p class="has-text-grey-dark">
                <a class="has-text-grey-dark" href="https://dinsmoredesign.com" title="Dinsmore Design | We Build Brands" target="_blank">
                    Built with <i class="icon-heart"></i> by Dinsmore Design.
                </a>
            </p>
        </div>

    </div>

</template>





<script>

    export default {

        props: {
            phone: {
                type: String,
                required: true
            },
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

        .footer-section {
            margin-bottom: 3rem;
        }

        p {
            font-weight: 200;
        }

        .title {
            font-weight: 400;
        }

        i.icon-crf {
            font-size: 8rem;    
        }

        hr {
            width: 50%;
            margin: 0 auto;
            background-color: rgba(255, 255, 255, 0.5);
        }

    }

    .subfooter {
        font-size: 0.9rem;
        padding: 0.45rem 0;

        a:hover {
            opacity: 0.7;
        }
    }

</style>