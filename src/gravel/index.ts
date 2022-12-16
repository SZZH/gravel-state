import { useState, useMemo, useRef } from 'react'
import Store from './store'

const store = new Store()

const useGravelState = (key: string) => {
  const {
    setReceiver,
    getState,
    setState
  } = store
  const [gravelState, setGravelState] = useState(getState(key))

  useMemo(() => {
    setReceiver(key, setGravelState)
  }, [])

  return [
    gravelState,
    (value: any) => setState(key, value)
  ]
}

export default useGravelState