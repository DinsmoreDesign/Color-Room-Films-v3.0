<template>

    <div class="select-container">

        <header>
            <button
                @click="showFilters = !showFilters"
                type="button"
                class="header"
                title="Toggle filters"
            >
                {{ title }} {{ showFilters ? '&#9662;' : '&#9656;' }}
            </button>
            <transition name="fade">
                <button
                    v-if="showFilters"
                    type="button"
                    class="toggle"
                    @click="$emit('buttonClicked')"
                >
                    {{ buttonTitle }}
                </button>
            </transition>
        </header>

        <transition name="fade">

            <div class="filters" v-if="showFilters">
                <div
                    v-for="(option, index) in options"
                    :key="option"
                >
                    <label :for="'option-' + index" >
                        <input
                            type="checkbox"
                            :id="'option-' + index"
                            :name="'option-' + index"
                            :value="option"
                            v-model="selected"
                        >
                        {{ option }}
                    </label>
                </div>
            </div>

        </transition>

    </div>

</template>





<script>

    export default {

        name: 'SelectContainer',
        props: {

            title: {
                type: String,
                required: true
            },
            buttonTitle: {
                type: String,
                required: true
            },
            options: {
                type: Array,
                required: true
            },
            value: {
                type: Array,
                required: true
            }

        },
        data() {
            return {

                showFilters: false

            }
        },
        computed: {

            selected: {

                get() {
                    return this.value;
                },
                set(val) {
                    this.$emit('input', val);
                }

            }

        }

    }

</script>





<style lang="scss" scoped>

    .select-container {
        
        &:not(:last-child) {
            margin-bottom: 2rem;
        }

        button {
            text-align: left;
            background: none;
            border: none;
            cursor: pointer;
            padding: 1rem;
            border: 2px solid transparent;
        }

        header {
            cursor: pointer;

            &:not(:last-child) {
                margin-bottom: 2rem;
            }

            .header {
                width: 100%;
                text-align: center;
                padding: 0;
                margin-bottom: 0;
                font-size: 2rem;
                font-weight: 300;
            }

            .toggle {
                display: block;
                width: 100%;
                text-align: center;
                border: 2px solid #5e5e5e;
                color: #FFF;
                background: #5e5e5e;
                border-radius: 3px;
                font-size: 1.2rem;
                line-height: 2rem;
                text-transform: uppercase;

                &:hover {
                    transform: scale(1.05);
                    box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.3);
                }

            }

        }

        .filters {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            grid-column-gap: 0.5rem;
            grid-row-gap: 0.5rem;
            padding-top: 2rem;
            border-top: 2px solid #dbdbdb;

            div {
                display: flex;

                label {
                    padding: 0.5rem;
                    font-size: 1rem;
                    display: flex;
                    align-items: center;
                    flex: 1;
                    border: 2px solid #5e5e5e;
                    border-radius: 3px;
                    cursor: pointer;

                    input[type=checkbox] {
                        margin-right: 1rem;
                        width: 1.5rem;
                        min-width: 1.5rem;
                        -webkit-appearance: none;
                        -moz-appearance: none;
                        height: 1.5rem;
                        min-height: 1.5rem;
                        border-radius: 3px;
                        background: transparent;
                        border: solid #5e5e5e;
                        cursor: pointer;

                        &:after {
                            margin-left: .35rem;
                            margin-top: -.05rem;
                            width: .35rem;
                            height: .85rem;
                            border: solid transparent;
                            border-width: 0 3px 3px 0;
                            content: "";
                            display: inline-block;
                        }

                        &:checked:after {
                            border: solid #5e5e5e;
                            border-width: 0 3px 3px 0;
                            -webkit-transform: rotate(45deg);
                            transform: rotate(45deg);
                        }

                    }

                    &:hover {
                        opacity: 0.6;
                    }

                }
            }

        }

        @media screen and (min-width: 533px) {

            header {
                display: flex;
                align-items: center;

                .header {
                    flex: 1;
                    width: auto;
                    text-align: left;
                }

                .toggle {
                    width: auto;
                }

            }

            .filters div label {
                padding: 1rem;
                font-size: 1.2rem;
            }

        }

    }

    @media only screen and (max-width: 960px) { // Halfway between 480p and 720p
        
        .select-container header button,
        .select-container label  {
            padding: 0.5rem;
        }

    }

</style>