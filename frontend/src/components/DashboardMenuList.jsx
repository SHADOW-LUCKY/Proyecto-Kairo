import React from 'react'
import { useNavigate } from "react-router-dom";
import {HelpCircle} from '@styled-icons/boxicons-solid/HelpCircle'
import {BugReport} from '@styled-icons/material-sharp/BugReport'
import {DeleteForever} from '@styled-icons/material/DeleteForever'
import {Refresh} from '@styled-icons/evaicons-solid/Refresh'
import {PlusCircleFill} from '@styled-icons/bootstrap/PlusCircleFill'
import {AppIndicator} from'@styled-icons/bootstrap/AppIndicator'
import {useAuth} from "../contexts/AuthContext";
export default function DashboardMenuList() {
    const { deleter, setDelete } = useAuth();
    const navigate = useNavigate();
    const route = window.location.pathname
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
    const exept = <AppIndicator size={28} color='#FF7221'/>
    const exeptopt='Indicadores'

    const navi1 = () => {
        navigate('/reports')
    }
    const navi2 = () => {
        navigate('/dashboard')
    }
    const navi3 = () => {
        navigate('/help')
    }
    const exeptdelete = () => {
        setDelete(!deleter)
    }
    
  return (
      opts.map((item, index) => {
       return  <div key={index} className=' text-black text-xl py-3 my-auto flex justify-center ' 
       onClick ={index < 3 ? 
       null: 
       index === 3 && route === '/reports'  ? 
       navi2: 
       index === 4 && route==='/reports' || route==='/dashboard'?
       navi3:
       index === 4 && route === '/help' ? 
       navi2: 
       index === 3 && route === '/help'?
       navi1: 
       index === 3 && route === '/dashboard'? 
       navi1:
       index === 2 ?
       exeptdelete :
        null}>

        
        { route === '/reports' && index === 3 ? exept : route === '/help' && index === 4 ? exept : comp[index]}
        <p className='ml-2'>{item === 'Añadir'? <label htmlFor="anadir">Añadir</label> : index === 3 && route === '/reports' ? exeptopt : index === 4 && route === '/help' ? exeptopt : item}</p>
        </div>
      })
  )
}
