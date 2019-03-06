<template>
  <div class="avatar">
    <div 
      class="image-wrapper"
      :style='{ 
        backgroundImage: coverImg,
        paddingTop: verticalSize
      }'>
      &nbsp;
    </div>
  </div>
</template>

<script>
import { getRandomNumber } from '../../functions/math'
import { S3_BUCKET_URL } from '../../constants/urls'

export default {
  name: 'avatar',
  props: {
    image: {
      type: String
    },
    height: {
      type: Number,
      default: 40
    }
  },
  data() {
    return {
      fishesColorNames: ['blue_pale', 'gray', 'green_light', 'green_pale', 'green', 'orange', 'pink', 'red_pale', 'yellow']
    }
  },
  computed: {
    coverImg() {
      const pic = this.image || this.getRandomFallback()
      return `url('${pic}')`
    },
    verticalSize() {
      return `${this.height}%`
    }
  },
  methods: {
    getRandomFallback() {
      const randomNumber = getRandomNumber(1, this.fishesColorNames.length)
      return `${S3_BUCKET_URL}/illu_fish_${this.fishesColorNames[randomNumber]}.png`
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar {
  display: flex;
  align-items: center;
  width: 85px;
  min-width: 85px;
  max-width: 85px;
  height: 85px;
  max-height: 85px;
  min-height: 85px;

  .image-wrapper {
    display: flex;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    border-radius: 100%;
  }
}
</style>