<template>
  <div class="offer-preview">
    <short-experience-preview
      :is-loading="isExperienceLoading"
      :title="experienceTitle"
      :country="experienceCountry"
      :city="experienceCity"
      :image="experienceCover"
      :average-rating="experienceAverageRating"
    />

    <status :data="offerStatuses" :actual-status="offerStatusLevel" />

    <div class="details">
      <div v-if="offerStatusText && offerStatusType" class="row status">
        <p class="txt-4">
          Offer status
        </p>
        <p class="txt-4 bold" :class="offerStatusType">
          {{ offerStatusType }}
        </p>
      </div>

      <div v-if="offerDateString" class="row dates">
        <p class="txt-4">
          Dates
        </p>
        <p class="txt-4">
          {{ offerDateString }}
        </p>
      </div>

      <div v-if="offerGuestsString" class="row guests">
        <p class="txt-4">
          Guests
        </p>
        <p class="txt-4">
          {{ offerGuestsString }}
        </p>
      </div>

      <div v-if="offerTotalPriceString" class="row total pb-6">
        <p class="txt-4">Total ({{ offerCurrencySymbol }})</p>
        <p class="txt-4">
          {{ `${offerCurrencySymbol}${offerTotalPriceString}` }}
        </p>
      </div>

      <div v-if="offerDueNowString" class="row last">
        <p class="txt-4 bold">Due now ({{ offerCurrency }})</p>
        <p class="txt-4 bold">
          {{ `${offerCurrencySymbol}${offerDueNowString}` }}
        </p>
      </div>

      <div class="policy" v-if="true">
        <p class="txt-4 my-8">
          Cancel within 24 hours of booking to get a full refund by contacting
          <a href="mailto:help@fishtripr.com" class="link-underlined">support</a
          >.
        </p>
      </div>
    </div>

    <div class="call-to-actions">
      <base-button
        :label="CTALabel"
        size="s"
        :is-loading="isCTALoading"
        @click="onCTAClicked"
      />
      <base-button
        v-if="true"
        :label="extraCTALabel"
        size="xs"
        :is-loading="isExtraCTALoading"
        type="text"
        @click="onExtraCTAClicked"
      />
    </div>
  </div>
</template>

<script>
import ShortExperiencePreviw from '../../experience/short-experience-preview/ShortExperiencePreview'
import Status from '../../ui/status'
import BaseButton from '../../ui/BaseButton'

export default {
  name: 'offer-preview',
  components: {
    ShortExperiencePreviw,
    Status,
    BaseButton,
  },
  props: {
    isExperienceLoading: { type: Boolean, default: false },
    experienceTitle: { type: String, default: '' },
    experienceCountry: { type: String, default: '' },
    experienceCity: { type: String, default: '' },
    experienceCover: { type: String, default: '' },
    experienceAverageRating: { type: Number, default: 0 },
    offerIsLoading: { type: Boolean, default: false },
    offerStatusLevel: {
      type: Number,
      default: 0,
      validator: value => value >= 0 && value <= 4,
    },
    offerStatusText: { type: String, default: '' },
    offerStatusType: { type: String, default: 'default' },
    offerDateString: { type: String, default: '' },
    offerGuestsString: { type: String, default: '' },
    offerCurrency: { type: String, default: 'EUR' },
    offerCurrencySymbol: { type: String, default: '€' },
    offerTotalPriceString: { type: String, default: '' },
    offerDueNowString: { type: String, default: '' },
    offerDueOnDateString: { type: String, default: '' },
    offerDueOnValueString: { type: String, default: '' },
    extraText: { type: String, default: '' },
    isCTALoading: { type: Boolean, default: false },
    CTALabel: { type: String, default: '' },
    isExtraCTALoading: { type: Boolean, default: false },
    extraCTALabel: { type: String, default: '' },
  },
  data() {
    return {
      offerStatuses: [
        'Inquiry sent',
        'Offer created',
        'Offer accepted',
        'Offer paid',
      ],
    }
  },
  methods: {
    onCTAClicked() {
      this.$emit('CTAClicked')
    },
    onExtraCTAClicked() {
      this.$emit('extraCTAClicked')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/default';

.offer-preview {
  border: 1px solid map-get($colors, 'border');
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px;

  .details {
    display: flex;
    flex-direction: column;
    border-top: 1px solid map-get($colors, 'border');
    margin-top: map-get($spacers, 8);

    .row {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;

      &:first-child {
        margin-top: map-get($spacers, 8);
      }
      &:nth-child(4) {
        margin-bottom: map-get($spacers, 4);
      }

      &.last {
        border-top: 1px solid map-get($colors, 'border');
        border-bottom: 1px solid map-get($colors, 'border');
        padding: map-get($spacers, 8) 0;
        margin-top: 0;
      }
    }
  }
}
</style>
