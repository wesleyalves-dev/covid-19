import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-family: 'Roboto', sans-serif;
  }

  ul {
    list-style: none;
  }
`

export const Container = styled.div`
  width: 95%;
  max-width: 900px;
  margin: 0 auto;
  padding-top: 10px;

  header {
    margin-bottom: 20px;
  }
`
