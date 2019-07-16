<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 31 31">
    <g
      fill="none"
      fill-rule="evenodd"
      :stroke="color"
      stroke-linecap="square"
      stroke-width="2"
      transform="translate(1 1)"
    >
      <polyline points="29 10.545 29 29 0 29 0 10.545" />
      <rect width="29" height="7.909" y="2.636" />
      <path
        d="M14.5 0L14.5 5.27272727M6.59090909 0L6.59090909 5.27272727M22.4090909 0L22.4090909 5.27272727"
      />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      default: "20px"
    },
    height: {
      default: "20px"
    },
    color: {
      default: "#53D7AD"
    }
  }
};
</script>