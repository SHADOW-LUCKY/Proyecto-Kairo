import React from 'react'  
/* imports */
import kairo from '../assets/kairo.png'
/* css */
import './css/login.css'
export default function AuthSuccess(){
  return (
   <div className='bglogin h-screen w-full flex justify-center '>
      <div className='h-fit w-3/4 md:w-5/12 self-center bg-white rounded-3xl p-10 animate-fade-up animate-ease-in'>
            <div>
                <img src={kairo} alt="..." className='w-3/12 md:w-20 mx-auto'/>
                <h1 className='text-center text-black text-lg font-thin'>MEDIA</h1>
            </div>
            <div>
                <h1 className='text-center text-black text-3xl mt-5'>Bienvenido de nuevo</h1>
                <img src="https://media.licdn.com/dms/image/C4E03AQGO448nAOrvfw/profile-displayphoto-shrink_800_800/0/1516929468945?e=2147483647&v=beta&t=d5P5hoCOyufB3Qkq935Dn4jIIpyoMVX_FweqCM3erjE" alt="..." className='rounded-full w-28 mx-auto my-5'/>
                <h1 className='text-center text-black text-3xl'>nombre</h1>
                <p className='text-center text-black mt-3 font-thin text-md'>Usuario Administrador</p>
            </div>
      </div>
   </div>
  )
}
