import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import { useSpring } from 'react-spring'
import { useGesture } from 'react-with-gesture'

import ToggleContainer from './components/container'
import Knob from './components/knob'
import themes from './themes'
import {
  defaultTrueColor,
  defaultFalseColor,
  defaultWidth,
  usePrevious
} from './components/constants'

const getCurrentTheme = theme => themes[theme]
const noOp = () => {}

const Toggs = ({
  className,
  checked: checkedProp,
  onChange,
  theme,
  trueColor,
  falseColor,
  width = defaultWidth[theme]
}) => {
  const [ down, setDown ] = useState(false)
  const [ { x }, set ] = useSpring(() => ({ x: 0, delay: 0 }))
  const prevDown = usePrevious(down)
  const bind = useGesture(({ down: gestureDown, delta: [ deltaX ] }) => {
    if (Math.abs(deltaX) > 1) setDown(gestureDown)
    set({
      x: gestureDown ? deltaX : 0
    })
  })
  const onClick = e => {
    e.preventDefault()
    onChange(!checkedProp)
  }
  const currentTheme = getCurrentTheme(theme)
  const { midpoint, endpoint } = currentTheme
  const mid = (width * midpoint)
  const end = (width * endpoint)
  const getTransformStyle = x => {
    if (x && !down && (down !== prevDown)) {
      x >= mid
        ? onChange(true)
        : onChange(false)
    }
    if (x && down) return `translate3d(${x >= mid ? end : 0}px, 0, 0)`
    return checkedProp 
    ? `translate3d(${end}px, 0, 0)`
    : 'translate3d(0, 0, 0)'
  }
  return (
    <>
      <ToggleContainer
        className={className}
        theme={currentTheme}
        checked={checkedProp}
        trueColor={trueColor}
        falseColor={falseColor}
        width={width}
        onClick={onClick}
      >
        <Knob
          {...bind()}
          theme={currentTheme}
          checked={checkedProp}
          width={width}
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
  onChange: PropTypes.func,
  theme: PropTypes.oneOf(['material', 'ios']),
  trueColor: PropTypes.string,
  falseColor: PropTypes.string,
  width: PropTypes.number
}

Toggs.defaultProps = {
  checked: false,
  onChange: noOp,
  theme: 'material',
  trueColor: defaultTrueColor,
  falseColor: defaultFalseColor
}

export default memo(Toggs)
