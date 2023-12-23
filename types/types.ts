import { Dispatch, SetStateAction } from "react";
import { MultiValue, ActionMeta } from "react-select";

export type inputs_types = {
    label: string,
    type: string,
    placeholder: string,
    name: string,
}
export type Mylogin_types =  {
    email : string;
    password : string;
  }

  export type Mysingup_types = Mylogin_types & {
    [key:string]:string;
    name:string
}

export type User =  {
  id: string;
  name: string;
  email: string;
  // ...
}

export type AuthContextProps =  {
  user: User | null;
  googleSignIn: () => void;
  logOut: () => void;
}

export type UserContextType =  {
  createUser: ({email, password}:{email:string , password:string}) => void;
  googleSignIn: () => void;
  isLoading: true | false;
  setIsLoading: (isLoading: boolean) => void;
  user:unknown|null;
  logout: () => void;
  signIn: ({email, password}:{email:string , password:string}) => void;
}

export type  TypeFormValues =  {
  product_name: string;
  product_discrption: string;
  product_price: number;
  product_discount: string;
}

export type selected_OptionTypes = {
  value: string;
  label: string;
}
export interface GroupBase<Option> {
  readonly options: readonly Option[];
  readonly label?: string;
}

export type AddproductsContextType = {
  file:Blob | Uint8Array | ArrayBuffer | null ;
  selectedColours: string[];
  selectedSizes: string[];
  selectedTypes: string[];
  formValues: TypeFormValues;
  err: string;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleColorChange: (selectedOptions: readonly selected_OptionTypes[], actionMeta: ActionMeta<selected_OptionTypes>) => void;
  handleSizeChange: (selectedOptions: readonly selected_OptionTypes[], actionMeta: ActionMeta<selected_OptionTypes>) => void;
  handleTypeChange: (selectedOptions: readonly selected_OptionTypes[], actionMeta: ActionMeta<selected_OptionTypes>) => void;
};
