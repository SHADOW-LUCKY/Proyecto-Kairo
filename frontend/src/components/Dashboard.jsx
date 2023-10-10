import React,{useState} from 'react';
/* images */
import kairo from '../assets/kairo.png'
/* components */
import DashboardMenuList from './DashboardMenuList';

export default function Dashboard() {
    const [open, setOpen] = useState(false)
    return (
      <div className='w-full h-screen bg-white'>
        <div className='bg-white py-3 fixed top-0 left-0 right-0 shadow-md'>
            <div className='flex justify-between items-center md:hidden'>
                <button className='ml-4 ' onClick={() => setOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-black w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
                <div>
                    <img src={kairo} alt="..." className='w-8 h-8 mr-4' />
                </div>

            </div>
            <div className='hidden md:flex'>
                <div className='flex w-8/12  justify-between first-letter:'>
                    <div className='text-center text-black text-xl hover:bg-orange-400 cursor-pointer py-3 justify-self-center'>Añadir</div>
                    <div className='text-center text-black text-xl hover:bg-orange-400 cursor-pointer py-3 justify-self-center'>Refrescar</div>
                    <div className='text-center text-black text-xl hover:bg-orange-400 cursor-pointer py-3 justify-self-center'>Eliminar</div>
                    <div className='h-8'>
                        <img src={kairo} alt="..." className='h- my-auto' />
                    </div>
                    <div className='text-center text-black text-xl hover:bg-orange-400 cursor-pointer py-3 justify-self-center'>Reportar</div>
                    <div className='text-center text-black text-xl hover:bg-orange-400 cursor-pointer py-3 justify-self-center'>Ayuda</div>
                </div>
                <div>

                </div>
            </div>
        
  
        <div className={`${!open && "hidden"} bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`} onClick={() => setOpen(false)}></div>
  
        <div className={`${open ? "w-80" : "w-0"} bg-white  min-h-screen fixed top-0 left-0 transition-all duration-300`}>
          <div className={`${!open && "hidden"} pt-3`}>
            <button className='ml-4  text-black mb-14' onClick={() => setOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <DashboardMenuList/>
          </div>
        </div>
      </div>
      </div>
    )
}
