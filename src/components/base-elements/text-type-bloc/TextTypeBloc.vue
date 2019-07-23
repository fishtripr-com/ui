<template functionnal>
  <div class="experience-type">

    <div 
      :class="[
        'body',
        { 'dark': dark }
      ]"
      >

      <i 
        class="text-type"
        :class="className"
        >
        {{ textLeft }}
      </i>

      <span class="separator">{{ separator }}</span>

      <i class="text">
        {{ textRight }}
      </i>

    </div>

  </div>
</template>

<script>
export default {
  name: "experience-type",
  props: {
    className: { 
      type: String, 
      default: '' ,
      validator: value => {
        return ['guide_hosting', 'guide', 'hosting', 'fishery', 'outfitter'].includes(value)
      }
    },
    textType: { type: String, default: '' },
    text: { type: String, default: '' },
    separator: { type: String, default: '•' },
    uppercase: { type: Boolean, default: false },
    dark: { type: Boolean, default: false }
  },
  computed: {
    textLeft() {
      return this.uppercase ? this.textType.toUpperCase() : this.textType
    },
    textRight() {
      return this.uppercase ? this.text.toUpperCase() : this.text
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/index';

.experience-type {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: $space-m;
  text-align: left;
  font-size:$font-size-xs;
  font-weight: $semibold;
  
  .body { 
    display: flex;
    color: $color-text-light;

    &.dark {
      color: $color-text-dark;
    }

    .text-type {

      &.guide_hosting { color: $tag-guideNHost }
      &.guide { color: $tag-guide }
      &.hosting { color: $tag-host }
      &.fishery { color: $tag-fishery }
      &.outfitter { color: #56D2AB }
    }

    .separator {
      margin: 0 3px;
    }

  }
}
</style>


 



