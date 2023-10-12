import { useQuery } from '@tanstack/react-query'
import {getIndicators} from '../api/indicators.js'
import {Bars} from '@styled-icons/fa-solid/Bars'

// contextos
import {useContext} from 'react'
import {useAuth} from '../contexts/AuthContext'

export default function Dashboardmap() {
  const { deleter } = useAuth()
   /* query */  
    const { isLoading, isError, data:Indicators , error } = useQuery({
     queryKey: ["indicators"],
     queryFn: getIndicators,
     refetchOnWindowFocus: false,
   });
   if (isLoading) {
     return <div className="">
         Loading.....
     </div>;
   }else if (isError) {
     return <div>{error.message}</div>;
   }
  return (
    Indicators.map((item ,index) => (
      <tr  key={index}>
      <td className='px-0 '>
        <div className="LBORDER py-5 text-center h-14 px-4">{item.name}</div>
      </td>
       <td className='px-0 '>
        <div className=" BORDER py-5 text-center h-14">{item.description}</div>
       </td>
       <td className='px-0 '>
         <div className=" BORDER py-5 text-center h-14">{item.fecha_init}</div>
       </td>
       <td className='px-0 '>
         <div className=" BORDER py-5 text-center h-14">{item.fecha_end}</div>
       </td>
       <td className='px-0 '>
         <div className=" BORDER py-5 text-center h-14">{item.formula}</div>
       </td>
       <td className='px-0 '>
         <div className=" BORDER py-5 text-center h-14">{item.frecuency}</div>
       </td>
       <td className='px-0 '>
         <div className=" BORDER py-5 text-center h-14">{item.completation}%</div>
       </td>
       <td className='px-0 '>
          <div className={`${deleter? "BORDER" : "RBORDER"} py-5 text-center  h-14 px-4`}>item.area</div>
       </td>
       {deleter? <td className='px-0 '>
          <div className="RBORDER text-center py-2 h-14 px-4">
            <button className='btn '>Eliminar</button>
          </div>
       </td> : null}
     </tr>
      ))
      
  )
}



/* 
<div className=" px-6 py-4"><Bars size={24} color='#000000'/></div>
area
: 
"Tecnología"
completation
: 
75
description
: 
"Desarrollo de una aplicación web"
fecha_end
: 
"2024-03-30"
fecha_init
: 
"2023-10-15"
formula
: 
"E = mc^2"
frecuency
: 
"Semanal"
name
: 
"Proyecto A"
*/