//area of circle component
import React, { useState } from 'react';

function AreaOfCircle() {
    const [r,setR] = useState('');
    const [area,setArea] = useState('');
    const pi = Math.PI; // Value of Pi
    const handleRChange = (e) => {
        const rValue = e.target.value;
        setR(rValue);
        if (rValue) {
            setArea((pi * rValue * rValue).toFixed(2));
        } else {
            setArea('');
        }
    }
    return (
        <form style={{ backgroundColor: 'lightcoral', padding: '20px', borderRadius: '8px', width: '40%', boxSizing: 'border-box', margin: 'auto' }}>
            <div className="area-of-circle" style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
                <h1>Area of Circle Calculator</h1>
                <div className="input-group">
                    <label>Radius (r):</label>
                    <input type="number" value={r} onChange={handleRChange} placeholder="Enter radius" />
                </div>
                {area && <p>Area of Circle: {area} square units</p>}
            </div>
        </form>
    );
}
export default AreaOfCircle;
