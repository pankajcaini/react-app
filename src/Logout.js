import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Logout({set_is_logged_in}) 
{


  const navigate = useNavigate()

  useEffect(function () 
  {
    localStorage.removeItem('IS_LOGGED_IN')
    localStorage.removeItem('USER_ID')
    set_is_logged_in(false)
    navigate("/")
  })


}
