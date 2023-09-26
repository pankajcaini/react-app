import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Protected({Component}) 
{
  const navigate = useNavigate()
  const is_user_logged_in = localStorage.getItem('IS_LOGGED_IN')
  if(is_user_logged_in == "true"){
    console.log("return component from protected component")
    return <Component/>
  }else{
    return navigate('/login')
  }
}
