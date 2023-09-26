import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'









export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()


  async function insert_new_user_data(email,password){

    const config = {
      method:'post',
      url:'http://127.0.0.1:8000/new_user/',
      data:JSON.stringify({email,password})
    }
    const response = await axios(config)
    const status_code = response.data.status
    if(status_code == 200){
      navigate("/login")
    }
  }

  function create_new_account(e){
    e.preventDefault()
    insert_new_user_data(email,password)
  }
  

  return <div className='container-fluid mt-5 '>
  <div className='row justify-content-center'>
    <div className='col-3 p-0'>
      <form className='p-4  bg-white shadow-sm'>
        <div>
          <h3 className='text-center fs-bold text-muted'>Create Account</h3>
        </div>
        <div className="mb-3 mt-4">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id='email' className="form-control rounded-0" autoComplete='off' value={email} onChange={function(e){setEmail(e.target.value)}}/>
        </div>
        <div className="mb-3 mt-4">
          <label htmlFor="password" className="form-label">Create a Password</label>
          <input type="password" className="form-control rounded-0" id="password" autoComplete='off' value={password} onChange={function(e){setPassword(e.target.value)}}/>
        </div>
        <button className="btn btn-primary w-100 mt-2 mb-1 rounded-0" onClick={create_new_account}>Create Account</button>
      </form>
    </div>
  </div>
</div>
}
