import React, { useState } from 'react'

function Forms() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const data = [name, email, password]

    const handleName =  (e) => setName(e.target.value)
    const handleEmail =  (e) => setEmail(e.target.value)
    const handlePassword =  (e) => setPassword(e.target.value) 
    const handleSubmit = (e) => {
        console.log(data);
        e.preventDefault();
        
    }   
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Name:
            <input type="text" value={name} onChange={handleName} />
            </label>
        </div>

        <div>
            <label>E-mail:
            <input type="email" value={email} onChange={handleEmail} />
            </label>
        </div>
        

        <div>
            <label>Password:
            <input type="password" value={password} onChange={handlePassword} />
            </label>
        </div>
        
        <div>
            <button type='submit' >SUBMIT</button>
        </div>
        
    </form>
  )
}

export default Forms