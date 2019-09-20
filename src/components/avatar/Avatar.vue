<template>
  <div class="avatar" :class="[size, theme, { border: hasBorder }]">
    <image-container
      :image="image || getRandomFallback()"
      :height="100"
      class="image"
    />
  </div>
</template>

<script>
import { getRandomNumber } from '../../functions/math'
import { S3_BUCKET_URL } from '../../constants/urls'
import ImageContainer from '../image-container'

export default {
  name: 'avatar',
  props: {
    image: {
      type: String,
    },
    size: {
      type: String,
      default: 'm',
      validator: value =>
        ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'].includes(value),
    },
    hasBorder: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      default: 'light',
      validator: value => ['light', 'dark', 'premium'].includes(value),
    },
  },
  components: { ImageContainer },
  data() {
    return {
      fishesColorNames: [
        'blue_pale',
        'gray',
        'green_light',
        'green_pale',
        'green',
        'orange',
        'pink',
        'red_pale',
        'yellow',
      ],
    }
  },
  methods: {
    getRandomFallback() {
      const randomNumber = getRandomNumber(1, this.fishesColorNames.length)
      return `${S3_BUCKET_URL}/illu_fish_${
        this.fishesColorNames[randomNumber]
      }.png`
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/main';

@mixin dimensions($size) {
  width: #{$size}px;
  min-width: #{$size}px;
  max-width: #{$size}px;
  height: #{$size}px;
  max-height: #{$size}px;
  min-height: #{$size}px;
}

.avatar {
  display: flex;
  align-items: center;
  border-radius: 100%;
  overflow: hidden;

  &.xxs {
    @include dimensions(24);
  }
  &.xs {
    @include dimensions(30);
  }
  &.s {
    @include dimensions(36);
  }
  &.m {
    @include dimensions(48);
  }
  &.l {
    @include dimensions(64);
  }
  &.xl {
    @include dimensions(72);
  }
  &.xxl {
    @include dimensions(86);
  }
  &.border {
    &.light {
      border: 2px solid $steel;
    }
    &.dark {
      border: 2px solid $steel;
    }
    &.premium {
      border: 2px solid #958ce4;
    }
  }
}
</style>
