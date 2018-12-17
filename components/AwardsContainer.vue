<template>

    <div class="awards">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="row middle-xs">
                        <div class="col-xs-4 icon-container">
                            <i class="icon-theknot"></i>
                        </div>
                        <div class="col-xs-8 content">
                            <h3 class="title is-1">
                                <strong>2019</strong> the knot
                            </h3>
                            <p class="subtitle is-4"> Best of Weddings</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row middle-xs icon-container">
                        <i class="icon-smp-logo"></i>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row middle-xs">
                        <div class="col-xs-4 icon-container">
                            <i class="icon-weddingwire"></i>
                        </div>
                        <div class="col-xs-8 content">
                            <h3 class="title is-1">
                                <strong>2018</strong> WeddingWire
                            </h3>
                            <p class="subtitle is-4"> Couples' Choice Awards</p>
                        </div>
                    </div>
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
        padding: 3rem 0;
        background-color: #5e5e5e;
        color: #FFF;

        .container {
            width: 90%;
        }

        .icon-container {
            justify-content: center;
            text-align: center;

            i {
                font-size: 8rem;
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

    }

</style>