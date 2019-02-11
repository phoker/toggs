import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSpring } from 'react-spring'
import { useGesture } from 'react-with-gesture'

import ToggleContainer from './components/container'
import Knob from './components/knob'
import themes from './themes'

const Toggs = ({ checked: checkedProp, theme }) => {
  const [ checked, setChecked ] = useState(checkedProp)
  const [ down, setDown ] = useState(false)
  const [ { x }, set ] = useSpring(() => ({ x: 0, delay: 0 }))
  const bind = useGesture(({ down: gestureDown, delta: [ deltaX ] }) => {
    if (Math.abs(deltaX) > 1) setDown(gestureDown)
    set({
      x: gestureDown ? deltaX : 0
    })
  })
  const onClick = e => {
    e.preventDefault()
    setChecked(!checked)
  }
  const getTransformStyle = x => {
    if (x && down) {
      x >= 7
        ? setChecked(true)
        : setChecked(false)
      return `translate3d(${x >= 7 ? 14 : 0}px, 0, 0)`
    }
    return checked
    ? 'translate3d(14px, 0, 0)'
    : 'translate3d(0, 0, 0)'
  }
  const currentTheme = themes[theme]
  return (
    <>
      <ToggleContainer
        theme={currentTheme}
        checked={checked}
        onClick={onClick}
      >
        <Knob
          {...bind()}
          theme={currentTheme}
          checked={checked}
          style={{
            transform: x.interpolate(getTransformStyle)
          }}
        />
      </ToggleContainer>
    </>
  )
}

Toggs.propTypes = {
  checked: PropTypes.bool,
  theme: PropTypes.oneOf(['material', 'ios'])
}

Toggs.defaultProps = {
  checked: false,
  theme: 'material'
}

export default Toggs
