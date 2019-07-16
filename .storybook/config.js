import { configure } from "@storybook/vue";

import Vue from "vue";

// Import your custom components.
import Avatar from "../src/components/avatar";
import ImageContainer from "../src/components/image-container";
import ConversationCard from "../src/components/cards/conversation-card";
import FishtriprLoader from "../src/components/loaders/fishtripr-loader";
import OfferCard from "../src/components/cards/offer-card";
import ChatMessageCard from "../src/components/cards/chat-message-card";
import AppCard from "../src/components/cards/app-card";
import EmployeeCard from "../src/components/cards/employee-card";
import UserNavbarCard from "../src/components/cards/user-navbar-card";
import BaseButton from "../src/components/button";
import MarketingThumbsCard from "../src/components/cards/marketing-thumbs-card";
import ArrowRight from "../src/components/pictos/arrow-right";
import Book from "../src/components/pictos/book";
import Calendar from "../src/components/pictos/calendar";
import Correct from "../src/components/pictos/correct";
import Discover from "../src/components/pictos/discover";
import Dot from "../src/components/pictos/dot";
import ErrorPicto from "../src/components/pictos/error-picto";
import Location from "../src/components/pictos/location";
import MapPointer from "../src/components/pictos/map-pointer";
import People from "../src/components/pictos/people";
import Phone from "../src/components/pictos/phone";
import Plan from "../src/components/pictos/plan";
import Quote from "../src/components/pictos/quote";
import VideoPlayer from "../src/components/pictos/video-player";

// Register custom components.
Vue.component("avatar", Avatar);
Vue.component("image-container", ImageContainer);
Vue.component("conversation-card", ConversationCard);
Vue.component("fishtripr-loader", FishtriprLoader);
Vue.component("offer-card", OfferCard);
Vue.component("chat-message-card", ChatMessageCard);
Vue.component("app-card", AppCard);
Vue.component("employee-card", EmployeeCard);
Vue.component("user-navbar-card", UserNavbarCard);
Vue.component("base-button", BaseButton);
Vue.component("marketing-thumbs-card", MarketingThumbsCard);
Vue.component("arrow-right", ArrowRight);
Vue.component("book", Book);
Vue.component("calendar", Calendar);
Vue.component("correct", Correct);
Vue.component("discover", Discover);
Vue.component("dot", Dot);
Vue.component("error-picto", ErrorPicto);
Vue.component("location", Location);
Vue.component("map-pointer", MapPointer);
Vue.component("people", People);
Vue.component("phone", Phone);
Vue.component("plan", Plan);
Vue.component("quote", Quote);
Vue.component("video-player", VideoPlayer);

function loadStories() {
  // You can require as many stories as you need.
  require("../stories");
}

configure(loadStories, module);
