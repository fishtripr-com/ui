<template>
  <header class="mobile-dashboard-header">
    <p>{{ this.formatNumber() }}</p>
    <span>{{ text }}</span>
  </header>
</template>

<script>
export default {
  name: "mobile-dashboard-header",
  props: {
    text: { type: String, default: "" },
    revenue: { type: Number, default: 0 },
    currency: { type: String, default: "EUR" }
  },
  methods: {
    currencySymbol() {
      const currency_symbols = {
        USD: "$", // US Dollar
        EUR: "€", // Euro
        CRC: "₡", // Costa Rican Colón
        GBP: "£", // British Pound Sterling
        ILS: "₪", // Israeli New Sheqel
        INR: "₹", // Indian Rupee
        JPY: "¥", // Japanese Yen
        KRW: "₩", // South Korean Won
        NGN: "₦", // Nigerian Naira
        PHP: "₱", // Philippine Peso
        PLN: "zł", // Polish Zloty
        PYG: "₲", // Paraguayan Guarani
        THB: "฿", // Thai Baht
        UAH: "₴", // Ukrainian Hryvnia
        VND: "₫" // Vietnamese Dong
      };

      if (currency_symbols[this.currency] !== undefined) {
        return currency_symbols[this.currency];
      }
    },
    formatNumber() {
      return (
        this.currencySymbol() +
        this.revenue.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
      );
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/main";

.mobile-dashboard-header {
  display: flex;
  flex-flow: column;
  font-family: $font-family;
  font-size: $font-size-xs;
  font-weight: $normal;
  color: $charcoal-grey;
}

p {
  margin: 0 0 $space-xxxs 0;
  font-size: $font-size-l;
  font-weight: $bold;
}
</style>
