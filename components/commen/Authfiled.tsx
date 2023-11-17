'use client'


import { ChangeEvent } from "react"


type InputProps =  {
    name: string
    type: 'text' | 'password'
    label?: string
    value?: string | number
    placeholder: string
    error: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void  
  }
  
const Authfiled = ({name,type,label,value,placeholder,error,onChange}:InputProps) => {
  return (
    <div>
    <label htmlFor={name}className= {`${error.length > 0 ? 'text-[#ff5555]' : 'text-gray-700'} block text-sm font-medium `}>
      {error.length > 0 ? error : label}</label>
    <input onChange={onChange} value={value} placeholder={placeholder} type={type} id={name} name={name} 
    className= {`${error.length > 0 ? 'border-[#ff5555] outline-[#ff5555]' : ''} mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300`}/>
  </div>
  )
}

export default Authfiled