//kilometer to mile conversion component
import React, { useState } from 'react';

function KmToMiles() {
    const a= 1.60934; // 1 mile = 1.60934 kilometers
    const [km, setKm] = useState('');
    const [miles, setMiles] = useState('');

    const handleKmChange = (e) => {
        const kmValue = e.target.value;
        setKm(kmValue);
        if (kmValue) {
            setMiles((kmValue / a).toFixed(2));
        } else {
            setMiles('');
        }
    }
    const handleMilesChange = (e) => {
        const milesValue = e.target.value;
        setMiles(milesValue);
        if (milesValue) {
            setKm((milesValue * a).toFixed(2));
        } else {
            setKm('');
        }
    }
    return (
        <form  style={{ backgroundColor: 'turquoise', padding: '20px', borderRadius: '8px' ,width: '40%', boxSizing: 'border-box', margin: 'auto'}}>
        <div className="km-to-miles" style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
            <h1>Kilometer to Mile Converter</h1>
            <div className="converter">
                <div className="input-group">
                    <label>Kilometers:</label>
                    <input type="number" value={km} onChange={handleKmChange} placeholder="Enter kilometers"/>
                </div>
                <div className="input-group">
                    <label>Miles:</label>
                    <input
                        type="number"
                        value={miles}
                        onChange={handleMilesChange}
                        placeholder="Enter miles"
                    />
                </div>
            </div>
        </div>
        </form>
    );

}
export default KmToMiles;