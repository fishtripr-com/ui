<template>
  <div class="mobile-payment-link">
    <div class="header">
      <span class="headerText">Payment link</span>
      <span class="copyButton" @click.stop.prevent="copyLink">Copy</span>
    </div>
    <a class="link" :href="link">{{ link }}</a>
    <input type="hidden" id="linkToCopy" :value="link" />
  </div>
</template>

<script>
export default {
  name: "mobile-payment-link",
  props: {
    link: { type: String, default: "" }
  },
  methods: {
    copyLink() {
      let textToCopy = document.querySelector("#linkToCopy");
      textToCopy.setAttribute("type", "text");
      textToCopy.select();
      document.execCommand("copy");
      textToCopy.setAttribute("type", "hidden");
      window.getSelection().removeAllRanges();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/main";

.mobile-payment-link {
  display: flex;
  flex-direction: column;
  font-family: "Montserrat", sans-serif !important;
  font-size: $font-size-s;

  .header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin-bottom: $space-m;
    font-weight: $semibold;
    color: $color-text;

    .copyButton {
      color: $color-text-info;
    }
  }
}
</style>