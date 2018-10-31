<template>

    <div>

        <div class="superfooter has-text-centered">
            <div class="container">
                <div class="columns">

                    <div class="column">
                        <a :href=" 'tel:' + phone " :title=" 'Give' + copyright + 'a Call' ">
                            <i class="icon-phone"></i> {{ phone }}
                        </a>
                    </div>
                    <div class="column">
                        <a :href=" 'mailto:' + email " :title=" 'Send' + copyright + 'an Email' ">
                            <i class="icon-envelope"></i> {{ email }}
                        </a>
                    </div>

                </div>
            </div>
        </div>

        <footer class="footer">
            <div class="columns">
                <div class="column is-6 is-hidden-mobile">
                    <span class="tooltip">
                        © {{ copyright }}
                        <a class="tooltiptext" href="https://dinsmoredesign.com" title="Contact Dinsmore Design to build your next website" target="_blank">
                            Created by <strong>Dinsmore Design</strong> | We Build Brands
                        </a>
                    </span>
                </div>
                <div class="column is-6 social is-hidden-mobile">
                    <a v-for="link in socialLinks" :key="link.icon"
                        :href="link.url"
                        :title="link.title"
                        target="_blank"
                    >
                        <i :class="[ 'icon-' + link.icon ]"></i>
                    </a>
                </div>
                <div class="column is-hidden-tablet has-text-centered">
                    © {{ copyright }}
                </div>
                <div class="column is-hidden-tablet has-text-centered">
                    <a v-for="link in socialLinks" :key="link.icon"
                        :href="link.url"
                        :title="link.title"
                        target="_blank"
                    >
                        <i :class="[ 'icon-' + link.icon ]"></i>
                    </a>
                </div>
            </div>
        </footer>

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
            }
        },
        computed: {

            copyright() {

                return new Date().getFullYear() + ' ' + this.companyName;

            }

        }

    }

</script>