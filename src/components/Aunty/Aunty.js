import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';


const Aunty = () => {
    const [house, setHouse] = useContext(RingContext);
    const handleHouseCount = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount)
    }
    return (
        <div>
            <h4>Aunty</h4>
            <p>House : {house}</p>
            <p><small>Ring:{house}</small></p>
            <button onClick={handleHouseCount}>Aunty Magic</button>
        </div>
    );
};

export default Aunty;