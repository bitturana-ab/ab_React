import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    const [data,setData] = useState({})
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    let newUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    useEffect(()=>{
        fetch(newUrl)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        console.log(data);
    },[currency])
    console.log(data)
    return data
}
export default useCurrencyInfo;