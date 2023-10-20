import React, {useEffect, useState} from 'react';
import axios from "axios";


function Data() {
    const [ison, setIson] = useState("off")
    const [etat, setEtat] = useState(false);
    async function toggle(ison) {
        try {
            const response = await axios.post(`http://192.168.1.100/relay/0?turn=${etat ? 'on' : 'off'}`);
        } catch (error) {
            console.error(error);
        }
    }
    const toggleEtat = () => {
        setEtat(!etat);
        toggle(ison)
    }

    return (
        <div>
            <div>
            {etat ? (
                <img src="images/sun.svg" alt="sun" />
            ) : (
                <img src="images/moon.svg" alt="moon" />
            )}
            </div>
            <button onClick={toggleEtat}>
               SWITCH
            </button>
        </div>
    );
}

export default Data;