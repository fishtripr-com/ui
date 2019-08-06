<template>
  <div :class="['navbar', theme]">
    <div class="container">
      <div class="content">
        <div :class="['image-wrapper', theme]">
          <img class="image" :src="navLogo" alt="logo" @click="goHome" />
        </div>
        <div class="body-wrapper">
          <slot v-if="isMounted" name="body" theme="test">{{theme}}</slot>
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
    theme: {
      type: String,
      validator: value => {
        console.log("valid navbar", value);
        return ["dark", "premium", "light"].includes(value);
      }
    },
    logo: { type: String }
  },
  data() {
    return {
      isMounted: false
    };
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
  created() {
    console.log("created hook", this.$slots);
  },
  beforeMount() {},
  mounted() {
    this.isMounted = true;
  },
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
  .avatar-container {
  }
}
</style>