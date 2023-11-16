"use client"


import React from 'react'
import Image from 'next/image'

const Contacts = () => {
  return (
    <div className="contacts p-2 flex-1 overflow-y-scroll">
    <div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
        <div className="w-16 h-16 relative flex flex-shrink-0">
        <Image
src="/"
width={100}
height={100}
alt="user_img"
/>
        </div>
        <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
            <p>Angelina Jolie</p>
            <div className="flex items-center text-sm text-gray-600">
                <div className="min-w-0">
                    <p className="truncate">Ok, see you at the subway in a bit.</p>
                </div>
                <p className="ml-2 whitespace-no-wrap">Just now</p>
            </div>
        </div>
    </div>

</div>
  )
}

export default Contacts