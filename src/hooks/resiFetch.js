import React, { useState } from 'react';
import axios from 'axios';
const resiFetch = () => {
    const [apiData, setApiData] = useState()
    const getData=resident=>{
        axios.get(resident)
        .then(res=>setApiData(res.data))
        .catch(err=>console.log(err))
    }
  return [apiData,getData];
}

export default resiFetch;