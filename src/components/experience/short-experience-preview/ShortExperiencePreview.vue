<template>
  <div class="experience-short-preview">

    <div class="info">

      <p
        class="title txt-3 bold"
        :class="{ 'clickable': isListed && !custom }"
        @click.native='experienceClicked'
        >
        {{ titleToShow }}
      </p>

      <span class="txt-5">
        {{ country }}
      </span>

      <el-rate
        :value="averageRating || 0"
        disabled
        show-score
        text-color='#353745'
        class='custom2'
        />

    </div>

    <div class="image-container">
      <img
        class="image"
        :src='cover'
        :alt="title"
      />
    </div>

  </div>
</template>

<script>
import { IMG } from '@fishtripr/constants'
import { Rate } from 'element-ui';

export default {
  name: 'experience-short-preview',
  components: {
    'el-rate': Rate
  },
  props: {
    title: { type: String, required: true },
    image: { type: String, required: true },
    country: { type: String, default: '' },
    isListed: { type: Boolean, default: false },
    custom: { type: Boolean, default: false }
  },
  computed: {
    titleToShow() {
      return this.title.length > 20 ? this.title.slice(0, 20).trim() + '...' : this.title
    },
    cover() {
      return this.custom ? IMG.ILLU.CUSTOM_OFFER : this.image
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/style/default";
@import '../../../../node_modules/element-ui/lib/theme-chalk/index.css';

.experience-short-preview {
  display: flex;
  align-items: flex-start;

  .info {
    padding-right: map-get($spacers, "8");
    flex: 1;

    .title {
      &.clickable:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }

    .el-rate { margin-top: 10px }
  }

  .image-container {
    width: 100px;
    min-width: 100px;
    max-width: 100px;
    height: 60px;
    min-height: 60px;
    max-height: 60px;

    .image {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>
