//pounds to kg component
import React, { useState } from 'react';

function PoundsToKg() {
    const [pounds,setPounds] = useState(0);
    const [kg,setKg] = useState(0);
    const [result, setResult] = useState("");
    const a = 0.453592; // 1 pound = 0.453592 kilograms

    const handlePoundsChange= (e) => {
        const poundsValue = e.target.value;
        setPounds(poundsValue);
        const kgValue = (poundsValue* a).toFixed(2);
        setKg(kgValue);
        setResult(`${poundsValue} pounds is equal to ${kgValue} kilograms`);
        }
    const handleKgChange = (e) => {
        const kgValue = e.target.value;
        setKg(kgValue);
        const poundsValue = (kgValue / a).toFixed(2);
        setPounds(poundsValue);
        setResult(`${kgValue} kilograms is equal to ${poundsValue} pounds`);
        }
    return (
        <form style={{ backgroundColor: 'lightgreen', padding: '20px', borderRadius: '8px', width: '40%', boxSizing: 'border-box', margin: 'auto' }}>
            <div className="pounds-to-kg" style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
                <h1>Pounds to Kilograms Converter</h1>
                <div className="converter">
                    <div className="input-group">
                        <label>Pounds:</label>
                        <input type="number" value={pounds} onChange={handlePoundsChange} placeholder="Enter pounds" />
                    </div>
                    <div className="input-group">
                        <label>Kilograms:</label>
                        <input type="number" value={kg} onChange={handleKgChange} placeholder="Enter kilograms" />
                    </div>
                </div>
                {result && <p>{result}</p>}
            </div>
        </form>
    );
}
export default PoundsToKg;