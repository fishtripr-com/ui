<template>
  <div class="marketing-thumbs-card">
    <div class="img">
      <img :src="imageURL" :alt="title + ' image'" />
    </div>
    <div class="marketing-thumbs-card-content">
      <p  class="title">{{ title }}</p>
      <p class="text">{{ text }}</p>
    </div>
  </div>
</template>

<script>
import { IMG } from "@fishtripr/constants";

export default {
  name: "marketing-thumbs-card",
  props: {
    imageURL: {
      type: String,
      required: true,
      default: IMG.LOGO.FISHTRIPR.FISH_ONLY_BLACK
    },
    title: { type: String, required: true, default: "" },
    text: { type: String, required: true, default: "" }
  }
};
</script>

<style lang='scss' scoped>
@import "../../../assets/style/main";

.marketing-thumbs-card {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        max-width: 255px;

        img {
          width: 80px;
          height: 80px; 

          @media #{$small-and-down} {
            width: 50px;
            height: 50px;
          }
        }

        .title {
          font-family: $font-family;
          font-weight: $bold;
          font-size: $font-size-xl;
        }

        .text {
          font-family: $font-family;
          font-size: $font-size-s;
        }

        @media #{$small-and-down} {
          margin-bottom: $space-xl;
          flex-direction: row;
          max-width: none;
        }

        > svg {
          @media #{$small-and-down} {
            margin-right: $space-m;
          }
        }

        .marketing-thumbs-card-content {

          @media #{$small-and-down} {
            max-width: 300px;
            padding-left: 10px;
          }

          .title {
            margin: $space-l 0 $space-s 0;

            @media #{$small-and-down} {
              margin: 0 0 $space-s 0;
            }
          }
        }
}

</style>
