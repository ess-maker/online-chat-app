"use client"

import { ChangeEvent, FC } from 'react'
import Image from 'next/image'
import { MdErrorOutline } from 'react-icons/md'

type InputProps =  {
  name: string
  type: 'text' | 'number' | 'email' | 'password'
  label?: string
  value?: string | number
  placeholder: string
  error?: string
  disabled?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Inputfiled:FC<InputProps> = ({error  , label , name , onChange , placeholder , type , disabled , value}
  :InputProps) => {
    return (
      <div className="w-full mb-4" >
      <label htmlFor={name} className="block mb-2  text-base font-medium text-[#07074D]">{label}</label>
      <input onChange={onChange} type={type} name={name} placeholder={placeholder} value={value} 
      className={`w-full rounded-md border  bg-white py-3 px-6 text-base font-medium
       text-[#6B7280] outline-none focus:shadow-md ${error ? 'border-red-600 focus:border-red-600' : 'border-[#e0e0e0] focus:border-[#6A64F1]'}`} />
        {error && error && (
        <span className={`text-red-500 font-medium flex items-center gap-2 tracking-wide text-sm mt-2 ml-1`}>
          <MdErrorOutline color={'#ff5555'} size={20} />
          {error as string}
        </span>
      )}
    </div>
    )
}


export default Inputfiled 

