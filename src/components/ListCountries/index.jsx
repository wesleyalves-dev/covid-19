import React, { useState, useEffect } from 'react'

import api from '../../services/api'

import formatNum from '../../lib/formatNum'
import formatPercent from '../../lib/formatPercent'

import { Card } from './styles'

import Search from '../Search'
import Chart from './Chart'

export default function ListCountries() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    function markCountries(country) {
      const continents = [
        'North America',
        'Europe',
        'Asia',
        'South America',
        'Oceania',
        'Africa',
        'World'
      ]

      const newList = country
      newList.isCountry = !continents.includes(country.country)

      return newList
    }

    api
      .get('/countries')
      .then(response => {
        setLoading(false)
        setCountries(response.data.map(markCountries))
      })
      .catch(e =>
        setError(
          `Ocorreu um erro, por favor atualize a página. Detalhe: ${e.message}`
        )
      )
  }, [])

  function filterBySearch(country) {
    return search
      ? country.country.toLowerCase().startsWith(search.toLowerCase())
      : true
  }

  function filterUnnamedRegistry({ country }) {
    return !!country && country !== 'Total:'
  }

  if (loading) return 'Carregando dados...'

  if (error) return error

  return (
    <>
      <Search
        type="search"
        value={search}
        placeholder="Pesquisar (inglês)"
        onChange={evt => setSearch(evt.target.value)}
      />
      {countries
        .filter(filterBySearch)
        .filter(filterUnnamedRegistry)
        .map(country => (
          <Card key={country.country}>
            <h2>{country.country}</h2>
            <ul>
              <li>Casos: {formatNum(country.cases)}</li>
              <li>Mortes: {formatNum(country.deaths)}</li>
              <li>Recuperados: {formatNum(country.recovered)}</li>
              {country.isCountry && (
                <>
                  <li>Teste feitos: {formatNum(country.totalTests)}</li>
                  <li>
                    Tx. mortalidade:{' '}
                    {formatPercent((country.deaths * 100) / country.cases)}
                  </li>
                </>
              )}
            </ul>
            <ul>
              <li>Casos hoje: {formatNum(country.todayCases)}</li>
              <li>Mortes hoje: {formatNum(country.todayDeaths)}</li>
              <li>Casos/Milhão: {formatNum(country.casesPerOneMillion)}</li>
              {country.isCountry && (
                <>
                  <li>
                    Testes/Milhão: {formatNum(country.testsPerOneMillion)}
                  </li>
                  <li>
                    Mortes/Milhão: {formatNum(country.deathsPerOneMillion)}
                  </li>
                </>
              )}
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
