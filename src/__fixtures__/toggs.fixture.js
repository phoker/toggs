import React, { useState } from 'react'
import Toggs from './../index';

const Example = () => {
  const [ checked, setChecked ] = useState(false)
  const [ width, setWidth ] = useState(0)
  return (
    <>
      <Toggs
        checked={checked}
        width={parseInt(width, 10)}
        onChange={() => { setChecked(!checked) }}
        theme="ios"
      />
      <input
        type="range"
        min="0"
        max="100"
        value={width}
        step="10"
        onChange={({ target: { value }}) => { setWidth(value) }}
      />
    </>
  )
}

export default {
  component: Example,
  props: {
    theme: 'ios'
  }
}