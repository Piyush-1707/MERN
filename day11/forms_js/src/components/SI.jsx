//simple interest calculator component
import React, { useState } from 'react';

function SimpleInterest() {
    const [principal, setPrincipal] = useState('');
    const [rate, setRate] = useState('');
    const [time, setTime] = useState('');
    const [interest, setInterest] = useState('');

    const calculateInterest = () => {
        if (principal && rate && time) {
            const si = (principal * rate * time) / 100;
            setInterest(si.toFixed(2));
        } else {
            setInterest('');
        }
    };

    return (
        <form style={{ backgroundColor: 'lightblue', padding: '20px', borderRadius: '8px', width: '40%', boxSizing: 'border-box', margin: 'auto' }}>
            <div className="simple-interest" style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
                <h1>Simple Interest Calculator</h1>
                <div className="input-group">
                    <label>Principal (P):</label>
                    <input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} placeholder="Enter principal amount" />
                </div>
                <div className="input-group">
                    <label>Rate of Interest (R):</label>
                    <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} placeholder="Enter rate of interest" />
                </div>
                <div className="input-group">
                    <label>Time (T in years):</label>
                    <input type="number" value={time} onChange={(e) => setTime(e.target.value)} placeholder="Enter time in years" />
                </div>
                <button type="button" onClick={calculateInterest}>Calculate Interest</button>
                {interest && <p>Simple Interest: {interest} units</p>}
            </div>
        </form>
    );
}
export default SimpleInterest;