import React, { useEffect, useState, useLayoutEffect } from 'react'
import SuperChild from './SuperChild'




export default function Child({ name }) 
{

  useEffect(function () {
    console.log("child useffect")
  },[])

  return <>
    <h2 style={{backgroundColor:"green", color:"white"}}>{name}</h2>
  </>

}
