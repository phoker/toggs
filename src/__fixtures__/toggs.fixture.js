import React, { useState } from 'react'
import Toggs from './../index';

const Example = () => {
  const [ checked, setChecked ] = useState(false)
  return (
    <Toggs
      checked={checked}
      onChange={() => { setChecked(!checked) }}
    />
  )
}

export default {
  component: Example,
  props: {
    theme: 'ios'
  }
}