import Link from 'next/link'
import { FaRegUserCircle } from "react-icons/fa";
import React, { Suspense } from 'react'
import { CustomButton } from '@/components/commen';
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { FaCity } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import Skeleton_Loader from './Skeleton_Loader';




const page = () => {
  return (
    <div className='w-full'>
        <h1 className="text-xl font-bold text-white capitalize dark:text-white" >Manage Users</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 lg:gap-y-4'>
        <Suspense fallback={<Skeleton_Loader />}>
    <div className="bg-white rounded overflow-hidden shadow-lg mr-2">
                    <div className="text-center p-6 bg-gray-800 border-b">
                    <FaRegUserCircle aria-hidden="true" role="img" className="h-24 w-24 text-white rounded-full mx-auto"  />
                    <p className="pt-2 text-lg font-semibold text-gray-50">John Doe</p>
                    <p className="text-sm text-gray-100">John@Doe.com</p>
                    </div>
                    <Link className="border-b px-4 py-2 hover:bg-gray-100 flex justify-between items-center" href="/account/campaigns" >
                                <FaPhoneAlt  className="w-5 h-5" />
                                <p className="text-sm font-medium text-gray-800 leading-none">
                                    0668621987
                                </p>
                        </Link>
                        <Link className="border-b px-4 py-2 hover:bg-gray-100 flex justify-between items-center" href="/account/campaigns" >
                                <MdOutlineRealEstateAgent className="w-5 h-5" />
                                <p className="text-sm font-medium text-gray-800 leading-none">
                                    setife
                                </p>
                        </Link>
                        <Link className="border-b px-4 py-2 hover:bg-gray-100 flex justify-between items-center" href="/account/campaigns" >
                                <FaCity className="w-5 h-5" />
                                <p className="text-sm font-medium text-gray-800 leading-none">
                                    hachama
                                </p>
                        </Link>
    </div>           
        </Suspense>
    </div>
    </div>
  )
}

export default page