<template>
  <div
    :class="['navigation-menu', theme, {'wide-screen': !isSmallScreenMode, 'small-screen': isSmallScreenMode, 'responsiveNavOpen':isResponsiveNavOpen}]"
  >
    <div
      :class="['navigation-menu-body-wrapper', theme, {'wide-screen': !isSmallScreenMode, 'small-screen': isSmallScreenMode,'responsiveNavOpen':isResponsiveNavOpen}]"
    >
      <a
        v-if="isSmallScreenMode && isResponsiveNavOpen || !isSmallScreenMode"
        :class="['navigation-menu-item', {'active': active}]"
        v-for="item in list"
        :key="item.id"
        :href="item.path"
        @click="clicked(item.path)"
      >
        <slot class="navigation-menu-label">{{item.label}}</slot>
      </a>
    </div>
    <div v-if="isSmallScreenMode" class="navigation-menu-icon-wrapper">
      <div v-if="!isResponsiveNavOpen" class="navigation-menu-burger" @click="switchNav">
        <svg :class="[theme]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18">
          <g
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="square"
            stroke-width="1.5"
            transform="translate(0)"
          >
            <path d="M0 1L18 1M0 9L13 9M0 17L22 17" />
          </g>
        </svg>
      </div>
      <div v-else-if="isResponsiveNavOpen" class="back" @click="switchNav">
        <svg
          :class="[theme]"
          viewPort="0 0 12 12"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="1" y1="15" x2="15" y2="1" stroke-width="1.5" />
          <line x1="1" y1="1" x2="15" y2="15" stroke-width="1.5" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
// import Foo from 'bar/foo'

export default {
  name: "navigation-menu",
  mixins: [],
  components: {},

  props: {
    theme: {
      type: String,
      validator: value => {
        console.log("valid", value);
        return ["dark", "premium"].includes(value);
      }
    },
    isSmallScreenMode: { type: Boolean, default: false },
    list: { type: Array }
  },
  data() {
    return {
      active: false,
      isResponsiveNavOpen: false
    };
  },
  computed: {},
  methods: {
    clicked(id) {
      this.$emit("id");
    },
    switchNav() {
      this.isResponsiveNavOpen = !this.isResponsiveNavOpen;
    }
  },
  watch: {},
  beforeCreated() {},
  created() {
    console.log("//", this);
  },
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

.navigation-menu {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
  max-width: 100%;
  margin-left: 0;
  padding: 0;
  font-family: $font-family;
  font-size: $font-size-s;

  &.responsiveNavOpen {
    position: absolute;
    top: 8px;
    height: 100vh;
    align-self: flex-start;
    align-items: flex-start;
    justify-content: flex-end;
    flex-flow: column-reverse;
    background-color: $white;
    position: absolute;
    z-index: 3;
    left: 0;

    &.dark {
      background-color: #371d92;
      color: $white;
    }
    &.premium {
      background-color: $color-premium;
      color: $white;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
  }
}
.navigation-menu-body-wrapper {
  display: flex;
  flex-flow: row nowrap;
  width: 95%;
  max-width: 95%;
  margin-left: 0;
  padding: 0;
  font-family: $font-family;
  font-size: $font-size-s;

  &.responsiveNavOpen {
    display: flex;
    flex-direction: column;
    align-self: center;
    // margin-top: $height-navbar;
    padding-top: $space-l;
    border-top: 1px solid $charcoal-grey;

    &.dark {
      border-top: 1px solid $white;
      color: $white;
    }
    &.premium {
      border-top: 1px solid $white;
    }
  }

  &.dark {
    background-color: #371d92;
    color: $white;
  }
  &.premium {
    background-color: $color-premium;
    color: $white;
  }
  .navigation-menu-item {
    display: flex;
    height: 100%;
    padding: $space-xs;
    &.responsiveNavOpen {
      width: 0;
    }
    .navigation-menu-label {
      font-weight: $normal;
      cursor: pointer;

      &.active {
        font-weight: $semibold;
      }
    }
  }
}
.navigation-menu-icon-wrapper {
  display: flex;
  width: 22px;
  margin: 5px;
  z-index: 3;
  cursor: pointer;
  align-self: flex-end;

  svg {
    max-width: 22px;
    max-height: 22px;
    height: 100%;
    stroke: lightgrey;

    &.dark {
      stroke: $white;
    }
    &.premium {
      stroke: $white;
    }
  }
}
.back {
  display: border-box;
  padding: $space-l 0 $space-l 0;
  margin-left: -$space-xl;
}
</style>