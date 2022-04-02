import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

export const RingContext = createContext('Ring');

const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const ornaments = 'kada matir Ring'
    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    // const house = 7;
    return (
        // <RingContext.Provider value={[ornaments, house]}>
        <RingContext.Provider value={[house, setHouse]}>
            <div className='grandpa'>
                <h3>Grand pa</h3>
                <button onClick={handleBuyAHouse}>Buy a house</button>
                <p>House : {house}</p>
                <div style={{ display: 'flex' }}>
                    <Father house={house} ornaments={ornaments}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </div>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;