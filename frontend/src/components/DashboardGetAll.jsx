import React from 'react'
import {Bars} from '@styled-icons/fa-solid/Bars'
export default function DashboardGetAll() {
  return (
    <div >
        <div className='text-center text-black mt-5'>
            <h1 className='text-4xl'>Panel de Indicadores</h1>
            <p className='text-xl font-thin mt-2'>Aqui puedes visualizar los indicadores propuestos y añadidos por tu equipo de trabajo. Si quieres ver més detalles , dale click a uno de ellos para mas informacion</p>
        </div>
        <div className="flex flex-col overflow-x-auto">
        <div className="text-black">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <th className="px-6 py-4">Indicador</th>
                            <th className="px-6 py-4">Descripción</th>
                            <th className="px-6 py-4">Categoria</th>
                            <th className="px-6 py-4">Fecha de Inicio</th>
                            <th className="px-6 py-4">Fecha de Terminación </th>
                            <th className="px-6 py-4">Fórmula</th>
                            <th className="px-6 py-4">Frecuencia</th>
                            <th className="px-6 py-4">Cumplimiento </th>  
                            <th className="px-6 py-4">Área</th>
                            <th className="px-6 py-4"></th>
                        </thead>
                    </table>
                
                
                
                    
                
                <div className="w-full flex justify-between">
                        <div className ="LBORDER">
                            <div className=" px-6 py-4">Cell</div>
                        </div>
                        <div className="w-full BORDER px-6 py-4">Cell</div>
                        <div className="w-full BORDER px-6 py-4">Cell</div>
                        <div className="w-full BORDER px-6 py-4">Cell</div>
                        <div className="w-full BORDER px-6 py-4">Cell</div>
                        <div className="w-full BORDER px-6 py-4">Cell</div>
                        <div className="w-full BORDER px-6 py-4">Cell</div>
                        <div className="w-full BORDER px-6 py-4">Cell</div>
                        <div className ="RBORDER">
                            <div className="  px-6 py-4">Cell</div>
                        </div>
                        <div className=" px-6 py-4"><Bars size={24} color='#000000'/></div>
                    </div>
               
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