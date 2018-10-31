<template>

    <section :class="[ 'hero', 'is-' + color, 'is-' + size, hasGradient ? 'is-bold' : '' ]">
        <div class="hero-body">
            <div class="container">
                <slot></slot>
            </div>
        </div>
    </section>

</template>





<script>

    export default {

        props: {
            color: {
                type: String,
                required: false,
                default: 'white'
            },
            size: {
                type: String,
                required: false,
                default: 'medium'
            },
            hasGradient: {
                type: Boolean,
                required: false,
                default: true
            }
        }

    }

</script>