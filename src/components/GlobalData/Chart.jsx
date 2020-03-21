import React from 'react'
import PropTypes from 'prop-types'

import { ChartContainer, Bar } from './styles'

export default function Chart({ cases, deaths, recovered }) {
  return (
    <ChartContainer>
      <Bar
        color="#ffb300"
        value={(cases * 100) / (cases + deaths + recovered)}
      />
      <Bar
        color="#bf360c"
        value={(deaths * 100) / (cases + deaths + recovered)}
      />
      <Bar
        color="#388e3c"
        value={(recovered * 100) / (cases + deaths + recovered)}
      />
    </ChartContainer>
  )
}

Chart.propTypes = {
  cases: PropTypes.number.isRequired,
  deaths: PropTypes.number.isRequired,
  recovered: PropTypes.number.isRequired
}
