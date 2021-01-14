import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {CLIENT_URL} from '../Constants';
// import Advice from './SearchBar';

const Main = () => {
    const [randomAdvice, setRandomAdvice] = useState("")
    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await axios.get(CLIENT_URL);
                console.log(res.data)
                const {advice, id} = res.data.slip;
                console.log(id, advice)
                setRandomAdvice(advice);
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    },[]);
    return (
        <div>
            <h1>{randomAdvice}</h1>
        </div>
    )
}

export default Main;