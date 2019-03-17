<template>
  <div 
    class="image-container"
    :style='{ 
    backgroundImage: coverImg,
    paddingTop: verticalSize
    }'>

    <slot/>

  </div>
</template>

<script>
import { FALLBACK_FISHTRIPR_COVER } from '../../constants/fallbacks'

export default {
  name: 'image-container',
  props: {
    image: {
      type: String,
      default: FALLBACK_FISHTRIPR_COVER
    },
    height: {
      type: Number,
      default: 40,
      validator: value => {
        return typeof value === "number" && value > 1
      }
    }
  },
  computed: {
    coverImg() {
      return `url('${this.image}')`
    },
    verticalSize() {
      return `${this.height}%`
    }
  }
}
</script>

<style lang='scss' scoped>
.image-container {
  display: flex;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  width: 100%;
  min-width: 10px;
}
</style>