import { useState,useEffect } from "react";

interface CurrencyInfo {
    [key: string]: number;
  }
  
export function useCurrencyinfo(currency:string):CurrencyInfo
{
    const [data,setData]=useState({})
    useEffect(()=>
    {
fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`).
then((res)=>res.json()).then((result) =>setData(result[currency]) )
   


    },[currency])
return data;
   
}
