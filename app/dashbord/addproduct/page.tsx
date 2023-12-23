'use client'

import { CustomButton } from '@/components/commen';
import Inputfiled from '@/components/commen/Inputfiled';
import SelectsSection from '../_ui/SelectsSection';
import { useAddproducts } from '@/context/HandelAddproducts';
import Alert from '@/components/commen/Alert';
import CustemFileInput from '@/components/commen/CustemFileInput';
import React, { Suspense } from "react";
import loading from '@/app/loading';

 
const Page = () => {
  const {handleSubmit,formValues,handleChange,handleFileChange , err , file} = useAddproducts() 
     

  return (
    <Suspense fallback={<h1>loding...</h1>}>
    <section className="w-full px-10 ">
      <Alert Errmsg={err} />
      <form onSubmit={handleSubmit}>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`}>
        <Inputfiled
          name="product_name"
          type="text"
          placeholder="ادخل اسم المنتج"
          value={formValues.product_name}
          onChange={handleChange}
          error={""}
        />
        <Inputfiled
          name="product_discrption"
          type="text"
          placeholder="وصف المنتج"
          value={formValues.product_discrption}
          onChange={handleChange}
          error={""}
        />
        <Inputfiled
          name="product_price"
          type="number"
          placeholder="سعر المنتج"
          value={formValues.product_price}
          onChange={handleChange}
          error={""}
        />
        </div>
        <Inputfiled
          name="product_discount"
          type="number"
          placeholder="الخصم"
          value={formValues.product_discount}
          onChange={handleChange}
          error={""}
        />
        <CustemFileInput Errmassage={err} file={file} handleFileChange={ handleFileChange} />
<SelectsSection />
        <CustomButton type="submit" >
          إضافة منتج
        </CustomButton>
      </form>
    </section>
    </Suspense>
  );
};

export default Page;