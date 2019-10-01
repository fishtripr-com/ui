import { storiesOf } from '@storybook/vue'

import data from '../_utils/mockData/index'

const dataMixin = {
  data() {
    return {
      statuses: data.status,
      levels: [
        'level 1',
        'level 2',
        'level 3',
        'level 4',
        'level 5',
      ]
    }
  },
}

storiesOf('UI/Status/Levels', module)
.add(
  'Null (default)',
  () => ({
    mixins: [dataMixin],
    template: `<status
      :data="levels"
      :actual-status="0"
      />`,
  })
)
.add(
  'Level 3',
  () => ({
    mixins: [dataMixin],
    template: `<status
      :data="levels"
      :actual-status="3"
      />`,
  })
)
.add(
  'Level 4 premium',
  () => ({
    mixins: [dataMixin],
    template: `<status
      :data="levels"
      :actual-status="4"
      premium
      />`,
  })
)

storiesOf('UI/Status/Offer statuses', module)
.add(
  'No status yet',
  () => ({
    mixins: [dataMixin],
    template: `<status
      :data="statuses"
      />`,
  })
)
.add(
  'Inquiry sent',
  () => ({
    mixins: [dataMixin],
    template: `<status
      :data="statuses"
      :actual-status="1"
      />`,
  })
)
.add(
  'Offer created',
  () => ({
    mixins: [dataMixin],
    template: `<status
      :data="statuses"
      :actual-status="2"
      />`,
  })
)
.add(
  'Offer aceppted',
  () => ({
    mixins: [dataMixin],
    template: `<status
      :data="statuses"
      :actual-status="3"
      />`,
  })
)
.add(
  'Offer paid',
  () => ({
    mixins: [dataMixin],
    template: `<status
      :data="statuses"
      :actual-status="4"
      />`,
  })
)
