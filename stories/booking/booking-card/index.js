import { storiesOf } from '@storybook/vue'

import data from '../../_utils/mockData'

storiesOf('Booking/Booking card', module)
  .add(
    'Default',
    () => ({
      name: 'story-booking-card-default',
      data() {
        return {
          startDate: data.booking.startDate,
          endDate: data.booking.endDate,
          source: data.booking.source,
          experienceCover: data.booking.experienceCover,
          experienceTitle: data.booking.experienceTitle,
          experienceAddress: data.booking.experienceAddress,
          guests: data.booking.guests,
          duration: data.booking.duration,
          conversationId: data.booking.conversationId,
          customerFullName: data.booking.customerFullName,
          customerEmail: data.booking.customerEmail,
          statusText: data.booking.statusText,
          statusType: data.booking.statusType,
          totalPrice: data.booking.totalPrice,
          deposit: data.booking.deposit,
          currency: data.booking.currency,
          currencySymbol: data.booking.currencySymbol
        }
      },
      template: `<booking-card
        :start-date="startDate"
        :end-date="endDate"
        :source="source"
        :experience-cover="experienceCover"
        :experience-title="experienceTitle"
        :experience-address="experienceAddress"
        :guests="guests"
        :duration="duration"
        :conversation-id="conversationId"
        :customer-full-name="customerFullName"
        :customer-email="customerEmail"
        :status-text="statusText"
        :status-type="statusType"
        :total-price="totalPrice"
        :deposit="deposit"
        :currency="currency"
        :currency-symbol="currencySymbol"
      />`
    })
  )
