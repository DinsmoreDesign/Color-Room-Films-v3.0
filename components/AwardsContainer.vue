<template>
    <div class="awards">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-xs-12">
                    <div class="row middle-xs award">
                        <div
                            class="col-xs-4 icon-container"
                            v-html="
                                require('!svg-inline-loader!../static/images/the-knot.svg')
                            "
                        ></div>
                        <div class="col-xs-8 content">
                            <h3><strong>2017 - 2023</strong></h3>
                            <h3>the knot</h3>
                            <p>Best of Weddings</p>
                            <p>+ Hall of Fame</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-xs-12">
                    <div
                        class="row middle-xs icon-container award"
                        v-html="
                            require('!svg-inline-loader!../static/images/style-me-pretty.svg')
                        "
                    ></div>
                </div>
                <div class="col-md-4 col-xs-12">
                    <div class="row middle-xs award">
                        <div
                            class="col-xs-4 icon-container"
                            v-html="
                                require('!svg-inline-loader!../static/images/wedding-wire.svg')
                            "
                        ></div>
                        <div class="col-xs-8 content">
                            <h3><strong>2017 - 2022</strong></h3>
                            <h3>WeddingWire</h3>
                            <p>Couples' Choice Awards</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row single-icon">
                <div class="today">
                    <h3>As seen on</h3>
                    <div
                        v-html="
                            require('!svg-inline-loader!../static/images/today.svg')
                        "
                    ></div>
                    <h3>
                        +
                        <br />
                        The Knot Magazine
                        <br />
                        & New Jersey Bride
                    </h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.awards {
    background-color: #dbdbdb;
    color: #5e5e5e;

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

            ::v-deep svg {
                width: 100%;
            }
        }
    }

    .icon-container {
        justify-content: center;
        text-align: center;

        ::v-deep svg {
            height: 125px;

            * {
                fill: #5e5e5e;
            }
        }

        @media screen and (min-width: 1350px) {
            ::v-deep svg {
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
