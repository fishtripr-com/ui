<template>
  <div class="option-image">
    <div class="wrapper">
      <div class="image-container">
        <image-container :image="image" :height="100" />
      </div>

      <div class="header-container">
        <p class="title">{{ title }}</p>

        <p class="text">{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// import Foo from 'bar/foo'

export default {
  name: "option-image",
  mixins: [],
  components: {},
  props: {
    image: { type: String },
    title: { type: String, default: "" },
    text: { type: String, default: "" }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/index";

.option-image {
  display: flex;
  max-width: 700px;
  min-width: 335px;
  box-sizing: border-box;
  border: $border-card solid transparent;

  .wrapper {
    display: flex;
    min-height: 60px;
    flex-direction: row;
    width: 100%;
    padding: $space-m;
    border: 1px solid $color-border;

    .image-container {
      width: 35px;
      height: 35px;
    }

    .header-container {
      display: flex;
      align-items: center;
      padding-left: $space-s;

      .title {
        font-size: $font-size-s;
        font-weight: $semibold;
      }
    }

    .text {
      font-size: $font-size-s;
      font-weight: $normal;
      margin-left: $space-s;
    }
  }
}
</style>