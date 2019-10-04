<template>
  <div class="offer-preview flx-c b p-6">
    <short-experience-preview
      :is-loading="isExperienceLoading"
      :title="experienceTitle"
      :country="experienceCountry"
      :city="experienceCity"
      :image="experienceCover"
      :average-rating="experienceAverageRating"
    />

    <status
      v-if="!noStatus"
      class="bt pt-8 mt-8"
      :data="offerStatuses"
      :actual-status="offerStatusLevel"
    />

    <div v-if="offerStatusText" class="details flx-c bt mt-8">
      <div v-if="offerStatusText && offerStatusType" class="row status pt-8">
        <p class="txt-4">
          Offer status
        </p>
        <p class="txt-4 bold" :class="offerStatusType">
          {{ offerStatusText }}
        </p>
      </div>

      <div v-if="offerDateString" class="row dates pt-5">
        <p class="txt-4">
          Dates
        </p>
        <p class="txt-4 semibold">
          {{ offerDateString }}
        </p>
      </div>

      <div v-if="offerGuestsString" class="row guests pt-5">
        <p class="txt-4">
          Guests
        </p>
        <p class="txt-4 semibold">
          {{ offerGuestsString }}
        </p>
      </div>

      <div v-if="offerTotalPriceString" class="row total pt-5">
        <p class="txt-4">Total ({{ offerCurrency }})</p>
        <p class="txt-4 semibold">
          {{ `${offerCurrencySymbol}${offerTotalPriceString}` }}
        </p>
      </div>

      <div v-if="offerDueNowString" class="row pt-8 mt-8 bt">
        <p class="txt-4 semibold">Due now ({{ offerCurrency }})</p>
        <p class="txt-4 semibold">
          {{ `${offerCurrencySymbol}${offerDueNowString}` }}
        </p>
      </div>

      <div v-if="offerDueOnDateString" class="row pt-5">
        <p class="txt-4">Due on {{ offerDueOnDateString }}</p>
        <p class="txt-4">
          {{ `${offerCurrencySymbol}${offerDueOnValueString}` }}
        </p>
      </div>

      <div class="policy mt-8 pt-8 bt" v-if="true">
        <p class="txt-5">
          {{ extraText }}
        </p>
      </div>
    </div>

    <div class="call-to-actions flx-c mt-8">
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
    noStatus: { type: Boolean, default: false },
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
  box-sizing: border-box;

  .details {
    .row {
      display: flex;
      justify-content: space-between;
    }
  }

  .call-to-actions {
    // align-items: flex-start;
  }
}
</style>
