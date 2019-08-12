export const responsiveHandler = {
    data() {
        return {
            element: null,
            elementWidth: 0,
            elementHeight: 0,
            deviceSize: 4,
            deviceSizes: {
                s: 1,
                m: 2,
                l: 3,
                xl: 4
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.element = window
            if (this.element) {
                window.addEventListener('resize', this.setElementWidth)
                window.addEventListener('resize', this.setElementHeight)
                this.setElementWidth()
                this.setElementHeight()
            }
        })
    },
    methods: {
        setElementWidth(event) {
            this.elementWidth = this.element.innerWidth
            this.setDeviceSize(this.elementWidth)
        },
        setElementHeight(event) {
            this.elementHeight = this.element.innerHeight
        },
        setDeviceSize(width) {
            if (width > 1200) {
                // large desktop
                this.deviceSize = 4
            } else if (width > 991 && width <= 1200) {
                // laptop
                this.deviceSize = 3
            } else if (width > 600 && width <= 991) {
                // tablet
                this.deviceSize = 2
            } else if (width <= 600) {
                // smartphone
                this.deviceSize = 1
            }
        }
    },
    beforeDestroy() {
        if (this.element) {
            window.removeEventListener('resize', this.setElementWidth)
            window.removeEventListener('resize', this.setElementHeight)
        }
    }
}
