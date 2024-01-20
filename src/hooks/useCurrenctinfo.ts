import { useState,useEffect } from "react";


export function useCurrencyinfo(currency:string)
{
    const [data,setData]=useState({})
    useEffect(()=>
    {
fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`).
then((res)=>res.json()).then((result) =>setData(result[currency]) )
   


    },[])
return data;
   
}
