<template>

    <div class="subfooter">
        <div class="container">
            <p>
                <a href="https://dinsmoredesign.com" title="Dinsmore Design | We Build Brands" target="_blank">
                    Built with <i class="icon-heart"></i> by Dinsmore Design.
                </a>
            </p>
        </div>
    </div>

</template>





<script>

    export default {

        

    }

</script>




<style lang="scss" scoped>

    .subfooter {
        background-color: #5e5e5e;
        text-align: center;
        padding: 0.45rem 0 6rem;

        p {
            font-size: 0.9rem;
            margin: 0;
        }

        a {
            color: #FFF;
            text-decoration: none;

            i {
                color: pink;
            }

            &:hover {
                opacity: 0.7;
            }

        }
        
    }

    @media screen and (min-width: 530px) {
        .subfooter { padding-bottom: 5rem; }
    }

</style>