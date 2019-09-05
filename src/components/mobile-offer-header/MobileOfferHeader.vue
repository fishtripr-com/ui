<template>
  <div class="mobile-offer-header">
    <span>{{ text.toUpperCase() }}</span>
    <div class="wrapper">
      <p>{{ userName.charAt(0).toUpperCase() + userName.slice(1) }} &nbsp;</p>
      <p>{{ userSurname.charAt(0) }}.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "mobile-offer-header",
  props: {
    text: { type: String, default: "" },
    userName: { type: String, default: "" },
    userSurname: { type: String, default: "" }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/main";

.mobile-offer-header {
  display: flex;
  flex-flow: column;
  font-family: "Montserrat", sans-serif !important;
  font-size: $font-size-xs;
  font-weight: $semibold;
  color: $watermelon;

  .wrapper {
    display: flex;
    flex-direction: row;
    font-size: $font-size-xl;
    font-weight: $bold;
    color: $charcoal-grey;
    margin-top: $space-xxs;
  }

  p {
    margin: 0;
  }
}
</style>