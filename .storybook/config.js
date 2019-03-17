import { configure } from '@storybook/vue';

import Vue from 'vue';

// Import your custom components.
import Avatar from '../src/components/avatar';
import ImageContainer from '../src/components/image-container';
import ConversationCard from '../src/components/cards/conversation-card';
import FishtriprLoader from '../src/components/loaders/fishtripr-loader'

// Register custom components.
Vue.component('avatar', Avatar); 
Vue.component('image-container', ImageContainer); 
Vue.component('conversation-card', ConversationCard); 
Vue.component('fishtripr-loader', FishtriprLoader); 

function loadStories() {
  // You can require as many stories as you need.
  require('../stories');
}

configure(loadStories, module);