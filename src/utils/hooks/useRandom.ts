import {
  useState,
  useCallback,
} from 'react'

import getRandomId from 'utils/getRandomId'

export default (prefix?: string): [string, (prefix?: string) => void] => {
  const [random, setRandom] = useState(getRandomId(prefix))
  const setRandomNew = useCallback(() => {
    setRandom(getRandomId(prefix))
  }, [])
  return [random, setRandomNew]
}
