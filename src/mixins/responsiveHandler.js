import { BREAKPOINT } from '@fishtripr/constants'

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
        xl: 4,
      },
    }
  },
  computed: {
    isSmallOrDown() {
      return this.deviceSize == this.deviceSizes.s
    },
    isMediumOrDown() {
      return this.deviceSize <= this.deviceSizes.m
    },
    isLargeOrDown() {
      return this.deviceSize <= this.deviceSizes.l
    },
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
    setElementWidth() {
      this.elementWidth = this.element.innerWidth
      this.setDeviceSize(this.elementWidth)
    },
    setElementHeight() {
      this.elementHeight = this.element.innerHeight
    },
    setDeviceSize(width) {
      if (width > BREAKPOINT.L) {
        // large desktop
        this.deviceSize = 4
      } else if (width > BREAKPOINT.M && width <= BREAKPOINT.L) {
        // laptop
        this.deviceSize = 3
      } else if (width > BREAKPOINT.S && width <= BREAKPOINT.M) {
        // tablet
        this.deviceSize = 2
      } else if (width <= BREAKPOINT.S) {
        // smartphone
        this.deviceSize = 1
      }
    },
  },
  beforeDestroy() {
    if (this.element) {
      window.removeEventListener('resize', this.setElementWidth)
      window.removeEventListener('resize', this.setElementHeight)
    }
  },
}
