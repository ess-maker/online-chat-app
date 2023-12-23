import { ChangeEvent } from "react"

type props = {
    Errmassage:string ,
    file:Blob | Uint8Array | ArrayBuffer | null ,
    handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const CustemFileInput = ({Errmassage , file , handleFileChange}:props) => {
  return (
    <div>
    <label className="block text-sm font-medium text-white">
       الصورة 
    </label>
    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
      <div className="space-y-1 text-center">
        <svg className="mx-auto h-12 w-12 text-blue-700" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="flex text-sm text-gray-600">
          <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
             <span className={`${file ? 'text-green-500 pointer-events-none hover:hidden' :  false}`}>
                {file ? 'تم تحميل الملف  '  :  'رفع ملف '}</span>
            <input onChange={handleFileChange} id="file-upload" name="file-upload" type="file" className="sr-only" />
          </label>
          <p className="pl-1 text-blue-700">أو قم بسحب وإفلات الملف هنا</p>
        </div>
        <p className="text-xs text-blue-700">
          PNG، JPG، GIF حتى 10 ميغابايت
        </p>
      </div>
    </div>
    {Errmassage && <p className="text-red-600">{Errmassage}</p>}
  </div>
  )
}

export default CustemFileInput