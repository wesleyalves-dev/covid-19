import React, { useState } from 'react'

import { ContainerInfo, Popup } from './styles'

export default function ButtonInfo() {
  const [visible, setVisible] = useState(false)

  function handlePopup() {
    setVisible(!visible)
  }

  return (
    <ContainerInfo>
      <Popup visible={visible}>
        <dl>
          <dt>Autor</dt>
          <dd>
            Wesley Alves -{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/AlvesWesley"
            >
              GitHub
            </a>
          </dd>
          <dt>Backend</dt>
          <dd>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/javieraviles/covidAPI"
            >
              GitHub repository
            </a>
          </dd>
          <dt>Extra</dt>
          <dd>Dados atualizados diariamente</dd>
          <dt>Importante!</dt>
          <dd>
            Os dados apresentados nesta página não devem ser encarados como
            fonte oficial de informação
          </dd>
        </dl>
      </Popup>
      <button type="button" onClick={handlePopup}>
        <i className="material-icons">{visible ? 'close' : 'info_outline'}</i>
      </button>
    </ContainerInfo>
  )
}
