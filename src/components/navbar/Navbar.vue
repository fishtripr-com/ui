<template>
  <div class="navbar">
    <div class="container">
      <div class="content">
        <div class="image-wrapper">
          <img class="image" :src="logo" alt="Fishtripr logo" />
        </div>
        <div class="body-wrapper">
          <slot name="body"></slot>
        </div>
      </div>
      <div class="action-wrapper">
        <slot name="action"></slot>
      </div>
    </div>
  </div>
</template>

<script>
// import Foo from 'bar/foo'

export default {
  name: "navbar",
  mixins: [],
  components: {},
  props: {
    logo: { type: String }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  watch: {},
  beforeCreated() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {}
};
</script>

<style lang='scss' scoped>
@import "../../assets/style/main";

.navbar {
  display: flex;
  box-sizing: border-box;

  background-color: #371d92;
  width: 100%;
  height: $height-navbar;
  margin: 0;
  padding: 0;

  .container {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    height: 100%;
    max-height: 100%;
    width: 100%;
    margin: 0 $space-m 0 $space-m;
    justify-content: space-between;

    .content {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      height: 100%;
      max-height: 100%;

      .image-wrapper {
        display: flex;
        align-items: center;
        cursor: pointer;

        .image {
          height: 30px;
        }
      }

      .body-wrapper {
        height: 60%;
        margin-left: $space-l;
        padding: 0 $space-l;
        border-left: 1px solid #898ea2;
      }
    }
  }
  .action-wrapper {
  }
}
</style>