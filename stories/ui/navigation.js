import { storiesOf } from '@storybook/vue'

import data from '../_utils/mockData/index'

storiesOf('UI/Navigation/Theme', module)
.add(
  'Light',
  () => ({
    data() {
      return {
        navItems: data.nav.navItems
      }
    },
    template: `<navigation
      theme="light"
      :items="navItems"
      />`,
  })
)


// .add('Dark', () => {
//   return {
//     template: `<navigation
//       theme="dark"
//       :items="[
//         {'id': 0, 'path': '/aaa', 'label': 'Home'},
//         {'id': 1, 'path': '/bbb', 'label': 'About'},
//       ]"
//       />`,
//   }
// })
// .add('Premium', () => {
//   return {
//     template: `<navigation
//       theme="premium"
//       :items="[
//         {'id': 0, 'path': '/aaa', 'label': 'Home'},
//         {'id': 1, 'path': '/bbb', 'label': 'About'},
//       ]"
//       />`,
//   }
// })
