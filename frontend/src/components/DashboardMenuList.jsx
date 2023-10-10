import React from 'react'

export default function DashboardMenuList() {
    const opts = [
        'Añadir','Refrescar','Eliminar','Reportar','Ayuda'
    ]
    
  return (
      opts.map((item, index) => {
       return  <div key={index} className='text-center text-black text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2'>{item}</div>
      })
  )
}
