<template>
  <div class="employee-card">
    <h4 class="first-name">{{ firstName }}</h4>
    <h4 class="last-name">{{ lastName }}</h4>
    <p class="role">{{ role }}</p>
  </div>
</template>

<script>
export default {
  name: 'employee-card',
  props: {
    firstName: { type: String, default: '' },
    lastName: { type: String, default: '' },
    role: { type: String, default: '' },
  },
}
</script>

<style lang="scss" scoped>
.employee-card {
  font-family: 'Montserrat', sans-serif !important;

  .first-name,
  .last-name {
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.7rem;
    margin: 0;
  }

  .role {
    font-weight: 400;
    font-size: 0.65rem;
    line-height: 1.15rem;
    margin: 0;
  }
}
</style>
