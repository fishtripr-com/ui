<template>
  <div class="booking-card">
    <div :class="`wrapper ${isSmallOrDown ? 'p-5' : 'py-6 px-8'}`" @click="mobileEmit">

      <div class="main-info">

        <header class="head">
          <div class="primary-info">
            <strong class="date txt-1 bold">{{ bookingDate }}</strong>
            <p v-if="!isSmallOrDown" class="source txt-5">{{ channel.text }}</p>
          </div>
          <div v-if="!isSmallOrDown" class="arrow" @click="switchDetail">
            <img
              class="image"
              :class="isDetailOpen ? 'up' : 'down'"
              :src="arrowBottom"
              alt="Arrow bottom"
            >
          </div>
        </header>

        <div class="body mt-5">

          <div class="experience-info col">
            <avatar
              class="mr-5"
              :image="experienceCover"
              size="s"
            />
            <div class="title-loc">
              <p class="title txt-4 mb-2">{{ experienceTitleTruncated }}</p>
              <p class="location txt-5 light">{{ isSmallOrDown ? mobileBookingInfo : experienceAddress }}</p>
            </div>
          </div>

          <div v-if="!isSmallOrDown" class="customer-info col">
            <p class="guests-duration txt-4 mb-2">{{ guestsAndDuration }}</p>
            <p class="contact txt-5 light underlined" @click="emitContact">Contact guest</p>
          </div>

          <div v-if="!isSmallOrDown" class="payment-info col">
            <p class="price txt-4 semibold mb-2">{{ price }}</p>
            <p class="status txt-4" :class="statusType">{{ statusText }}</p>
          </div>

        </div>

      </div>

      <div
        v-if="isDetailOpen && !isSmallOrDown"
        class="details-info pt-8 mt-8"
        >

        <div class="trip-info col">

          <div class="row mb-5">
            <h3 class="section-title txt-2 semibold">
              Trip details
            </h3>
          </div>

          <div class="row mb-5">
            <section class="section">
              <p class="title txt-5 light">Arrival date</p>
              <p class="value txt-5 semibold">{{ startDate }}</p>
            </section>
            <section class="section">
              <p class="title txt-5 light">Departure date</p>
              <p class="value txt-5 semibold">{{ endDate }}</p>
            </section>
          </div>

          <div class="row">
            <section class="section">
              <p class="title txt-5 light">Days</p>
              <p class="value txt-5 semibold">{{ duration }}</p>
            </section>
            <section class="section">
              <p class="title txt-5 light">Guests</p>
              <p class="value txt-5 semibold">{{ guests }}</p>
            </section>
          </div>

        </div>

        <div class="customer-info col">

          <div class="row mb-5">
            <h3 class="section-title txt-2 semibold">
              Booked by
            </h3>
          </div>

          <div class="row mb-5">
            <section class="section">
              <p class="title txt-5 light">Name</p>
              <p class="value txt-5 semibold">{{ customerFullName }}</p>
            </section>
          </div>

          <div class="row">
            <section class="section">
              <p class="title txt-5 light">Email</p>
              <p class="value txt-5 semibold">{{ customerEmail }}</p>
            </section>
          </div>

        </div>

        <div class="payment-info col">

          <div class="row mb-5">
            <h3 class="section-title txt-2 semibold">
              Payments
            </h3>
          </div>

          <div class="row payment">
            <p class="label txt-5">{{ calculationPricePerGuest }}</p>
            <p class="value txt-5">{{ price }}</p>
          </div>

          <div class="row payment">
            <p class="label txt-5">Deposit</p>
            <p class="value txt-5">{{ depositPrice }}</p>
          </div>

          <div class="row payment">
            <p class="label txt-5">Due amount</p>
            <p class="value txt-5">{{ dueAmount }}</p>
          </div>

          <div class="row payment">
            <p class="label txt-5 semibold">Total</p>
            <p class="value txt-5 semibold">{{ price }}</p>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script>
