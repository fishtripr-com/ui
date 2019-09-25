import { configure } from '@storybook/vue'

import Vue from 'vue'

// Import your custom components.
import Avatar from '../src/components/avatar'
import ImageContainer from '../src/components/image-container'
import ConversationCard from '../src/components/conversation/conversation-card'
import FishtriprLoader from '../src/components/loaders/fishtripr-loader'
import OfferCard from '../src/components/offer-card'
import ChatMessageCard from '../src/components/cards/chat-message-card'
import AppCard from '../src/components/cards/app-card'
import EmployeeCard from '../src/components/cards/employee-card'
import UserNavbarCard from '../src/components/cards/user-navbar-card'
import BaseButton from '../src/components/button'
import TextTypeBloc from '../src/components/base-elements/text-type-bloc'
import CheckBoxCard from '../src/components/check-box-card/CheckBoxCard'
import TipCard from '../src/components/tip-card'
import MarketingThumb from '../src/components/marketing-thumb'
import Navbar from '../src/components/navbar'
import Navigation from '../src/components/navigation'
import ExperienceCard from '../src/components/cards/experience-card'
import PartnerCard from '../src/components/cards/partner-card'
import ShortExperiencePreview from '../src/components/experience/short-experience-preview/ShortExperiencePreview'
import CopyableLink from '../src/components/copyable-link'
import MobileOfferHeader from '../src/components/mobile-offer-header'
import ConversationReceiverHeader from '../src/components/conversation/conversation-receiver-header'
import ExperienceListingCard from '../src/components/experience/experience-listing-card'
import BookingCard from '../src/components/booking/booking-card'
import InsightGraph from '../src/components/insight-graph'
import InsightCard from '../src/components/dashboard/insight-card'
import ConversationSendMessageBox from '../src/components/conversation/conversation-send-message-box'
import DefaultLoader from '../src/components/loaders/DefaultLoader'

// Register custom components.
Vue.component('avatar', Avatar)
Vue.component('image-container', ImageContainer)
Vue.component('conversation-card', ConversationCard)
Vue.component('fishtripr-loader', FishtriprLoader)
Vue.component('offer-card', OfferCard)
Vue.component('chat-message-card', ChatMessageCard)
Vue.component('app-card', AppCard)
Vue.component('employee-card', EmployeeCard)
Vue.component('user-navbar-card', UserNavbarCard)
Vue.component('base-button', BaseButton)
Vue.component('text-type-bloc', TextTypeBloc)
Vue.component('check-box-card', CheckBoxCard)
Vue.component('tip-card', TipCard)
Vue.component('marketing-thumb', MarketingThumb)
Vue.component('navbar', Navbar)
Vue.component('navigation', Navigation)
Vue.component('experience-card', ExperienceCard)
Vue.component('partner-card', PartnerCard)
Vue.component('short-experience-preview', ShortExperiencePreview)
Vue.component('copyable-link', CopyableLink)
Vue.component('mobile-offer-header', MobileOfferHeader)
Vue.component('conversation-receiver-header', ConversationReceiverHeader)
Vue.component('experience-listing-card', ExperienceListingCard)
Vue.component('booking-card', BookingCard)
Vue.component('experience-listing-card', ExperienceListingCard)
Vue.component('insight-graph', InsightGraph)
Vue.component('experience-listing-card', ExperienceListingCard)
Vue.component('insight-card', InsightCard)
Vue.component('conversation-send-message-box', ConversationSendMessageBox)
Vue.component('default-loader', DefaultLoader)

function loadStories() {
  // You can require as many stories as you need.
  require('../stories')
}

configure(loadStories, module)
