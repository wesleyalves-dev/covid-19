import React, { useState, useEffect } from 'react'

import api from '../../services/api'

import formatNum from '../../lib/formatNum'

import { Card } from './styles'

import Chart from './Chart'

export default function GlobalData() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState({})

  useEffect(() => {
    api
      .get('/all')
      .then(response => {
        setData(response.data)
        setLoading(false)
      })
      .catch(() => {})
  }, [])

  return (
    <Card>
      {loading ? (
        'Carregando...'
      ) : (
        <>
          <h2>Mundo</h2>
          <ul>
            <li>Casos: {formatNum(data.cases)}</li>
            <li>Mortes: {formatNum(data.deaths)}</li>
            <li>Recuperações: {formatNum(data.recovered)}</li>
          </ul>
          <Chart
            cases={data.cases}
            deaths={data.deaths}
            recovered={data.recovered}
          />
        </>
      )}
    </Card>
  )
}