import { IMG } from '@fishtripr/constants'
import { responsiveHandler } from '../../../mixins/responsiveHandler'
import Avatar from '../../avatar/Avatar'

export default {
  name: 'booking-card',
  mixins: [ responsiveHandler ],
  components: { Avatar },
  props: {
    startDate: { type: String },
    endDate: { type: String },
    source: { type: String },
    experienceCover: { type: String },
    experienceTitle: { type: String },
    experienceAddress: { type: String },
    guests: { type: Number },
    duration: { type: Number },
    conversationId: { type: String },
    customerFullName: { type: String },
    customerEmail: { type: String },
    statusText: { type: String },
    statusType: { type: String },
    totalPrice: { type: Number },
    deposit: { type: Number },
    currency: { type: String },
    currencySymbol: { type: String }
  },
  data() {
    return {
      isDetailOpen: false,
      experienceTitleMaxLength: 35,
      experienceTitleMaxLengthMobile: 25
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
    experienceTitleTruncated() {
      const limit = this.isSmallOrDown ? this.experienceTitleMaxLengthMobile : this.experienceTitleMaxLength
      return this.experienceTitle.length > limit ? `${this.experienceTitle.slice(0, limit)}...` : this.experienceTitle
    },
    guestsAndDuration() {
      return `${this.guests} guest${this.guests > 1 ? 's' : ''} - ${this.duration} day${this.duration > 1 ? 's' : ''}`
    },
    price() {
      return `${this.currencySymbol} ${this.totalPrice.toFixed(2)}`
    },
    calculationPricePerGuest() {
      const pricePerGuest = (this.totalPrice / this.guests).toFixed(2)
      return `${pricePerGuest} x ${this.guests} guest${this.guests > 1 ? 's' : ''}`
    },
    depositPrice() {
      return `${this.currencySymbol} ${this.deposit.toFixed(2)}`
    },
    dueAmount() {
      const dueAmount = this.deposit ? (this.totalPrice - this.deposit).toFixed(2) : 0
      return `${this.currencySymbol} ${dueAmount.toFixed(2)}`
    },
    mobileBookingInfo() {
      const guest = `${this.guests} guest${this.guests > 1 ? 's' : ''}`
      const duration = `${this.duration} day${this.duration > 1 ? 's' : ''}`
      return `${guest} - ${duration} - ${this.price}`
    }
  },
  methods: {
    switchDetail() {
      this.isDetailOpen = !this.isDetailOpen
    },
    mobileEmit() {
      this.isSmallOrDown && this.emitContact()
    },
    emitContact() {
      this.$emit('contactCustomer')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/style/default";

.booking-card {
  width: 100%;

  .wrapper {
    display: flex;
    flex-direction: column;
    border: 1px solid map-get($colors, 'border');

    .main-info {
      display: flex;
      flex-direction: column;

      .head {
        display: flex;
        justify-content: space-between;

        .arrow {
          display: flex;
          justify-content: flex-end;
          min-width: 50px;
          height: auto;
          cursor: pointer;

          .image {
            width: 20px;
            height: 20px;
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
            flex: 3;
            display: flex;
            align-items: center;
          }
          &.customer-info {
            flex: 2;

            .contact { cursor: pointer }
          }
          &.payment-info {
            flex: 1.5;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
          }
        }
      }
    }

    .details-info {
      display: flex;
      border-top: 1px solid map-get($colors, 'border');

      .col {
        display: flex;
        flex-direction: column;

        &.trip-info { flex: 3 }
        &.customer-info { flex: 2 }
        &.payment-info { flex: 1.5 }

        .row {
          display: flex;

          &.payment {
            padding-bottom: map-get($spacers, 5);
            justify-content: space-between;

            &:not(:last-child) {
              border-bottom: 1px solid map-get($colors, 'border');
              margin-bottom: map-get($spacers, 5);
            }
          }

          .section {
            flex: 1;
            display: flex;
            flex-direction: column;
          }
        }
      }
    }
  }
}
</style>
