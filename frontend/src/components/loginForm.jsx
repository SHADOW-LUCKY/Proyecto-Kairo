import React from 'react'
/* imports */
import kairo from '../assets/kairo.png'
export default function loginForm() {
  return (
    <div className='h-screen w-full flex justify-center animate-fade-up animate-ease-in'>
        <div className=' w-3/6 lg:w-5/12 self-center bg-white rounded-2xl flex flex-col px-10 py-5'>
            <div>
                <img src={kairo} alt="..." className='w-3/12 md:w-28 mx-auto'/>
                <h1 className='text-center text-black text-lg font-thin'>MEDIA</h1>
            </div>
            <div>
                <h1 className='text-center text-black text-xl lg:text-3xl mt-5 w-3/4 mx-auto'>Bienvenido al panel digital de KARIO Media</h1>
                <p className='text-center text-black w-3/4 mx-auto mt-4'>Por favor ingresa los siguientes datos para ingresar a la plataforma</p>
            </div>
            <div className='mt-5 w-full md:w-3/4 mx-auto'>
			    <label for="username" className="text-black text-xl font-thin">Usuario</label>
			    <input type="text" class="mt-1 border-solid border text-2xl text-black border-black p-1 w-full rounded-xl bg-white border-spacing-1" />
		    </div>
            <div className='mt-5 w-full md:w-3/4 mx-auto'>
			    <label for="password" className="text-black text-xl font-thin">Contraseña</label>
			    <input type="text" class="mt-1 border-solid border text-2xl text-black border-black p-1 w-full rounded-xl bg-white border-spacing-1" />
		    </div>
            <div className='mt-5 mx-auto text-center'>
                <button className='p-4 rounded-full w-80 bg-orange-500' onClick={() => { window.location.href = '/success'}} >Ingresar</button>
                <p className='text-center text-black mt-5 text-sm font-thin'>Tienes problemas para ingresar? Por favor contactarse con asistencia técnica lo más pronto posible</p>
            </div>
        </div>
    </div>
  )
}
