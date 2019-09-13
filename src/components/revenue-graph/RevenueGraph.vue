<template>
  <div class="revenue-graph">
    <div v-for="month in revenue" :key="month.month" class="wrapper">
      <div
        class="bar" :style="{height: `${barHeight(month.revenue)}%`}"
      ></div>
      <div :class="['month', month.month === currentMonth() ? 'current' : '']">{{month.month}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "revenue-graph",
  mixins: [],
  props: {
    revenue: { type: Array },
    currency: { type: String, default: "EUR" },
    multiplication: { type: Number, default: 1 }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    currentMonth() {
      let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      let now = new Date();
      let thisMonth = months[now.getMonth()];
      return thisMonth;
    },
    barHeight(monthly) {
      let maxRevenue = Math.max.apply(
        Math,
        this.revenue.map(function(obj) {
          return obj.revenue;
        })
      );
      let monthlyIndex = (100 * monthly) / maxRevenue;
      return monthlyIndex === 0 ? 1 : monthlyIndex;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/index";

.revenue-graph {
  display: flex;
  flex-flow: row nowrap;
  font-family: $font-family;

  .wrapper {
    display: flex;
    flex-flow: column nowrap;
    color: $color-text;
    width: 8%;
    height: 200px;
    align-items: center;
    justify-content: flex-end;
    margin-right: $space-xxs;

    .bar {
      width: 50%;
      background-image: linear-gradient(#aaa2fb, #4e45b9);
      margin-bottom: $space-xxs;
    }
    .month {
      font-size: $font-size-m;

      @media #{$small-and-down} {
        font-size: $font-size-xs;
      }

      &.current {
        font-weight: $bold;
      }
    }
  }
}
</style>
