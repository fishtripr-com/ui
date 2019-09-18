import { storiesOf } from '@storybook/vue'

import data from '../_utils/mockData'

storiesOf('Offer/Offer card', module)
.add(
  'Default',
  () => ({
    data() {
      return {
        title: data.offer.title,
        image: data.offer.image,
        hat: data.offer.hat,
        status: data.offer.status
      }
    },
    template: `<div style="width:100%;">
      <offer-card
          :image="image"
          :title="title"
          :hat="hat"
          :status="status"
          mode="warning"
        />
    </div>`
  })
)
