import React from 'react'

import { Card } from './styles'

import Chart from './Chart'

const data = {
  cases: 10000000,
  deaths: 5000000,
  recovered: 1000000
}

export default function GlobalData() {
  return (
    <Card>
      <h2>Dados globais</h2>
      <ul>
        <li>Casos: {data.cases}</li>
        <li>Mortes: {data.deaths}</li>
        <li>Recuperações: {data.recovered}</li>
      </ul>
      <Chart
        cases={data.cases}
        deaths={data.deaths}
        recovered={data.recovered}
      />
    </Card>
  )
}
