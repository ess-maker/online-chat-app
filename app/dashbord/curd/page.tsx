import React from 'react'
import Tabelelement from '../_ui/Tabelelement'
import { CustomButton } from '@/components/commen'

const Curd = () => {
  return (
    <div className="container mr-4 max-w-7xl mx-auto mt-8">
  <div className="mb-4">
    <h1 className="text-3xl font-bold underline decoration-slate-900"> Creat Product </h1>
    <div className="flex justify-end">
      <CustomButton >
      Creat Product
      </CustomButton>
    </div>
  </div>
  <div className="flex flex-col">
    <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
        <table className="min-w-full">
          <thead>
            <tr>
              <th
                className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                ID</th>
              <th
                className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                إسم المنتج</th>
              <th
                className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                سعر المنتج</th>
              <th
                className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                تم إنشائه</th>
              <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50" colSpan={3} >
                ما يمكنك فعله</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <Tabelelement id={1} productName={'hamza the ebst'} CREATED_AT={'11/2020/89'} productprice={1000} />
            <Tabelelement id={2} productName={'hamza the ebst'} CREATED_AT={'11/2020/89'} productprice={1000} />
            <Tabelelement id={3} productName={'hamza the ebst'} CREATED_AT={'11/2020/89'} productprice={1000} />
            <Tabelelement id={4} productName={'hamza the ebst'} CREATED_AT={'11/2020/89'} productprice={1000} />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  )
}

export default Curd