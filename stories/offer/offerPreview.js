import { storiesOf } from '@storybook/vue'

import data from '../_utils/mockData'

storiesOf('Offer/Offer preview', module).add('Default', () => ({
  data() {
    return {
      experience: data.experience,
      title: data.offer.title,
      image: data.offer.image,
      hat: data.offer.hat,
      status: data.offer.status,
    }
  },
  template: `
    <offer-preview
      :is-experience-loading="false"
      :experience-title="experience.title"
      :experience-country="experience.country"
      :experience-city="experience.city"
      :experience-cover="experience.cover"
      :experience-average-rating="experience.reviews_average"
      :offer-is-loading="false"
      :offerStatusLevel="3"
      offerStatusText="Accepted"
      offerStatusType="success"
      offerDateString="Oct 11, 2020"
      offerGuestsString="2 guests"
      offerCurrency="GBP"
      offerCurrencySymbol="$"
      offerTotalPriceString="230.00"
      offerDueNowString="30.00"
      offerDueOnDateString="Oct 11, 2020"
      offerDueOnValueString="200.00"
      extraText="Cancel within 48 hours to get a full refound"
      :isCTALoading="false"
      CTALabel="Continue Conversation"
      :isExtraCTALoading="false"
      extraCTALabel="Or send another offer"
      />
    `,
}))
