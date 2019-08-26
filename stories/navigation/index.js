import { storiesOf } from '@storybook/vue';

storiesOf('Navigation', module)
  .add(
    'Light', 
    () => {
      return {
        template:  `<navigation
        theme="light"
        :items="[
          {'id': 0, 'path': '/aaa', 'label': 'Home'},
          {'id': 1, 'path': '/bbb', 'label': 'About'},
        ]"
        />`
      }
    }
  )
  .add(
    'Dark', 
    () => {
      return {
        template:  `<navigation
        theme="dark"
        :items="[
          {'id': 0, 'path': '/aaa', 'label': 'Home'},
          {'id': 1, 'path': '/bbb', 'label': 'About'},
        ]"
        />`
      }
    }
  )
  .add(
    'Premium', 
    () => {
      return {
        template:  `<navigation
        theme="premium"
        :items="[
          {'id': 0, 'path': '/aaa', 'label': 'Home'},
          {'id': 1, 'path': '/bbb', 'label': 'About'},
        ]"
        />`
      }
    }
  )


