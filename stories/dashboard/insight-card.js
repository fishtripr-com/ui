import { storiesOf } from '@storybook/vue'

storiesOf('Dashboard/Inisght Card', module)
.add(
  'Default',
  () => ({
    template: `<insight-card
      main-data="€23,058.00"
      main-description="Total revenue"
    />`
  })
)
.add(
  'With star & additionnal description',
  () => ({
    template: `<insight-card
      main-data="5,0"
      main-description="Global evaluation"
      additionnal-description="Compare to others hosts - 4,6"
      with-star
    />`
  })
)
