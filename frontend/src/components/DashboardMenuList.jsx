import React from 'react'

export default function DashboardMenuList() {
    const opts = [
        'Añadir','Refrescar','Eliminar','Reportar','Ayuda'
    ]
    const components = [
        'PlusCircleFill',
        'Refresh',
        'DeleteForever',
        'BugReport',
        'HelpCircle'
    ]
    
  return (
      opts.map((item, index) => {
       return  <div key={index} className='text-center text-black text-xl cursor-pointer py-3 my-auto flex'>
        
        {item}
        </div>
      })
  )
}
