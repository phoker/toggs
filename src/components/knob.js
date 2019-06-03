import styled from 'styled-components'
import { animated } from 'react-spring'
import { defaultDuration } from './constants'

// FULL CREDIT goes to Material Design for styling
// https://github.com/material-components/material-components-web/blob/master/packages/mdc-switch/_variables.scss

const Knob = styled(animated.div)`
  border: ${({ theme: { knobColor, knobRadius }, width }) => `${knobColor} ${knobRadius * width}px solid`};
  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
  top: ${({ theme: { knobPosition: { top } }, width }) => `${top * width}px`};
  left: ${({ theme: { knobPosition: { left } }, width }) => `${left * width}px`};
  right: auto;
  display: block;
  position: absolute;
  box-sizing: border-box;
  width: ${({ theme: { knobWidth }, width }) => `${knobWidth * width}px`};
  height: ${({ theme: { knobHeight }, width }) => `${knobHeight * width}px`};
  transition: transform ${defaultDuration}s cubic-bezier(.4,0,.2,1),
  background-color ${defaultDuration}s cubic-bezier(.4,0,.2,1),
  border-color ${defaultDuration}s cubic-bezier(.4,0,.2,1);
  border-radius: 50%;
  z-index: 1;
  user-select: none;
  cursor: move;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
  &:focus, &:hover, &:active {
    &:before {
      transform: ${({ theme: { knobHoverScale } }) => `scale(${knobHoverScale})`};
    }
  }
  &:before {
    background-color: #FAFAFA;
    position: absolute;
    top: ${({ theme: { knobShadowPosition: { top } }, width }) => `${top * width}px`};
    left: ${({ theme: { knobShadowPosition: { left } }, width }) => `${left * width}px`};
    width: ${({ theme: { knobShadowWidth }, width }) => `${knobShadowWidth * width}px`};
    height: ${({ theme: { knobShadowHeight }, width }) => `${knobShadowHeight * width}px`};
    transform: scale(0);
    transition: transform ${defaultDuration}s cubic-bezier(.4,0,.2,1),
    background-color ${defaultDuration}s cubic-bezier(.4,0,.2,1);
    border-radius: 50%;
    opacity: ${({ checked }) => checked
    ? '.2'
    : '.15'};
    content: "";
  }
`

export default Knob
