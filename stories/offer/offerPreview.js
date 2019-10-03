import { storiesOf } from '@storybook/vue'

import data from '../_utils/mockData'

storiesOf('Offer/Offer preview', module)
.add('Default', () => ({
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
      CTALabel="Send an offer"
      extraCTALabel="Or send another offer"
      />
    `,
  })
)
