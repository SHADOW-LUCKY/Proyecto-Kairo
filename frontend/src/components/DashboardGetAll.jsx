import React from 'react'
import Dashboardmap from './Dashboardmap'

export default function DashboardGetAll() {

/* return */
  return (
    <div >
        <div className='text-center text-black mt-5'>
            <h1 className='text-4xl'>Panel de Indicadores</h1>
            <p className='text-xl font-thin mt-2'>Aqui puedes visualizar los indicadores propuestos y añadidos por tu equipo de trabajo. Si quieres ver més detalles , dale click a uno de ellos para mas informacion</p>
        </div>
        <div className="flex flex-col overflow-x-auto">
        <div className="text-black">
            <div className="inline-block min-w-full px-8">
            <div className="overflow-x-auto">
                <table className="w-full ">
                  <thead >
                      <th><div className="py-4">Indicador</div></th>    
                      <th><div className="py-4">Descripción</div></th>    
                      <th><div className="py-4">Fecha de Inicio</div></th>    
                      <th><div className="py-4">Fecha de Terminación </div></th>    
                      <th><div className="py-4">Fórmula</div></th>    
                      <th><div className="py-4">Frecuencia</div></th>    
                      <th><div className="py-4">Cumplimiento </div></th>    
                      <th><div className="py-4">Área</div></th>    
                       
                  </thead>
                  <tbody className='getall'>
                      <Dashboardmap /> 
                  </tbody>
                </table>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

/*
Indicador
Descripción
Categoria
Fecha de Inicio
Fecha de Terminación 
Fórmula
Frecuencia
Cumplimiento 
Área
*/