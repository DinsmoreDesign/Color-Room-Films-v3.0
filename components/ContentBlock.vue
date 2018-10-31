<template>

    <section :class="[ 'hero', 'is-' + color, 'is-' + size, { 'is-bold': hasGradient, 'has-text-centered': hasTextCentered } ]">
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
            },
            hasTextCentered: {
                type: Boolean,
                required: false,
                default: false
            }
        }

    }

</script>