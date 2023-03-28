import { Button, TextField } from '@mui/material'
import { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { authenticateUser } from './auth.util'

export default function Login() {
  useLayoutEffect(()=>{
    localStorage.getItem('isAuthenticated') && navigate('/home')
  },[])
  const navigate = useNavigate();
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>Login</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          console.log('is this working?')
          const formData = new FormData(e.currentTarget)
          const email = formData.get('email')
          const password = formData.get('password')
          if (authenticateUser(email, password)) {
            console.log('user is authenticated')
            localStorage.setItem('isAuthenticated', true)
            navigate('/home');
          } else {
            console.log('user is not authenticated')
          }
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            name="email"
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            name="password"
          />
          <Button variant="contained" type="submit">
            Login
          </Button>
        </div>
      </form>
    </div>
  )
}
