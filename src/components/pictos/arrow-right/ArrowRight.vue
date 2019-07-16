<template>
  <div>
    <svg
      class="arrow-right"
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 8 20"
    >
      <polyline
        fill="none"
        :stroke="color"
        stroke-linecap="square"
        points="0 0 6 10 0 20"
        transform="translate(1)"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "arrow-right",
  props: {
    width: {
      type: String,
      default: "8px"
    },
    height: {
      type: String,
      default: "20px"
    },
    color: { type: String, default: "#56D2AB" }
  }
};
</script>