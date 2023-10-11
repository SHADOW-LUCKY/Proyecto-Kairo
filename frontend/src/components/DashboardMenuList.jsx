import React from 'react'
import {HelpCircle} from '@styled-icons/boxicons-solid/HelpCircle'
import {BugReport} from '@styled-icons/material-sharp/BugReport'
import {DeleteForever} from '@styled-icons/material/DeleteForever'
import {Refresh} from '@styled-icons/evaicons-solid/Refresh'
import {PlusCircleFill} from '@styled-icons/bootstrap/PlusCircleFill'
export default function DashboardMenuList() {
    const opts = [
        'Añadir','Refrescar','Eliminar','Reportar','Ayuda'
    ]
    
    const comp = [
        <PlusCircleFill size={24} color='#FF7221'/>,
        <Refresh size={28} color='#FF7221'/>,
        <DeleteForever size={30} color='#FF7221'/>,
        <BugReport size={32} color='#FF7221'/>,
        <HelpCircle size={28} color='#FF7221'/>
    ]

    
  return (
      opts.map((item, index) => {
       return  <div key={index} className=' text-black text-xl py-3 my-auto flex justify-center '>
        {comp[index]}
        <p className='ml-2'>{item === 'Añadir'? <label htmlFor="anadir">Añadir</label> : item}</p>
        </div>
      })
  )
}
