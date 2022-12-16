import React, { useState, useEffect, useRef } from 'react'
import useGravelState from '../gravel/index'

const Module1 = () => {
  const [state1, setState1] = useGravelState('state1')

  return (
    <div style={{border: '1px solid #000'}}>
      module1
      <p onClick={() => setState1(Date.now())}>点我改变 state1</p>
      state1: {state1}
    </div>
  )
}

export default Module1