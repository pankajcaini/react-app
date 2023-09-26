import React, { useEffect, useState, useLayoutEffect } from 'react'





export default function SuperChild() 
{
    useEffect(function(){
        console.log("use effect of super-child")
    })

  return <p style={{backgroundColor:"yellow"}}>SuperChild</p>
}
