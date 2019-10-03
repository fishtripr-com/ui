import { storiesOf } from '@storybook/vue'

storiesOf('UI/Button/Type', module)
  .add('Default', () => ({
    template: `<base-button
      label="default"
    />`,
  }))
  .add('Primary', () => ({
    template: `<base-button
      label="Primary"
      type="primary"
    />`,
  }))
  .add('Premium', () => ({
    template: `<base-button
      label="Premium"
      type="premium"
    />`,
  }))
  .add('Success', () => ({
    template: `<base-button
      label="Success"
      type="success"
    />`,
  }))
  .add('Danger', () => ({
    template: `<base-button
      label="Danger"
      type="danger"
    />`,
  }))
  .add('Info', () => ({
    template: `<base-button
      label="Info"
      type="info"
    />`,
  }))
  .add('Warning', () => ({
    template: `<base-button
      label="Warning"
      type="warning"
    />`,
  }))
  .add('Text', () => ({
    template: `<base-button
      label="Text button"
      type="text"
    />`,
  }))

storiesOf('UI/Button/Size', module)
  .add('xxs', () => ({
    template: `<base-button
      label="Size xxs"
      size="xxs"
    />`,
  }))
  .add('xs', () => ({
    template: `<base-button
      label="Size xs"
      size="xs"
    />`,
  }))
  .add('s', () => ({
    template: `<base-button
      label="Size s"
      size="s"
    />`,
  }))
  .add('m', () => ({
    template: `<base-button
      label="Size m"
      size="m"
    />`,
  }))
  .add('l', () => ({
    template: `<base-button
      label="Size l"
      size="l"
    />`,
  }))
  .add('xl', () => ({
    template: `<base-button
      label="Size xl"
      size="xl"
    />`,
  }))
  .add('xxl', () => ({
    template: `<base-button
      label="Size xxl"
      size="xxl"
    />`,
  }))

storiesOf('UI/Button', module)
  .add('Loading', () => ({
    template: `<base-button
      label="Loading"
      is-loading
      size='m'
      type="text"
    />`,
  }))
  .add('Disabled', () => ({
    template: `<base-button
      label="Loading"
      is-disabled
      size='m'
      type="default"
    />`,
  }))
  .add('Without radius', () => ({
    template: `<base-button
      label="Loading"
      radiusless
      size='m'
      type="default"
    />`,
  }))
