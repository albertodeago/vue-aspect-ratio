<template>
    <div class="vue-aspect-ratio" :style="componentStyle">
        <div class="vue-aspect-ratio__inner" :style="innerStyle">
            <div class="vue-aspect-ratio__content">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "VueAspectRatio",

    props: {
        /**
         * Aspect Ratio.
         * String with the following pattern
         * <aspect_ratio_width>:<aspect_ratio_height>
         * Default is "1:1" meaning that the component will be a square
         */
        ar: {
            type: String,
            default: "1:1",
            validator: (v) => {
                const [w, h] = v.split(":").map(v => parseInt(v))
                return !Number.isNaN(w) && !Number.isNaN(h)
            }
        },

        /**
         * Width to set to the component.
         * Optional, if not set the width will be 100% like a normal "div" element
         */
        width: String
    },

    data() {
        return {
            w: null, // width of the aspect ratio
            h: null // height of the aspect ratio
        }
    },

    computed: {
        /**
         * Style for the outer div element, this can just set the width of the component itself
         */
        componentStyle() {
            return this.width ? {width: this.width} : {}
        },

        /**
         * Style for the inner div element, this will define the aspect ratio
         */
        innerStyle() {
            // set the padding top, this is actually what gives the aspect ratio
            return {
                paddingTop: (this.h / this.w) * 100 + "%"
            }
        }
    },

    created() {
        // set w and h data parsing the ar prop
        const [w, h] = this.ar.split(":").map(v => parseInt(v))
        this.w = w
        this.h = h
    }
}
</script>

<style scoped>
.vue-aspect-ratio__inner {
    position: relative;
}

.vue-aspect-ratio__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>