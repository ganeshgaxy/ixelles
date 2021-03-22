import React from 'react'
import { render } from 'react-dom'
import { recordNow, stopNow } from './play/record'

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const App = () => {
  return (
    <div>
      <button onClick={recordNow}>Record</button>
      <button onClick={stopNow}>Stop</button>
    </div>
  )
}

render(<App />, mainElement)
