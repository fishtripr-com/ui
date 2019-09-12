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
          currency: data.booking.currency
        }
      },
      template: `<booking-card
        :startDate="startDate"
        :endDate="endDate"
        :source="source"
        :experienceCover="experienceCover"
        :experienceTitle="experienceTitle"
        :experienceAddress="experienceAddress"
        :guests="guests"
        :duration="duration"
        :conversationId="conversationId"
        :customerFullNam="customerFullName"
        :customerEmail="customerEmail"
        :statusText="statusText"
        :statusType="statusType"
        :totalPrice="totalPrice"
        :deposit="deposit"
        :currency="currency"
      />`
    })
  )
