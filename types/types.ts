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