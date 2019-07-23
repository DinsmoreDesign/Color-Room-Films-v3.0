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
            <button
                v-if="showFilters"
                type="button"
                class="toggle"
                @click="$emit('buttonClicked')"
            >
                {{ buttonTitle }}
            </button>
        </header>

        <transition name="fade">

            <div class="filters" v-if="showFilters">
                <label
                    v-for="(option, index) in options"
                    :key="option"
                    :for="'option-' + index"
                >
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
            display: flex;
            align-items: center;
            cursor: pointer;

            &:not(:last-child) {
                margin-bottom: 2rem;
            }

            .header {
                flex: 1;
                margin-bottom: 0;
                font-size: 2rem;
                font-weight: 300;
            }

            .toggle {
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
            padding-top: 2rem;
            border-top: 2px solid #dbdbdb;

            label {
                display: inline-block;
                padding: 1rem;
                border: 2px solid #5e5e5e;
                border-radius: 3px;
                font-size: 1.2rem;
                margin: 0 0.5rem 0.5rem 0;
                cursor: pointer;

                &:hover {
                    opacity: 0.6;
                }

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