<template>
  <div class="experience-listing-card">
    <div class="container">
      <div class="image">
        <img :src="image" />
      </div>

      <div class="body">
        <p
          v-if="deviceSize <= deviceSizes.s"
          :class="['listedStateText', isListed ? 'isListed' : '']"
        >
          {{ checkListed }}
        </p>

        <p class="title">{{ title }}</p>

        <p v-if="deviceSize > deviceSizes.s" class="country">
          {{ country }}
        </p>

        <div v-if="deviceSize <= deviceSizes.s" class="actions">
          <div class="listingAction">
            <a @click="actionItem">{{ actionOnItem }}</a>
          </div>

          <template>
            <div class="separator">&bull;</div>
            <div>
              <a @click="viewItem">View</a>
            </div>
          </template>
        </div>
      </div>

      <div class="actions-wrapper" v-if="deviceSize > deviceSizes.s">
        <div class="actions">
          <div class="listingAction">
            <a @click="editItem">edit</a>
          </div>
          <template v-if="isListed">
            <div class="separator">&bull;</div>
            <div class="listingAction">
              <a @click="viewItem">preview</a>
            </div>
          </template>
        </div>

        <div :class="['listedStateText', isListed ? 'isListed' : '']">
          <p>{{ checkListed }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { responsiveHandler } from '../../../mixins/responsiveHandler'

export default {
  name: 'experience-listing-card',
  mixins: [responsiveHandler],
  data() {
    return {
      listedStateText: '',
    }
  },
  props: {
    id: { type: String },
    image: { type: String },
    isListed: { type: Boolean },
    title: { type: String },
    country: { type: String },
  },
  computed: {
    checkListed() {
      return this.isListed
        ? (this.listedStateText = 'Listed')
        : (this.listedStateText = 'Unlisted')
    },
    actionOnItem() {
      return this.isListed ? 'Unlist' : 'List'
    },
  },
  methods: {
    viewItem() {
      this.$emit('view', this.id)
    },
    editItem() {
      this.$emit('edit', this.id)
    },
    actionItem() {
      this.$emit('list', this.id)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/main';

.experience-listing-card {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  border: $border-card solid transparent;
  font-family: 'Montserrat', sans-serif !important;

  .container {
    display: flex;
    width: 100%;
    padding: $space-l $space-xl;
    border: 1px solid $pale-grey;

    @media #{$medium-and-down} {
      flex-wrap: wrap;
    }
    @media #{$small-and-down} {
      padding: $space-xs $space-xs;
    }

    .image {
      width: 50px;
      min-width: 50px;
      max-height: 50px;
      border-radius: 100%;
      overflow: hidden;
      margin-right: $space-xl;

      @media #{$small-and-down} {
        width: 35%;
        height: 100%;
        min-height: 100%;
        border-radius: 0;
        margin-right: $space-s;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .body {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-right: $space-m;

      @media #{$medium-and-down} {
        min-width: 50%;
      }
      @media #{$small-and-down} {
        padding-right: 0;
      }

      .title {
        margin: $space-xs 0;
        font-weight: $semibold;
        font-size: $font-size-s;
      }
      .country {
        margin: 0 0 $space-xs 0;
        font-weight: $normal;
        font-size: $font-size-xs;
        color: $color-heading-light;
      }
      .listedStateText {
        margin: $space-xxxs 0 0 0;
        font-weight: $semibold;
        font-size: $font-size-xs;
        color: $color-text-light;

        &.isListed {
          color: $aqua-marine;
        }
      }
      .actions {
        margin: 0 0 $space-xxxs 0;
        display: flex;
        align-items: center;
        color: $color-link;
        font-weight: $normal;
        font-size: $font-size-xs;
      }

      .separator {
        margin: 0 $space-xxxs;
      }
    }

    .actions-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 200px;

      @media #{$medium-and-down} {
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        margin-top: $space-m;
      }

      .actions {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin: 0 0 $space-xxs 0;
        font-weight: $semibold;
        font-size: $font-size-s;
        color: $color-link;

        @media #{$medium-and-down} {
          order: 2;
        }

        .separator {
          margin: 0 $space-xxxs;
        }
        > div {
          cursor: pointer;
        }
      }

      .listedStateText {
        display: flex;
        justify-content: flex-end;
        margin: 0;
        font-weight: $semibold;
        font-size: $font-size-s;

        &.isListed {
          color: $aqua-marine;
        }

        @media #{$medium-and-down} {
          order: 1;
          margin: 0 0 0 $space-xxs;
        }
      }
    }
  }
}
</style>
