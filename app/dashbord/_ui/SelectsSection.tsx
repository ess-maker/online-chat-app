'use client'

import { ActionMeta, createFilter } from "react-select";
import makeAnimated from 'react-select/animated';
import Select from "react-select";
import { colourOptions } from "@/data/colourOptions";
import { sizesOptions } from "@/data/sizesOptions";
import { useAddproducts } from "@/context/HandelAddproducts";
import { CatograysOptions } from "@/data/CatograysOptions";
import { Suspense, useEffect, useState } from "react";

interface Option {
  value: string;
  label: string;
}


const SelectsSection = () => {
  const animatedComponents = makeAnimated();
  const {handleColorChange  , handleSizeChange , handleTypeChange , err} = useAddproducts()

    const id = Date.now().toString();
    const [isMounted, setIsMounted] = useState(false);

    // Must be deleted once
    // https://github.com/JedWatson/react-select/issues/5459 is fixed.
    useEffect(() => setIsMounted(true), []);
  

  return isMounted ? (
    <Suspense fallback={<h1>loding...</h1>}>
    <main className={`grid grid-cols-1 my-6 md:grid-cols-2 lg:grid-cols-3 gap-4`}>
      <Select
        filterOption={createFilter({ ignoreAccents: false })}
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        placeholder='الألوان'
        options={colourOptions}
        onChange={handleColorChange}
       />
      <Select
        filterOption={createFilter({ ignoreAccents: false })}
        closeMenuOnSelect={false}
        components={animatedComponents}
        placeholder='الأحجام'
        isMulti
        options={sizesOptions}
        onChange={handleSizeChange}
       />
      <Select
        filterOption={createFilter({ ignoreAccents: false })}
        closeMenuOnSelect={false}
        components={animatedComponents}
        placeholder='النوعية'
        isMulti
        options={CatograysOptions}
        onChange={handleTypeChange}
       />
    </main>
       {err && <p className="text-base mb-3 text-center text-red-600">يجب ان تتختر هذا الخيار</p>}
       </Suspense>
  ): <h1>loding...</h1>;
};

export default SelectsSection;