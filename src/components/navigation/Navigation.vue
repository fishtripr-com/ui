<template>
  <nav
    :class="['navigation', theme, deviceSize < deviceSizes.l ? 'mobile' : '']"
  >
    <ul class="wrapper">
      <li class="item" v-for="item in items" :key="item.id">
        <a class="link" :href="item.path" @click.prevent="onClicked(item.id)">
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { responsiveHandler } from '../../mixins/responsiveHandler'

export default {
  name: 'navigation',
  mixins: [responsiveHandler],
  props: {
    items: { type: Array, required: true },
    theme: {
      type: String,
      default: 'light',
      validator: value => ['light', 'dark', 'premium'].includes(value),
    },
  },
  methods: {
    onClicked(id) {
      this.$emit('itemClicked', id)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/main';

.navigation {
  .wrapper {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;

    .item {
      .link {
        display: block;
        text-decoration: none;
        padding: 10px 15px;
        color: inherit;
        font-family: $font-family;
        font-size: 12px;
      }
    }
  }

  &.mobile .wrapper {
    flex-direction: column;
    padding: $space-l 0 0 $space-m;
  }

  &.light {
    background-color: $color-background-light;
    color: black;
  }
  &.dark {
    background-color: $color-background-dark;
    color: white;
  }
  &.premium {
    background-color: $color-background-premium;
    color: white;
  }
}
</style>
