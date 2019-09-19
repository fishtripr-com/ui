<template>
  <div class="marketing-thumbs">
    <div class="image-container">
      <img class="image" :src="image" :alt="`${title} image`" />
    </div>

    <div class="content">
      <h4 class="title">{{ title }}</h4>
      <p class="text">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'marketing-thumbs',
  props: {
    image: { type: String, required: true },
    title: { type: String, required: true },
    text: { type: String, required: true },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/main';

.marketing-thumbs {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-width: 255px;

  @media #{$small-and-down} {
    margin-bottom: $space-xl;
    flex-direction: row;
    max-width: none;
  }

  .image-container {
    width: 65px;
    min-width: 65px;
    height: 65px;
    min-height: 65px;

    @media #{$small-and-down} {
      margin-right: 10px;
    }

    .image {
      width: 100%;
      object-fit: contain;
    }
  }

  .content {
    @media #{$small-and-down} {
      max-width: 300px;
    }

    .title {
      font-family: $font-family;
      font-weight: $bold;
      font-size: $font-size-xl;
      margin: 15px 0;

      @media #{$small-and-down} {
        margin: 0 0 10px 0;
      }
    }

    .text {
      font-family: $font-family;
      font-size: $font-size-s;
      margin: 0;
    }
  }
}
</style>
