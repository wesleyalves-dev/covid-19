import React from 'react'

import { GlobalStyle, Container } from './style'

import GlobalData from './components/GlobalData'
import ListCountries from './components/ListCountries'
import ButtonInfo from './components/ButtonInfo'

export default function App() {
  return (
    <Container>
      <GlobalStyle />
      <header>
        <GlobalData />
      </header>
      <ListCountries />
      <ButtonInfo />
    </Container>
  )
}
