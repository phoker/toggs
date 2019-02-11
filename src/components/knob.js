import styled from 'styled-components'
import { animated } from 'react-spring'
import { defaultDuration } from './constants'

const Knob = styled(animated.div)`
  border: ${({ theme: { knobColor } }) => `${knobColor} 10px solid`};
  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
  top: ${({ theme: { knobPosition: { top } } }) => `${top}`};
  left: ${({ theme: { knobPosition: { left } } }) => `${left}`};
  right: auto;
  display: block;
  position: absolute;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
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
    top: -24px;
    left: -24px;
    width: 48px;
    height: 48px;
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
