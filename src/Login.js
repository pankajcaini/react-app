import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'




export default function Login({ set_is_logged_in })
{

  const sendto = useNavigate()
  const IS_LOGGED_IN = localStorage.getItem('IS_LOGGED_IN')
  
  if (IS_LOGGED_IN == "true") {
    sendto('/')
  }


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showError, setshowError] = useState(false)



  function handleLogin(e) {
    e.preventDefault()

    async function login() {

      const config = {
        method: "post",
        url: "http://127.0.0.1:8000/login/",
        data: JSON.stringify({ email, password })
      }

      const response = await axios(config)
      const code = response.data.code
      const USER_ID = response.data.user_id

      if (code == 200) {

        setshowError(false)
        localStorage.setItem('IS_LOGGED_IN', true)
        localStorage.setItem('USER_ID', USER_ID)
        set_is_logged_in(true)
        sendto("/")

      }

      else if (code == 300) {
        setshowError(true)
      }

    }

    login()

  }




  return <div className='container-fluid mt-5'>
    <div className='row justify-content-center'>
      <div className='col-3 p-0'>
        <form className='shadow p-4 bg-white'>
          <div>
            <h2 className='text-center fs-bold text-muted' >LOGIN</h2>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="htmlform-label">Email</label>
            <input type="email" id='email' className="form-control" autoComplete='off' value={email} onChange={(e) => { setEmail(e.target.value) }} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="htmlform-label">Password</label>
            <input type="password" className="form-control" id="password" autoComplete='off' value={password} onChange={(e) => { setPassword(e.target.value) }} />
          </div>
          <button className="btn btn-primary w-100 mt-2 mb-1" onClick={handleLogin} >Login</button>
          {showError ? <p className=' mt-4 fw-bold text-danger text-center'>Email or Password is Incorrect</p> : null}
        </form>
      </div>
    </div>
  </div>
}
