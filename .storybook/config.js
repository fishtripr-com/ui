import { configure } from '@storybook/vue';

import Vue from 'vue';

// Import your custom components.
import Avatar from '../src/components/avatar';
import ImageContainer from '../src/components/image-container';
import ConversationCard from '../src/components/cards/conversation-card';
import FishtriprLoader from '../src/components/loaders/fishtripr-loader';
import OfferCard from '../src/components/cards/offer-card';
import ChatMessageCard from '../src/components/cards/chat-message-card';
import AppCard from '../src/components/cards/app-card';
import EmployeeCard from '../src/components/cards/employee-card'
import BaseButton from '../src/components/button';

// Register custom components.
Vue.component('avatar', Avatar);
Vue.component('image-container', ImageContainer);
Vue.component('conversation-card', ConversationCard);
Vue.component('fishtripr-loader', FishtriprLoader);
Vue.component('offer-card', OfferCard);
Vue.component('chat-message-card', ChatMessageCard);
Vue.component('app-card', AppCard);
Vue.component('employee-card', EmployeeCard);

Vue.component('base-button', BaseButton);

function loadStories() {
  // You can require as many stories as you need.
  require('../stories');
}

configure(loadStories, module);