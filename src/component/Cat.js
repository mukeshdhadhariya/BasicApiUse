import React, { useState,useEffect } from 'react'

function Cat() {
    const [data, setData] = useState({});

    useEffect(()=>{
      
      async function fetchData() {
  
          let response = await fetch("https://catfact.ninja/fact");
          let result = await response.json(); 
          setData(result);

      }

      fetchData();
},[])
return data
  }

export default Cat