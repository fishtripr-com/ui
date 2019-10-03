import { configure } from '@storybook/vue'

import Vue from 'vue'

/**
 * UI
 */
import Avatar from '../src/components/avatar'
import ImageContainer from '../src/components/image-container'
import AppCard from '../src/components/cards/app-card'
import EmployeeCard from '../src/components/cards/employee-card'
import UserNavbarCard from '../src/components/cards/user-navbar-card'
import BaseButton from '../src/components/ui/BaseButton'
import TextTypeBloc from '../src/components/base-elements/text-type-bloc'
import CheckBoxCard from '../src/components/check-box-card/CheckBoxCard'
import Navbar from '../src/components/navbar'
import Navigation from '../src/components/navigation'
import DefaultLoader from '../src/components/loaders/DefaultLoader'
import PartnerCard from '../src/components/cards/partner-card'

/**
 * Experience
 */
import ExperienceCard from '../src/components/cards/experience-card'
import ShortExperiencePreview from '../src/components/experience/short-experience-preview/ShortExperiencePreview'
import ExperienceListingCard from '../src/components/experience/experience-listing-card'

/**
 * Conversation
 */
import ConversationCard from '../src/components/conversation/conversation-card'
import ChatMessageCard from '../src/components/cards/chat-message-card'
import ConversationReceiverHeader from '../src/components/conversation/conversation-receiver-header'
import ConversationSendMessageBox from '../src/components/conversation/conversation-send-message-box'

/**
 * Offer
 */
import OfferCard from '../src/components/offer-card'
import OfferPreview from '../src/components/offer/offer-preview/OfferPreview'
import MobileOfferHeader from '../src/components/mobile-offer-header'

/**
 * booking
 */
import BookingCard from '../src/components/booking/booking-card'

/**
 * Others
 */
import TipCard from '../src/components/tip-card'
import MarketingThumb from '../src/components/marketing-thumb'
import CopyableLink from '../src/components/copyable-link'
import InsightCard from '../src/components/dashboard/insight-card'
import InsightGraph from '../src/components/insight-graph'

// Register custom components.
Vue.component('avatar', Avatar)
Vue.component('image-container', ImageContainer)
Vue.component('conversation-card', ConversationCard)
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
Vue.component('offer-preview', OfferPreview)

function loadStories() {
  // You can require as many stories as you need.
  require('../stories')
}

configure(loadStories, module)
