import { storiesOf } from '@storybook/vue'

import data from '../_utils/mockData/index'

const dataMixin = {
  data() {
    return {
      navItems: data.nav.navItems,
    }
  },
}

storiesOf('UI/Navigation/Theme', module)
  .add('Light (default)', () => ({
    mixins: [dataMixin],
    template: `<navigation
      :items="navItems"
      />`,
  }))
  .add('Dark', () => ({
    mixins: [dataMixin],
    template: `<navigation
      theme="dark"
      :items="navItems"
      />`,
  }))
  .add('Premium', () => ({
    mixins: [dataMixin],
    template: `<navigation
      theme="premium"
      :items="navItems"
      />`,
  }))
