import Link from "next/link";
import { FC } from "react"
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { BiSolidShow } from "react-icons/bi";




type prop = {
    id:number , productName:string , CREATED_AT:string , productprice:number
}
const Tabelelement:FC<prop> = ({id,
    productName,
    CREATED_AT,
    productprice}) => {
  return (
    <tr>
    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
      <div className="flex items-center">
        {id}
      </div>

    </td>

    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
      <div className="text-sm leading-5 text-gray-900">{productName ||'Create CURD with NodeJS'}
      </div>
    </td>

    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
      <p>{productprice} $</p>
    </td>

    <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
      <span>{CREATED_AT || '2020/11/4'}</span>
    </td>

    <td className="text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200 ">
        <Link href={""}>
    <MdOutlineDeleteOutline className="w-6 h-6 text-red-600 hover:text-red-800" />
        </Link>
    </td>
    <td className="text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200 ">
        <Link href={""}>
        <FaRegEdit className="w-6 h-6 text-indigo-600 hover:text-indigo-900 " />
        </Link>
</td>
<td className="text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200 ">
        <Link href={""}>
        <BiSolidShow  className="w-6 h-6 text-gray-600 hover:text-gray-900 " />
        </Link>
</td>
  </tr>
  )
}

export default Tabelelement