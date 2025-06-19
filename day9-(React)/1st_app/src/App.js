//Indian flag design using React

import React from 'react'
import './App.css'; 

function App() {
  const spokes = Array.from({ length: 24 }, (_, i) => (
    <div
      key={i}
      className="spoke"
      style={{ transform: `rotate(${i * 15}deg)` }}
    />
  ));
  return (
    <>
    <div className="flag">
      <div className="saffron"></div>
      <div className="white">
        <div className="chakra">
          {spokes}
        </div>
      </div>
      <div className="green"></div>
    </div>
    </>

  )
}

export default App
