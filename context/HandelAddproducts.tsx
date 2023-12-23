"use client"

import { AddproductsContextType, TypeFormValues, selected_OptionTypes } from '@/types/types';
import { db, storage } from '@/app/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { createContext, ReactNode, useState , useContext } from 'react';
import { ActionMeta } from 'react-select';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
const AddproductsContext = createContext<AddproductsContextType | null>(null);

export const AddproductsProvider = ({ children }: { children: ReactNode }) => {
  const [file, setFile] = useState(null);
  const [err, seterr] = useState<string>('')
  const [formValues, setFormValues] = useState<TypeFormValues>({
    product_name: '',
    product_discrption: '',
    product_price: 0,
    product_discount: '',
  });
  const selectedColours:string[]  = [];
  const selectedSizes:string[]  = [];
  const selectedTypes:string[]  = [];

  const handleFileChange = (event:any) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    HandleValidation()   
  };

  const handleChange = (event:any) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const HandleValidation = async ( ) => {
    if (selectedColours.length !> 1) {
     return  seterr('selectedColours');
    } else 
    if (!formValues.product_name || !formValues.product_price || !formValues.product_discrption ||
      !formValues.product_discount) {
      seterr('you must fill all the fields');
    } else if (!file) {
      seterr('No file selected');
    } else if (selectedColours) {
      seterr('selectedColours');
    } else {
      seterr('')
      try {
            // Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${formValues.product_name + date}`);
      
        
        await uploadBytesResumable(storageRef, file).then(() => {
          getDownloadURL(storageRef).then(async (downloadURL) => {
            try {
              // Create product on Firestore
              await addDoc(collection(db, "products"), {
                ...formValues,
                selectedColours:selectedColours,
                selectedSizes:selectedSizes,
                selectedTypes:selectedTypes,
                productimg: downloadURL
              });
              alert('hamza is the best')
            } catch (err) {
              console.error(err);
            }
          });
        });
      } catch (err) {
        console.error(err);
      }
    }

  };

  const handleColorChange = (selectedOptions: readonly selected_OptionTypes[], actionMeta: ActionMeta<selected_OptionTypes>) => {
    {selectedOptions && selectedOptions.forEach((option:selected_OptionTypes) => {
      selectedColours.push(option.value);
    });}
  };

  const handleSizeChange = (selectedOptions: readonly selected_OptionTypes[], actionMeta: ActionMeta<selected_OptionTypes>) => {
    {selectedOptions && selectedOptions.forEach((option:selected_OptionTypes) => {
      selectedSizes.push(option.value);
    });}
  };

  const handleTypeChange = (selectedOptions: readonly selected_OptionTypes[], actionMeta: ActionMeta<selected_OptionTypes>) => {
    {selectedOptions && selectedOptions.forEach((option:selected_OptionTypes) => {
      selectedTypes.push(option.value);
    });}
  };


  
  const contextValue: AddproductsContextType = {
    file,
    formValues,
    handleSubmit,
    handleChange,
    handleFileChange,
    err: err || '',
   selectedColours ,
  selectedSizes ,
   selectedTypes,
   handleTypeChange,
    handleColorChange,
    handleSizeChange,
  };

  return <AddproductsContext.Provider value={contextValue}>{children}</AddproductsContext.Provider>;
};

export const useAddproducts = () => {
  const context = useContext(AddproductsContext);
  if (!context) {
    throw new Error('useAddproducts must be used within the AddproductsProvider');
  }
  return context;
};

