import styled from 'styled-components'

export const Card = styled.div`
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);

  h2 {
    margin-bottom: 10px;
  }

  ul {
    display: inline-block;
    width: 50%;
  }

  ul li {
    display: block;
  }
`

export const ChartContainer = styled.div`
  height: 8px;
  margin: 0 0 7px 0;
`

export const Bar = styled.div.attrs(props => ({
  style: {
    background: props.color,
    width: `${props.value}%`
  }
}))`
  display: inline-block;
  height: 8px;
`
