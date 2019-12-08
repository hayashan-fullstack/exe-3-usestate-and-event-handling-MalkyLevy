
import React, { useState , useRef } from 'react';

// --without restart--
export const App = (props) => {
    const [counterMin, setCounterMin] = useState(0)
    const [counterSec, setCounterSec] = useState(0)
    // console.log(counterMin)
    // console.log(counterSec)
    const timeout = setTimeout(() => {
        setCounterSec(counterSec + 1)
        if (counterSec == 59) {
            setCounterSec(0)
            setCounterMin(counterMin + 1)
        }
    }, 1000)

    return (
        <div style={{ margin: '20%' }}>
            <h1> Timer </h1>
            <h2> {counterMin} : {counterSec} </h2>
            <br />
        </div>
    )

}
