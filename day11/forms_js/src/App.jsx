import React, { useState } from 'react';

function App() {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        // Evaluate the expression
        setDisplay(eval(display).toString());
      } catch  {
        setDisplay('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
    } else {
      setDisplay(display + value);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ];

  return (
    <div
      className="calculator"
      style={{
        width: '350px',
        margin: '50px auto',
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: '#f0f0f0'
      }}
    >
      <h1 style={{ textAlign: 'center' }}>Calculator</h1>
      <input
        type="text"
        value={display}
        readOnly
        className="display"
        style={{
          width: '95%',
          padding: '10px',
          margin: '10px auto',
          fontSize: '24px',
          textAlign: 'right',
          borderRadius: '5px',
          border: '1px solid #ccc'
        }}
      />
      <div
        className="buttons"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '10px',
          marginTop: '20px'
        }}
      >
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            className="btn"
            style={{ padding: '20px', fontSize: '18px' }}
          >
            {btn}
          </button>
        ))}
        <button
          onClick={() => handleClick('C')}
          style={{
            gridColumn: 'span 4',
            padding: '15px',
            fontSize: '18px',
            backgroundColor: '#ff4d4d',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            marginTop: '10px'
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
