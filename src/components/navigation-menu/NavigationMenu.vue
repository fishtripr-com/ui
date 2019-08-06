<template>
  <div class="navigation-menu">
    <div
      :class="['navigation-menu-body-wrapper', theme, {'wide-screen': !isSmallScreenMode, 'small-screen': isSmallScreenMode, 'responsiveNavClosed':isResponsiveNavOpen}]"
    >
      <router-link
        v-if="!isResponsiveNavOpen"
        :class="['navigation-menu-item', {'active': active}]"
        v-for="item in list"
        :key="item.id"
        :to="{ name: item.path }"
        @click="clicked(item.path)"
      >
        <p class="navigation-menu-label">{{item.label}}</p>
      </router-link>
    </div>
    <div v-if="isSmallScreenMode" class="navigation-menu-icon-wrapper">
      <div v-if="isResponsiveNavOpen" class="navigation-menu-burger" @click="switchNav">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18">
          <g
            fill="none"
            fill-rule="evenodd"
            stroke="#353745"
            stroke-linecap="square"
            stroke-width="1.5"
            transform="translate(0)"
          >
            <path d="M0 1L18 1M0 9L13 9M0 17L22 17" />
          </g>
        </svg>
      </div>
      <div v-if="!isResponsiveNavOpen" class="back" @click="switchNav">
        <p class="back" icon="cross" :width="15" :height="15" :color="colorIcon">X</p>
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
  .navigation-menu-body-wrapper {
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    max-width: 98%;
    margin-left: 0;
    padding: 0;
    font-family: $font-family;
    font-size: $font-size-s;

    &.dark {
      background-color: #371d92;
      color: $white;
    }

    &.premium {
      background-color: $color-premium;
      color: $white;
    }

    &.small-screen {
      display: flex;
      flex-direction: column;
      padding: $space-l 0;
      margin-top: $height-navbar;
      border-top: 1px solid #898ea2;
      border-left: 0;

      &.responsiveNavClosed {
        border-top: 0;
      }
    }

    .navigation-menu-item {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 $space-xs;

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
    position: absolute;
    right: 2%;
    top: $space-l;
    width: 22px;
    margin: 5px;
    z-index: 3;

    .navigation-menu-burger {
      cursor: pointer;

      svg {
        max-width: 22px;
        max-height: 22px;
        height: 100%;
      }
    }
    .back {
      max-width: 22px;
      max-height: 22px;
      height: 100%;
      cursor: pointer;
    }
  }
}
</style>