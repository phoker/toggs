import styled from 'styled-components'
import { defaultDuration } from './constants'

const ToggleContainer = styled.div`
  position: relative;
  width: ${({ theme: { width } }) => `${width}`};
  height: ${({ theme: { height } }) => `${height}`};
  border-radius: 50%;
  outline: none;
  user-select: none;
  &:before {
    background-color: ${({ checked, trueColor, falseColor }) =>
      checked
        ? trueColor
        : falseColor
    };
    opacity: .5;
    display: block;
    position: absolute;
    transition: opacity ${defaultDuration}s cubic-bezier(.4,0,.2,1),
    background-color ${defaultDuration}s cubic-bezier(.4,0,.2,1),
    border-color ${defaultDuration}s cubic-bezier(.4,0,.2,1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: ${({ checked, trueColor, falseColor }) => 
      `${checked ? trueColor : falseColor} 1px solid`
    };
    border-radius: ${({ theme: { containerRadius } }) => `${containerRadius}`};
    opacity: .38;
    content: '';
  }
`

export default ToggleContainer
