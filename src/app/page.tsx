"use client"
import Image from 'next/image'
import {useState} from "react"

export default function Home() {

  const [count, setCount] = useState(0)
  return (
   <div>
    <h1 className='flex justify-center'>My web</h1>
    <h3>useEffect</h3>
    <h4>React hook</h4>

    <button onClick={()=>(setCount(count+1))}>Counter increment = {count}</button>

   </div>
  )
}
