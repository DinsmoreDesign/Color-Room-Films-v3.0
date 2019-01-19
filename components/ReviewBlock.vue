<template>

    <div class="review-container">
        <div class="title">
            <p>
                {{ title }}
            </p>
        </div>
        <div class="content">
            <p>
                {{ review }}
            </p>
        </div>
        <div class="signature">
            <p>
                <strong>
                    - {{ signature }}
                </strong>
            </p>
        </div>
    </div>

</template>





<script>

    export default {

        props: {

            review: {
                type: String,
                required: true,
            },
            signature: {
                type: String,
                required: true
            }

        },
        computed: {

            title() {

                return this.signature.charAt(0).toUpperCase();

            }

        }

    }

</script>





<style lang="scss" scoped>

    .review-container {
        margin-top: 3.5rem;
        position: relative;
        background-color: rgba(255, 255, 255, 0.6);
        border: 2px solid #707070;
        padding: 1.5rem;

        .title {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 1.5rem;
            background-color: #FFF;
            border: 2px solid #707070;
            border-radius: 100%;
            
            p {
                font-size: 4rem;
                text-align: center;
                height: 4rem;
                width: 4rem;
                line-height: 1;
            }
        }

        .content {
            padding: 3rem 0 1rem 0;
            font-style: italic;
        }

        .signature {
            text-align: right;
        }

    }

</style>