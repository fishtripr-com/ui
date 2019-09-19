<template>
  <div class="insight-graph">
    <div v-for="(item, i) in data" :key="item.label" class="column-wrapper">
      <div
        :class="`column ${columnHeight(item.value) === 0 ? 'grey' : ''}`"
        :style="{ height: `${columnHeight(item.value)}%` }"
      />

      <div
        :class="
          `label ${isCurrent(i) ? 'bold' : ''} ${
            isSmallOrDown ? 'txt-6' : 'txt-4'
          }`
        "
      >
        {{ item.label.slice(0, 3) }}
      </div>
    </div>
  </div>
</template>

<script>
import { responsiveHandler } from '../../mixins/responsiveHandler'

export default {
  name: 'insight-graph',
  mixins: [responsiveHandler],
  props: {
    data: { type: Array },
    indexOfCurrentItem: { type: Number, default: 0 },
  },
  computed: {
    maxValue() {
      return Math.max(...this.data.map(item => item.value))
    },
  },
  methods: {
    isCurrent(index) {
      return index === this.indexOfCurrentItem
    },
    columnHeight(value) {
      return (100 * value) / this.maxValue
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/index';
@import '../../assets/style/default';

.insight-graph {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  .column-wrapper {
    display: flex;
    flex-flow: column nowrap;
    width: 8%;
    height: 200px;
    align-items: center;
    justify-content: flex-end;

    @media #{$small-and-down} {
      height: 150px;
    }

    .column {
      min-height: 5px;
      width: 30%;
      background-image: linear-gradient(#aaa2fb, #4e45b9);
      margin-bottom: map-get($spacers, 3);

      &.grey {
        background-image: linear-gradient(
          map-get($colors, 'text-light'),
          map-get($colors, 'text-light')
        );
      }

      @media #{$small-and-down} {
        width: 50%;
      }
    }
  }
}
</style>
