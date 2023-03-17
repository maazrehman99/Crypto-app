import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Coins from './Coins'

const Home = () => {
    // let name=""
    // const[name,setName]=useState('name')
    // const[temp,setTemp]=useState(0)
const[coins,setCoins]= useState([])
    useEffect(() => {
        const fetchAllcoins = async ()=>{
          const  { data }= await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=pkr&per_page=20")
          console.log( data)
          setCoins(data)
        }
        fetchAllcoins()
        
      }, [])
  return (
    // <div>
    //  {/* <input type="text" onChange={(e)=>setName(e.target.value)}/>
    //  <input type="email" />
    //  <button onClick={()=>console.log(name)} >press</button>
    //  <h1>{name}</h1> */}

    //  <button onClick={()=>setTemp(temp+1)} >press</button>
    //  <h1>{temp}</h1>
    // </div>
<div>
    {coins.map((i)=>(
        <Coins name={i.name} symbol={i.symbol} key={i.id} />
    ))}
</div>
    
    
  )
}

export default Home