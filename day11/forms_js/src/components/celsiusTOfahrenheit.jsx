//celsius to fahrenheit component
import React, { useState } from 'react';

function CelsiusToFahrenheit() {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');
    const [result, setResult] = useState("");

    const handleCelsiusChange = (e) => {
        const celsiusValue= e.target.value;
        setCelsius(celsiusValue);
        const fahrenheitValue = (celsiusValue * 9/5) + 32;
        setFahrenheit(fahrenheitValue);
        setResult(`${celsiusValue}°C is equal to ${fahrenheitValue.toFixed(2)}°F`);
    }
    const handleFahrenheitChange = (e)=> {
        const fahrenheitValue= e.target.value;
        setFahrenheit(fahrenheitValue);
        const celsiusValue = (fahrenheitValue - 32) * 5/9;
        setCelsius(celsiusValue);
        setResult(`${fahrenheitValue}°F is equal to ${celsiusValue.toFixed(2)}°C`);
    }
    return (
        <form style={{ backgroundColor: 'lightblue', padding: '20px', borderRadius: '8px', width: '40%', boxSizing: 'border-box', margin: 'auto' }}>
            <div className="celsius-to-fahrenheit" style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
                <h1>Celsius to Fahrenheit Converter</h1>
                <div className="converter">
                    <div className="input-group">
                        <label>Celsius:</label>
                        <input type="number" value={celsius} onChange={handleCelsiusChange} placeholder="Enter Celsius" />
                    </div>
                    <div className="input-group">
                        <label>Fahrenheit:</label>
                        <input type="number" value={fahrenheit} onChange={handleFahrenheitChange} placeholder="Enter Fahrenheit" />
                    </div>
                </div>
                {result && <p>{result}</p>}
            </div>
        </form>
    );
}
export default CelsiusToFahrenheit;