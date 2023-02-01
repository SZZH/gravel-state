import { useState, useMemo, useRef } from 'react'
import Store from './store'

const store = new Store()

const useGravelState = (gravelStateConfig: any) => {
  const {
    setReceiver,
    getState,
    setState
  } = store
  const { key } = gravelStateConfig
  const [gravelState, setGravelState] = useState(getState(key))

  useMemo(() => {
    setReceiver(key, setGravelState)
  }, [])

  return [
    gravelState,
    (value: any) => setState(key, value)
  ]
}

export const createGravelState = (config: {
  key: string
  defaultValue: unknown
}) => {
  return config
}

export default useGravelState