import {
  EffectCallback,
  useEffect,
  useRef,
} from 'react'

export default (effect: EffectCallback, deps?: any[]) => {
  const isInitialMount = useRef(true)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      effect()
    }
  }, deps)
}
