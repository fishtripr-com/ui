<template>
  <div :class="['navbar', theme]">
    <div class="container">
      <!-- <div class="content"> -->
      <div :class="['image-wrapper', theme]">
        <img class="image" :src="navLogo" alt="logo" @click="goHome" />
      </div>
      <div
        class="body-wrapper"
        :class="[theme, {'isSmallScreenMode':isSmallScreenMode}]"
        :isSmallScreenMode="isSmallScreenMode"
      >
        <slot name="body"></slot>
        <!-- </div> -->
      </div>
      <div class="action-wrapper" :isSmallScreenMode="isSmallScreenMode">
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
    theme: {
      type: String,
      validator: value => {
        console.log("valid navbar", value);
        return ["dark", "premium", "light"].includes(value);
      }
    },
    logo: { type: String },
    isSmallScreenMode: { type: Boolean, default: true }
  },
  data() {
    return {};
  },
  computed: {
    navLogo() {
      return this.theme === "dark" || this.theme === "premium"
        ? "https://picsum.photos/200/400"
        : "https://picsum.photos/400/200";
    }
  },
  methods: {
    goHome() {
      this.$emit("home");
    }
  },
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
  background-color: #ffff;
  width: 100%;
  height: $height-navbar;
  margin: 0;
  padding: 0;

  &.dark {
    background-color: #371d92;
    color: $white;
  }

  &.premium {
    background-color: $color-premium;
    color: $white;
  }

  .container {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    height: 100%;
    max-height: 100%;
    width: 100%;
    margin: 0 $space-m 0 $space-m;
    justify-content: space-between;

    // .content {
    //   display: flex;
    //   flex-flow: row nowrap;
    //   align-items: center;
    //   height: 100%;
    //   max-height: 100%;
    //   width: 100%;

    .image-wrapper {
      display: flex;
      align-items: center;
      cursor: pointer;
      z-index: 4;

      .image {
        height: 30px;
      }
      // }
    }
    .body-wrapper {
      display: flex;
      width: 100%;
      height: 60%;
      // align-self: flex-end;
      align-items: flex-start;
      margin-left: $space-l;
      padding: 0 0 0 $space-l;
      border-left: 1px solid #371d92;

      &.isSmallScreenMode {
        align-items: center;
      }
      &.dark {
        border-left: 1px solid $white;
      }

      // &.small-screen {
      //   display: flex;
      //   align-items: flex-start;
      // }
    }
  }
  .avatar-container {
  }
}
</style>