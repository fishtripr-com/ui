import { storiesOf } from '@storybook/vue'

import data from '../_utils/mockData'

storiesOf('Dashboard/Inisght Graph', module).add('Default', () => ({
  data() {
    return {
      revenue: data.dashboard.yearRevenue,
    }
  },
  template: `<insight-graph :data="revenue" />`,
}))
