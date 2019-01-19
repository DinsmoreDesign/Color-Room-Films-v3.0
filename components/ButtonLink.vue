<template>

    <nuxt-link :class="[ 'button', isWhite ? 'white' : 'default' ]" :to="url" :title="title">
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
            },
            isWhite: {
                type: Boolean,
                required: false
            }

        }

    }

</script>





<style lang="scss" scoped>

    .button {
        display: inline-block;
        padding: .5rem;
        border-radius: 3px;
        font-weight: 300;
        font-size: 2rem;
        text-decoration: none;
        box-sizing: border-box;
        transition: all 0.5s;

        &.default {
            border: 2px solid #7a7a7a;
            background: #fff;
            color: #7a7a7a;

            &:hover {
                border-color: #5e5e5e;
                color: #5e5e5e;
                transform: scale(1.05);
                    -webkit-box-shadow: 5px 5px 15px 0px rgba(0,0,0,0.3);
                    -moz-box-shadow: 5px 5px 15px 0px rgba(0,0,0,0.3);
                box-shadow: 5px 5px 15px 0px rgba(0,0,0,0.3);
            }

        }

        &.white {
            border: 2px solid #FFF;
            background: transparent;
            color: #FFF;

            &:hover {
                background: #FFF;
                color: #5e5e5e;
                border-color: #5e5e5e;
                transform: scale(1.05);
                    -webkit-box-shadow: 5px 5px 15px 0px rgba(0,0,0,0.3);
                    -moz-box-shadow: 5px 5px 15px 0px rgba(0,0,0,0.3);
                box-shadow: 5px 5px 15px 0px rgba(0,0,0,0.3);
            }

        }

        

    }

</style>