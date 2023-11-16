"use client"

import { ChangeEvent, FC } from 'react'
import Image from 'next/image'

type InputProps =  {
  name: string
  type: 'text' | 'number' | 'email' | 'password'
  label?: string
  value?: string | number
  placeholder: string
  error: boolean
  disabled?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  starter_icon:string
  end_icon:string

}

const Inputfiled:FC<InputProps> = ({error ,end_icon , starter_icon , label , name , onChange , placeholder , type , disabled , value}
  :InputProps) => {
    return (
    <div role='input' className="w-full">
    <label htmlFor={name} className="mb-2 px-[18.75rem] text-sm font-medium text-primary_700 sr-only dark:text-white">{label}</label>
    <div className="relative">
        {starter_icon && <div className="absolute inset-y-0 start-0 top-1/2 transform -translate-y-1/2 flex items-center ps-3 pointer-events-none">
        <Image
src={starter_icon}
width={21}
height={21}
alt="starter_icon"
/>
        </div>}
        <input
         type={type} 
         id={name}
         onChange={() => onChange}
          className={`rounded-full py-2 pr-6 pl-10 w-full border border-gray-800 focus:border-gray-700 bg-gray-800 focus:bg-gray-900 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in`}
          placeholder={placeholder} required />
        {end_icon && <div className="absolute end-2.5  top-1/2 transform -translate-y-1/2 pointer-events-none">
        <Image
src={end_icon}
width={21}
height={21}
alt="User Icon"
className=''
/>
        </div>}
    </div>
    </div>
    )
}


export default Inputfiled 

