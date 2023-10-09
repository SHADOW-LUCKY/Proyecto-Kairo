import React from 'react'
/* imports */
import kairo from '../assets/kairo.png'
export default function loginForm() {
  return (
    <div className='h-screen w-full flex justify-center animate-fade-up animate-ease-in'>
        <div className='h-3/4 w-3/4 lg:w-1/2 self-center bg-white rounded-2xl flex flex-col p-5'>
            <div>
                <img src={kairo} alt="..." className='w-3/12 md:w-28 mx-auto'/>
                <h1 className='text-center text-black text-lg font-thin'>MEDIA</h1>
            </div>
            <div>
                <h1 className='text-center text-black text-xl lg:text-3xl mt-5 w-3/4 mx-auto'>Bienvenido al panel digital de KARIO Media</h1>
                <p className='text-center text-black w-3/4 mx-auto mt-4'>Por favor ingresa los siguientes datos para ingresar a la plataforma</p>
            </div>
            <div className='mt-5'>
			    <label for="username" className="text-black text-lg">Usuario</label>
			    <input type="text" class="mt-1 border-solid border border-black p-1 w-full rounded-xl bg-white border-spacing-1" />
		    </div>
            <div className='mt-5'>
			    <label for="password" className="text-black text-lg">Contraseña</label>
			    <input type="text" class="mt-1 border-solid border border-black p-1 w-full rounded-xl bg-white border-spacing-1" />
		    </div>
            <div>
                <button className='p-5 text-black'>Ingresar</button>
            </div>
        </div>
    </div>
  )
}
