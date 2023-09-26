import React, { useEffect, useState,useLayoutEffect } from 'react'
import Child from './Child'







export default function Parent() 
{
    const [name, setName] = useState("initial value of name")

    useEffect(function () 
    { 
        console.log("parent useffect")
        
    },[])

    
    return <>
    <h1 style={{backgroundColor:"red"}}>Parent</h1>
    <Child name={name}/>
    </>
}
