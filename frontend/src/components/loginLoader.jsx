import React from 'react'
import kairo from '../assets/kairo.png'

export default function LoginLoader() {
  return (
    <div className='h-screen w-full flex justify-center' >
        <div className='h-fit w-1/12 self-center '>
            <img src={kairo} alt="..." className='w-full h-full animate-pulse' />
        </div>
    </div>
  )
}
