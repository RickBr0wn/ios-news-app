import React from 'react'
import { View, Text } from 'native-base'
import moment from 'moment'

const TimeAgo = ({ time }) => {
  const timeAgo = moment(time || moment.now()).fromNow()

  return (
    <Text style={{ marginHorizontal: 10 }} note>
      {timeAgo}
    </Text>
  )
}

export default TimeAgo
