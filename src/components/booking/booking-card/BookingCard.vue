<template>
  <div class="booking-card">
    <div class="wrapper p-5">

      <div class="main-info" @click="switchDetail">

        <div class="head">
          <div class="primary-info">
            <p class="date txt-1 bold">{{ bookingDate }}</p>
            <p class="source txt-4" :class="channel.type">{{ channel.text }}</p>
          </div>
          <div class="arrow">
            <img
              class="image"
              :class="isDetailOpen ? 'up' : 'down'"
              :src="arrowBottom"
              alt="Arrow bottom"
            >
          </div>
        </div>

        <div class="body">

          <div class="experience-info col">
            <avatar
              :image="experienceCover"
              size="s"
              />
            <div class="title-loc">
              <p class="title txt-4">{{ experienceTitleTroncated }}</p>
              <p class="location txt-5 light">{{ experienceAddress }}</p>
            </div>
          </div>

          <div class="customer-info col">
            <p class="guests-duration txt-4">{{ guestsAndDuration }}</p>
            <p class="contact txt-4">Contact guest</p>
          </div>

          <div class="payment-info col">
            <p class="price txt-4 bold">{{ price }}</p>
            <p class="status txt-4" :class="statusType">{{ statusText }}</p>
          </div>

        </div>

      </div>

      <div
        v-if="isDetailOpen"
        class="details-info pt-5"
        >

        <div class="trip-info col">

          <div class="row">
            <h3 class="section-title">
              Trip details
            </h3>
          </div>

          <div class="row">
            <div class="section">
              <p class="title">Arrival date</p>
              <p class="value">{{ startDate }}</p>
            </div>
            <div class="section">
              <p class="title">Departure date</p>
              <p class="value">{{ endDate }}</p>
            </div>
          </div>

          <div class="row">
            <div class="section">
              <p class="title">Days</p>
              <p class="value">{{ duration }}</p>
            </div>
            <div class="section">
              <p class="title">Guests</p>
              <p class="value">{{ guests }}</p>
            </div>
          </div>

        </div>

        <div class="customer-info col">

          <div class="row">
            <h3 class="section-title">
              Booked by
            </h3>
          </div>

          <div class="row">
            <div class="section">
              <p class="title">Name</p>
              <p class="value">{{ customerFullName }}</p>
            </div>
          </div>

          <div class="row">
            <div class="section">
              <p class="title">Email</p>
              <p class="value">{{ customerEmail }}</p>
            </div>
          </div>

        </div>

        <div class="payment-info col">

          <div class="row">
            <h3 class="section-title">
              Payments
            </h3>
          </div>

          <div class="row">

          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script>
import { IMG } from '@fishtripr/constants'
import Avatar from '../../avatar/Avatar'

export default {
  name: 'booking-card',
  components: { Avatar },
  props: {
    startDate: { type: String },
    endDate: { type: String },
    source: { type: String },
    experienceCover: { type: String },
    experienceTitle: { type: String },
    experienceAddress: { type: String },
    guests: { type: String },
    duration: { type: String },
    conversationId: { type: String },
    customerFullName: { type: String },
    customerEmail: { type: String },
    statusText: { type: String },
    statusType: { type: String },
    totalPrice: { type: String },
    deposit: { type: String },
    currency: { type: String }
  },
  data() {
    return {
      isDetailOpen: false,
      experienceTitleMaxLength: 35
    }
  },
  computed: {
    arrowBottom() {
      return IMG.ICON.ARROW_RIGHT
    },
    bookingDate() {
      return this.startDate
    },
    channel() {
      return {
        text: this.source,
        type: 'success'
      }
    },
    experienceTitleTroncated() {
      return this.experienceTitle.length > this.experienceTitleMaxLength ? `${this.experienceTitle.slice(0, this.experienceTitleMaxLength)}...` : this.experienceTitle
    },
    guestsAndDuration() {
      return `${this.guests} guest${this.guests > 1 ? 's' : ''} - ${this.duration} day${this.duration > 1 ? 's' : ''}`
    },
    price() {
      return `${this.currency} ${this.totalPrice}`
    }
  },
  methods: {
    switchDetail() {
      this.isDetailOpen = !this.isDetailOpen
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/style/default";

.booking-card {

  .wrapper {
    display: flex;
    flex-direction: column;
    border: 1px solid map-get($colors, 'border');

    .main-info {
      display: flex;
      flex-direction: column;
      cursor: pointer;

      .head {
        display: flex;
        justify-content: space-between;

        // .primary-info {}
        .arrow {
          width: 20px;
          height: 20px;

          .image {
            width: 100%;
            height: 100%;
            object-fit: contain;
            transition: all 0.3s;

            &.down { transform: rotate(90deg) }
            &.up { transform: rotate(-90deg) }
          }
        }
      }

      .body {
        display: flex;

        .col {
          &.experience-info {
            flex: 2;
            display: flex;
            align-items: center;
          }
          &.customer-info { flex: 3 }
          &.payment-info { flex: 1 }
        }

      }
    }

    .details-info {
      display: flex;

      .col {
        display: flex;
        flex-direction: column;

        &.trip-info { flex: 2 }
        &.customer-info { flex: 3 }
        &.payment-info { flex: 1 }

        .row {
          display: flex;

          .section {
            display: flex;
            flex-direction: column;
          }
        }
      }
    }
  }
}
</style>
