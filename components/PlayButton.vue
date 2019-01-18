<template>

    <div @click="$emit('clicked')" :style="{ width: width }">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <g transform="translate(-851 -431)">
                <g class="a" transform="translate(851 431)">
                    <circle class="c" cx="100" cy="100" r="100" />
                    <circle class="d" cx="100" cy="100" r="97" />
                </g>
                <path class="b" d="M6882.524,478.179l82.292,53.242-82.292,52.841Z" transform="translate(-5960.813)" />
            </g>
        </svg>
    </div>

</template>





<script>

    export default {

        props: {

            width: {
                type: String,
                required: false,
                default: '200px'
            }

        }

    }

</script>





<style lang="scss" scoped>

    svg {
        height: auto;
            -webkit-filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.4));
        filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.4));

        .a,
        .b,
        .d {
            fill: none;
        }

        .a,
        .b {
            stroke: #fff;
            stroke-width: 6px;
        }

        .b {
            stroke-linejoin: round;
        }

        .c {
            stroke: none;
        }
    }

    div {
        margin: 0 auto;
        cursor: pointer;

        &:hover {

            opacity: 0.7;

        }

    }

</style>