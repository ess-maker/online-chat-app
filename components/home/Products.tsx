import { BsPlus, BsEyeFill } from "react-icons/bs";
import Link from "next/link";
import Sectiontitel from "../commen/Sectiontitel";

const Product = ( ) => {

  return (
    <section className="w-full">
    <Sectiontitel titel={"بعض المنتجات"} />
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-between">
<div className="mx-auto relative mt-11 w-80 transform overflow-hidden group rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
        <div className="absolute top-6 z-10 -right-11 group-hover:right-5 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-teal-500">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            href={`/product/1`}
            className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
  <img className="h-48 w-full object-cover object-center" src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Product Image" />
  <div className="p-4">
    <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
    <p className="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
    <div className="flex items-center">
      <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
      <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
      <p className="ml-auto text-base font-medium text-green-500">20% off</p>
    </div>
  </div>
</div>
    </main>
    </section>
  );
};

export default Product;