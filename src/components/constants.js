import { useRef, useEffect } from 'react'

export const defaultDuration = 0.3

export const defaultTrueColor = '#14D790'

export const defaultFalseColor = '#000000'

export const defaultWidth = {
  material: 34,
  ios: 36
}

export const usePrevious = value => {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}
