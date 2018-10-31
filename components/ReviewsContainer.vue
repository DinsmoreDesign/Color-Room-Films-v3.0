<template>

    <div class="reviews-container" :style=" 'background:url(' + background + ') no-repeat center center fixed; background-size: cover;' ">
        
        <div class="container">
            <div class="columns is-multiline level">

                <div class="column is-4 level-item" v-for="review in reviews" :key="review.name">
                    <div class="card">
                        <div class="card-content">
                            <p class="subtitle is-spaced">
                                "{{ review.text }}"
                            </p>
                            <p class="title" style="text-align:right;padding-top:1.5 rem"> - {{ review.name }}</p>
                        </div>
                        <footer class="card-footer">
                            <a v-if=" review.website === 'theknot' "
                                href="https://www.theknot.com/marketplace/color-room-films-llc-jackson-nj-963435"
                                title="Read Elizabeth M.'s and others like it at The Knot"
                                target="_blank"
                                class="card-footer-item"
                            >
                                Read more on The Knot
                            </a>
                            <a v-else
                                href="https://www.theknot.com/marketplace/color-room-films-llc-jackson-nj-963435"
                                title="Read Meghan's and others like it at WeddingWire"
                                target="_blank"
                                class="card-footer-item"
                            >
                                Read more on WeddingWire
                            </a>
                        </footer>
                    </div>
                </div>

            </div>
        </div>
        <slot></slot>
    </div>

</template>





<script>

    export default {

        props: {
            background: {
                type: String,
                required: true
            },
            reviews: {
                type: Array,
                required: true
            }
        }

    }

</script>