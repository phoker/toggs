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

const noOp = () => {}

const getCurrentTheme = theme => themes[theme]

const onClick = (onChange, checked) => e => {
  e.preventDefault()
  onChange(!checked)
}

const getTransformStyle = (checked, down, prevDown, onChange, mid, end) => x => {
  if (x && !down && (down !== prevDown)) {
    x >= mid
      ? onChange(true)
      : onChange(false)
  }
  if (x && down) return `translate3d(${x >= mid ? end : 0}px, 0, 0)`
  return checked
    ? `translate3d(${end}px, 0, 0)`
    : 'translate3d(0, 0, 0)'
}

const calcThresholds = (width, currentTheme) => {
  const { midpoint, endpoint } = currentTheme
  const mid = (width * midpoint)
  const end = (width * endpoint)
  return [ mid, end ]
}

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
  const currentTheme = getCurrentTheme(theme)
  const [ mid, end ] = calcThresholds(width, currentTheme)
  return (
    <>
      <ToggleContainer
        className={className}
        theme={currentTheme}
        checked={checkedProp}
        trueColor={trueColor}
        falseColor={falseColor}
        width={width}
        onClick={onClick(onChange, checkedProp)}
      >
        <Knob
          {...bind()}
          theme={currentTheme}
          checked={checkedProp}
          width={width}
          style={{
            transform: x.interpolate(getTransformStyle(checkedProp, down, prevDown, onChange, mid, end))
          }}
        />
      </ToggleContainer>
    </>
  )
}

Toggs.propTypes = {
  className: PropTypes.string,
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
