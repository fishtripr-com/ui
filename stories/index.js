import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import Avatar from '../src/components/avatar';

storiesOf('Avatar', module)
  .add('with URL', () => '<avatar image="https://s.gravatar.com/avatar/a3895a2d6f26155968be47fc03dddc40?s=80" height={80} />')
  .add('without URL (fallback)', () => '<avatar height={80} />');