import React, {useEffect, useState} from 'react';
import axios from "axios";


function Data() {
    const [apiData, setApiData] = useState({});
    const [etat, setEtat] = useState(false);
    const id = "4022d88e30e8";
    const auth_key = "MWNiMjY5dWlk404459961993DCA83AE44BC6E3A6F58906952E7BECA0A5B69DC375C964915ACBC0EA536A0639CB73";

    useEffect( () => {
        axios.get("https://shelly-77-eu.shelly.cloud/device/status?id="+id+"&auth_key="+auth_key).then(async (response) => {
            await setApiData(response.data.data.device_status);
            setEtat(response.data.data.device_status.relays[0].ison);
        });
    }, [])

    const switchEtat = () => {
        const FormData = require('form-data');
        let data = new FormData();
        data.append('id', id);
        data.append('turn', etat ? 'off' : 'on');
        data.append('auth_key', auth_key);
        data.append('channel', '0');

        const headers = data.getHeaders ? data.getHeaders() : { 'Content-Type': 'multipart/form-data' };
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://shelly-77-eu.shelly.cloud/device/relay/control',
            headers: {
                ...headers
            },
            data : data
        };
        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
        setEtat(!etat);
    };

    return (
        <div>
            <div>
            {etat === true ? (
                <img src="images/sun.svg" alt="sun" />
            ) : (
                <img src="images/moon.svg" alt="moon" />
            )}
            </div>
            <button onClick={switchEtat}>
               SWITCH
            </button>
            <div>
                <p><u>Overtemperature</u> : {apiData.overtemperature ? 'Oui' : 'Non'}</p>
                <p><u>Temperature</u> : {apiData.temperature}</p>
            </div>
        </div>
    );
}

export default Data;