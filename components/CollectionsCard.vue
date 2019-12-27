<template>

    <div :class="[ 'card', { 'dark': isBold } ]">
        <div class="header">
            <h3 class="title">{{ title }} Package</h3>
        </div>
        <div class="content">
            <p v-if="typeof content === 'string'">
                {{ content }}
            </p>
            <p v-else v-for="(paragraph, index) in content" :key="index">
                {{ paragraph }}
            </p>
        </div>
    </div>

</template>





<script>

    export default {

        props: {
            
            title: {
                type: String,
                required: true
            },
            content: {
                type: [String, Array],
                required: true
            },
            isBold: {
                type: Boolean,
                required: false,
                default: false
            }

        }

    }

</script>





<style lang="scss" scoped>

    .card {
        background: #FFF;
        color: #5e5e5e;
        box-sizing: border-box;
        box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);

        .header,
        .content {
            padding: 1.5rem;
        }

        .content p {
            text-align: justify;
            font-size: 1.25rem;
            line-height: 1.5;
            font-weight: 300;
        }

        .header {
            padding-bottom: 0;
            text-align: center;

            .title {
                font-size: 2.5rem;
                color: #000;
                margin: 0;
                text-transform: uppercase;
                font-weight: 300;
            }

        }

        &.dark {
            background: #5e5e5e;
            color: #FFF;

            .title { color: #FFF; }

        }

    }

</style>