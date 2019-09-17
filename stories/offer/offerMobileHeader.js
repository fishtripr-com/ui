import { storiesOf } from '@storybook/vue'

storiesOf('Offer/Mobile header', module)
.add(
  'Default',
  () => ({
    template: `<mobile-offer-header
      text="offer to"
      first-name="john"
      last-name="Travolta"
    />`
  })
)
