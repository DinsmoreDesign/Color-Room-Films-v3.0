<template>

    <div class="awards">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-xs-12">
                    <div class="row middle-xs award">
                        <div class="col-xs-4 icon-container" v-html="require('!svg-inline-loader!../static/images/the-knot.svg')"></div>
                        <div class="col-xs-8 content">
                            <p>
                                <small>2017, 2018 &</small>
                            </p>
                            <h3>
                                <strong>2019</strong> the knot
                            </h3>
                            <p> Best of Weddings</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-xs-12">
                    <div class="row middle-xs icon-container award" v-html="require('!svg-inline-loader!../static/images/style-me-pretty.svg')"></div>
                </div>
                <div class="col-md-4 col-xs-12">
                    <div class="row middle-xs award">
                        <div class="col-xs-4 icon-container" v-html="require('!svg-inline-loader!../static/images/wedding-wire.svg')"></div>
                        <div class="col-xs-8 content">
                            <p>
                                <small>2017, 2018 &</small>
                            </p>
                            <h3>
                                <strong>2019</strong> WeddingWire
                            </h3>
                            <p> Couples' Choice Awards</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row single-icon">
                <div class="today">
                    <h3>As seen on</h3>
                    <div v-html="require('!svg-inline-loader!../static/images/today.svg')"></div>
                </div>
            </div>
        </div>
    </div>

</template>



 

<script>

    export default {

        

    }

</script>





<style lang="scss" scoped>

    .awards {
        background-color: #5e5e5e;
        color: #FFF;

        .container {
            width: 90%;
        }

        .award {
            padding: 3rem 0;
        }

        .single-icon {
            justify-content: center;
            text-align: center;

            .today {
                padding: 3rem 0;
                max-width: 300px;

                h3 {
                    text-align: right;
                    font-size: 1.54rem;
                }

                /deep/ svg {
                    width: 100%;
                }

            }

        }

        .icon-container {
            justify-content: center;
            text-align: center;

            /deep/ svg {
                height: 125px;

                * {
                    fill: #FFF;
                }

            }

            @media screen and (min-width: 1350px) {

                /deep/ svg {
                    height: 150px;
                }

            }

        }

        p,
        h3 {
            margin: 0;
        }

        h3 {
            font-size: 2.2rem;
            font-weight: 200;
        }
        p {
            font-size: 1.5rem;
            font-weight: 400;
        }

        .small {
            font-size: 100%;
        }

    }

</style>