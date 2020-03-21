import React from 'react'

import { ContainerInput } from './styles'

export default function Search({ ...rest }) {
  return (
    <ContainerInput>
      <input {...rest} />
      <i className="material-icons">search</i>
    </ContainerInput>
  )
}
