<template>

    <nuxt-link class="button" :to="url" :title="title">
        <slot/>
    </nuxt-link>

</template>





<script>

    export default {

        props: {

            url: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            }

        }

    }

</script>





<style lang="scss" scoped>

    .button {
        display: inline-block;
        padding: .5rem;
        border: 2px solid #7a7a7a;
        background: #fff;
        border-radius: 3px;
        font-weight: 300;
        color: #7a7a7a;
        font-size: 2rem;
        text-decoration: none;
        box-sizing: border-box;
        transition: all 0.5s;

        &:hover {
            border-color: #5e5e5e;
            color: #5e5e5e;
            transform: scale(1.05);
            opacity: 1;
                -webkit-box-shadow: 5px 5px 15px 0px rgba(0,0,0,0.3);
                -moz-box-shadow: 5px 5px 15px 0px rgba(0,0,0,0.3);
            box-shadow: 5px 5px 15px 0px rgba(0,0,0,0.3);
        }

    }

</style>