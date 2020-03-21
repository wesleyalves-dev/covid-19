import styled from 'styled-components'

export const ContainerInfo = styled.div`
  position: fixed;
  bottom: 20px;
  left: 5%;

  button {
    margin: 10px;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background: #1976d2;
    border: none;
    color: white;
    outline: none;
    cursor: pointer;
  }
`

export const Popup = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  padding: 15px;
  max-width: 85%;
  margin: 15px 0;
  background: #eeeeee;
  border: #eeeeee 1px solid;
  border-radius: 5px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);

  dt {
    margin-top: 5px;
    font-weight: 900;
  }
`
