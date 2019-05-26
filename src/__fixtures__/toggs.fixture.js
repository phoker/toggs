import React, { useState } from 'react'
import styled from 'styled-components'

import Toggs from './../index'

const Container = styled.div`
  background: #00ffa2;
  width: 100%;
  height: 75vh;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
`

const Example = props => {
  const [ checked, setChecked ] = useState(false)
  return (
    <Container>
      <Toggs
        {...props}
        width={100}
        checked={checked}
        onChange={() => { setChecked(!checked) }}
      />
    </Container>
  )
}

export default [
  {
    component: Example,
    name: 'iOS',
    props: {
      theme: 'ios'
    }
  },
  {
    component: Example,
    name: 'Material',
    props: {
      theme: 'material'
    }
  }
]
