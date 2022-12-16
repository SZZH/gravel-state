import React, { useState, useEffect, useRef } from 'react'
import useGravelState from '../gravel/index'

const Module2 = () => {
  const [state2, setState2] = useGravelState('state2')
  const [state1, setState1] = useGravelState('state1')

  return (
    <div style={{border: '1px solid #000'}}>
      module2
      <p onClick={() => setState2(Date.now())}>点我改变 state2</p>
      <p>
      state1: {state1}
      </p>
      <p>
      state2: {state2}
      </p>
    </div>
  )
}

export default Module2