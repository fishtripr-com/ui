<template>
  <div class="offer-preview">

    <short-experience-preview
      :is-loading="experienceIsLoading"
      :title="experienceTitle"
      :country="experienceCountry"
      :city="experienceCity"
      :image="experienceCover"
      :average-rating="experienceAverageRating"
    />

    <!-- <div class="status">
      <offer-status-preview
        :status="offerToShow.status"
        :is-cancelled="offerToShow.status === 'cancelled'"
        />
    </div> -->

      <!-- <div class="details">
        <div class="row status">
          <p class="txt-4">
            Offer status
          </p>
          <p
            class="txt-4 bold"
            :class="!offerToShow.isPaid && statusType(offerToShow.status)"
            >
            {{ statusText(offerToShow.status) }}
          </p>
        </div>
        <div class="row dates">
          <p class="txt-4">
            Dates
          </p>
          <p class="txt-4">
            {{ dates }}
          </p>
        </div>
        <div class="row guests">
          <p class="txt-4">
            Guests
          </p>
          <p class="txt-4">
            {{ guests }}
          </p>
        </div>
        <div class="row total pb-6">
          <p class="txt-4">
            Total ({{ currency }})
          </p>
          <p class="txt-4">
            {{ `${currencySymbol}${price.toFixed(2)}` }}
          </p>
        </div>

         <div
          v-if="offerToShow.canBePaid"
          class="row last">
          <p class="txt-4 bold">
            Due now ({{ currency }})
          </p>
          <p class="txt-4 bold">
            {{ `${currencySymbol}${price.toFixed(2)}` }}
          </p>
        </div>

        <div class="policy" v-if="offerToShow.canBePaid">
          <p class="txt-4 my-8">
            Cancel within 24 hours of booking to get a full refund by contacting <a href="mailto:help@fishtripr.com" class="link-underlined">support</a>.
          </p>
        </div>
      </div>

      <div class="button-group">
        <el-button
          v-if="continueConversation"
          size="m"
          type="default"
          @click="continueConversationClicked"
          >
          <span class="bold">{{ offerToShow.isPaid ? 'Manage reservation' : 'Continue conversation' }}</span>
        </el-button>
        <el-button
          v-if="!continueConversation && offerToShow.canBeAccepted"
          size="m"
          type="primary"
          :loading="isAcceptOfferLoading"
          @click="acceptOfferSubmit"
          >
          Accept offer
        </el-button>
        <el-button
          v-if="!continueConversation && offerToShow.canBePaid"
          size="m"
          type="primary"
          @click="goToPaymentPage"
          >
          Pay offer
        </el-button>
        <el-button
          v-if="!continueConversation && !offerToShow.canBeAccepted && !offerToShow.canBePaid && offerToShow.status !== 'cancelled'"
          size="m"
          type="primary"
          @click="goToOfferPage"
          >
          See details
        </el-button>
      </div> -->

  </div>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex'
// import { PAGE_NAMES, offerStatusTypes, offerStatusTexts } from '../../_utils/constants'
// import { formatDates } from '@fishtripr/js-functions'
// import ShortExperiencePreviw from '../../experience/short-experience-preview/ShortExperiencePreview'

export default {
  name: 'offer-preview',
  // components: {
    // ShortExperiencePreviw
  // },
  props: {
    experienceIsLoading: { type: Boolean, default: false },
    experienceTitle: { type: String, default: '' },
    experienceCountry: { type: String, default: '' },
    experienceCity: { type: String, default: '' },
    experienceCover: { type: String, default: ''},
    experienceAverageRating: { type: Number, default: 0 },
    offerIsLoading: { type: Boolean, default: false },
    // offerIdToShow: { type: String, default: null },
    // continueConversation: { type: Boolean, default: false },
    // messageCount: { type: Number, default: 0 }
  },
  computed: {
    // ...mapGetters([
    //   'experienceById',
    //   'offerById',
    //   'isAcceptOfferLoading',
    //   'hasAcceptOfferError'
    // ]),
    // offerToShow() {
    //   return this.offerById(this.offerIdToShow)
    // },
    // experienceToShow() {
    //   const experienceId = this.offerToShow.experience && this.offerToShow.experience.id
    //   if (this.offerToShow && experienceId) {
    //     return this.experienceById(experienceId)
    //   } else if (this.offerToShow && !experienceId) {
    //     return 'custom'
    //   }
    //   return null
    // },
    // dates() {
    //   return this.offerToShow ? formatDates(this.offerToShow.dates) : null
    // },
    // guests() {
    //   return this.offerToShow && this.offerToShow.guests
    // },
    // price() {
    //   return this.offerToShow && this.offerToShow.price
    // },
    // currency() {
    //   return this.offerToShow && this.offerToShow.currency
    // },
    // currencySymbol() {
    //   if (this.currency && this.currency === 'EUR') {
    //     return '€'
    //   }
    //   return '$'
    // },
  },
  methods: {
    // ...mapActions(['acceptOffer']),
    // goToExperience() {
    //   console.log(this.offerToShow)
    //   // if (this.experience.isListed) {
    //   //   this.$router.push({name: PAGE_NAMES.EXPERIENCES, params: { id: this.experience.internalId }})
    //   // }
    // },
    // statusType(status) {
    //   return offerStatusTypes[status]
    // },
    // statusText(status) {
    //   return offerStatusTexts[status]
    // },
    // acceptOfferSubmit() {
    //   this.acceptOffer(this.offerIdToShow)
    // },
    // goToPaymentPage() {
    //   if (this.offerToShow && this.offerToShow.canBePaid) {
    //     this.$router.push({name: PAGE_NAMES.OFFERS, params: { id: this.offerToShow.id }})
    //   }
    // },
    // goToOfferPage() {
    //   if (this.offerToShow && this.offerToShow.isPaid) {
    //     this.$router.push({name: PAGE_NAMES.OFFERS, params: { id: this.offerToShow.id }})
    //   }
    // },
    // continueConversationClicked() {
    //   this.$emit('continueConversation', this.offerToShow.conversation.id)
    // }
  },
  watch: {
    // isAcceptOfferLoading(newLoading) {
    //   if (!newLoading && !this.hasAcceptOfferError) {
    //     this.$emit('offerAccepted', this.offerIdToShow)
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/default';

.offer-preview {
  border: 1px solid map-get($colors, "border");
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px;

  .details {
    display: flex;
    flex-direction: column;
    border-top: 1px solid map-get($colors, "border");
    margin-top: map-get($spacers, 8);

    .row {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;

      &:first-child {
        margin-top: map-get($spacers, 8);
      }
      &:nth-child(4) {
        margin-bottom: map-get($spacers, 4);
      }

      &.last {
        border-top: 1px solid map-get($colors, "border");
        border-bottom: 1px solid map-get($colors, "border");
        padding: map-get($spacers, 8) 0;
        margin-top: 0;
      }
    }
  }

  .button-group {
    display: flex;
    flex-direction: column;

    .el-button {
      // margin-top: 20px;

      &.plain {
        font-weight: 100;
        color: map-get($colors, "text-light");
      }
    }
  }
}
</style>
