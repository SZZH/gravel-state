import React, { useState, useEffect, useRef } from 'react'
import useGravelState, { createGravelState } from '../gravel/index'

const state2Config = createGravelState({
  key: 'state2',
  defaultValue: '2'
})

const Module2 = () => {
  const [state2, setState2] = useGravelState(state2Config)
  console.log('module2 rerender')
  return (
    <div style={{border: '1px solid #000'}}>
      module2
      <p onClick={() => setState2(Date.now())}>点我改变 state2</p>
      <p>
      state2: {state2}
      </p>
    </div>
  )
}

export default Module2