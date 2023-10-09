import React, { useContext} from 'react'  
import {TempContext} from '../contexts/TempContext';
export default function AuthSuccess() {
  const { value } = useContext(TempContext);
  return (
    <div>{value}</div>
  )
}
