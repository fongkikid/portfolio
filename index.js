import React, { useState } from 'react'
import { render } from 'react-dom'

let Portfolio = () => {
  let [page, setPage] = useState('home')


  return (
    <div>
      <div style={{
        position: 'absolute',
        opacity: page === 'home' ? 1 : 0,
        backgroundColor: page === 'home' ? 'green' : 'rgba(0, 0, 0, 0)',
        transition: 'all 1s ease',
        zIndex: page === 'home' ? 1 : 0,
      }}>
        <h1>home page</h1>
        <hr />

        <button onClick={() => setPage('cv')}>
          go to cv
        </button>
      </div>
      <div style={{
        position: 'absolute',
        opacity: page === 'cv' ? 1 : 0,
        backgroundColor: page === 'home' ? 'blue' : 'rgba(0, 0, 0, 0)',
        transition: 'all 1s ease',
        zIndex: page === 'cv' ? 1 : 0,
      }}>
        <h1>cv page</h1>
        <hr />

        <button onClick={() => setPage('home')}>
          go to home
          </button>
      </div>
    </div>
  )
}

render(
  <Portfolio />,
  document.getElementById('root')
)