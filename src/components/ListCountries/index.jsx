import React, { useState, useEffect } from 'react'

import api from '../../services/api'

import formatNum from '../../lib/formatNum'

import { Card } from './styles'

import Search from '../Search'
import Chart from './Chart'

export default function ListCountries() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    api
      .get('/countries')
      .then(response => {
        setLoading(false)
        setCountries(response.data)
      })
      .catch(e =>
        setError(
          `Ocorreu um erro, por favor atualize a página. Detalhe: ${e.message}`
        )
      )
  }, [])

  if (loading) return 'Carregando...'

  if (error) return error

  return (
    <>
      <Search
        type="search"
        value={search}
        placeholder="Pesquisar país (inglês)"
        onChange={evt => setSearch(evt.target.value)}
      />
      {countries
        .filter(country =>
          search
            ? country.country.toLowerCase().startsWith(search.toLowerCase())
            : true
        )
        .map(country => (
          <Card key={country.country}>
            <h2>{country.country}</h2>
            <ul>
              <li>Casos: {formatNum(country.cases)}</li>
              <li>Mortes: {formatNum(country.deaths)}</li>
              <li>Recuperados: {formatNum(country.recovered)}</li>
            </ul>
            <ul>
              <li>Casos hoje: {formatNum(country.todayCases)}</li>
              <li>Mortes hoje: {formatNum(country.todayDeaths)}</li>
              <li>Casos/Milhão: {formatNum(country.casesPerOneMillion)}</li>
            </ul>
            <Chart
              cases={country.cases}
              deaths={country.deaths}
              recovered={country.recovered}
            />
          </Card>
        ))}
    </>
  )
}
