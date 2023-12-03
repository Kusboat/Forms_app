import React, { useState } from 'react'

function Forms() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const data = [name, email, password]
    const data1 = ['Emmanuel', "kusboat@live.com", 1234]

    const handleName =  (e) => setName(e.target.value)
    const handleEmail =  (e) => setEmail(e.target.value)
    const handlePassword =  (e) => setPassword(e.target.value) 
    const handleSubmit = (e) => {
        data == data1 ? alert(`Welcome, ${name}`) : alert(`Sorry, ${name} does not exist`)
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
            <button type='submit' >Login</button>
        </div>
        
    </form>
  )
}

export default Forms