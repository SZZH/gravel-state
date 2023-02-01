import React, { useState, useEffect, useRef } from 'react'
import useGravelState, { createGravelState } from '../gravel/index'

const state1Config = createGravelState({
  key: 'state1',
  defaultValue: '1'
})

const Module1 = () => {
  const [state1, setState1] = useGravelState(state1Config)

  console.log('module1 rerender')
  return (
    <div style={{border: '1px solid #000'}}>
      module1
      <p onClick={() => setState1(Date.now())}>点我改变 state1</p>
      state1: {state1}
    </div>
  )
}

export default Module1