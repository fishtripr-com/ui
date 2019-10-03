import { storiesOf } from '@storybook/vue'

storiesOf('UI/Button/Mode', module)
  .add('Default', () => ({
    template: `<base-button :label="default"/>`,
  }))

// storiesOf('UI/Loader/Sizes', module)
//   .add('Extra small', () => ({
//     template: `<default-loader size="xs"/>`,
//   }))
//   .add('Small', () => ({
//     template: `<default-loader size="s"/>`,
//   }))
//   .add('Medium (default)', () => ({
//     template: `<default-loader/>`,
//   }))
//   .add('Large', () => ({
//     template: `<default-loader size="l"/>`,
//   }))
//   .add('Extra large', () => ({
//     template: `<default-loader size="xl"/>`,
//   }))
