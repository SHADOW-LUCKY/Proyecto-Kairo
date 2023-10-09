import React,{useState} from 'react'
/* imports */
import LoginLoader from './loginLoader'
import LoginForm from './loginForm'
import './css/login.css'

export default function Login() {
    /* useState */  
    const [load, setLoad] = useState(true);
    return (
      <div className='h-screen w-full bglogin' onLoad={() => {
        setTimeout(() => {
          setLoad(false);
        }, 3000);
      }}>

        {load ? <LoginLoader /> : null}
        {!load ? <LoginForm /> : null}
      </div>
    )
}
