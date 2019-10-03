<template>
  <loader v-if="isLoading" :mode="premium ? 'premium' : 'primary'" />
  <div v-else class="experience-short-preview">
    <div class="info">
      <p
        class="title txt-3 semibold"
        :class="{ clickable: isListed && !custom }"
        @click.native="experienceClicked"
      >
        {{ titleToShow }}
      </p>

      <span class="txt-6 light">
        {{ `${country}${city && ', ' + city}` }}
      </span>

      <el-rate
        :value="averageRating"
        disabled
        show-score
        text-color="#353745"
        class="custom2"
      />
    </div>

    <div class="image-container">
      <img class="image" :src="cover" :alt="title" />
    </div>
  </div>
</template>

<script>
import { IMG } from '@fishtripr/constants'
import { Rate } from 'element-ui'
import Loader from '../../loaders/DefaultLoader'

export default {
  name: 'experience-short-preview',
  components: {
    'el-rate': Rate,
    Loader,
  },
  props: {
    title: { type: String, required: true },
    image: { type: String, required: true },
    country: { type: String, default: '' },
    city: { type: String, default: '' },
    isListed: { type: Boolean, default: false },
    custom: { type: Boolean, default: false },
    isLoading: { type: Boolean, default: false },
    premium: { type: Boolean, default: false },
    averageRating: { type: Number, default: 0 },
  },
  computed: {
    titleToShow() {
      return this.title.length > 20
        ? this.title.slice(0, 20).trim() + '...'
        : this.title
    },
    cover() {
      return this.custom ? IMG.ILLU.CUSTOM_OFFER : this.image
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/default';
@import '../../../../node_modules/element-ui/lib/theme-chalk/index.css';

.experience-short-preview {
  display: flex;
  align-items: flex-start;

  .info {
    padding-right: map-get($spacers, '8');
    flex: 1;

    .title {
      &.clickable:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }

    .el-rate {
      margin-top: 2px;
    }
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
