import { configure } from '@storybook/vue';

import Vue from 'vue';

// Import your custom components.
import Avatar from '../src/components/avatar';
import ImageContainer from '../src/components/image-container';

// Register custom components.
Vue.component('avatar', Avatar); 
Vue.component('image-container', ImageContainer); 

function loadStories() {
  // You can require as many stories as you need.
  require('../stories');
}

configure(loadStories, module);