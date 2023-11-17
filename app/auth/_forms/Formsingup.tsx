'use client'

import Authfiled from "@/components/commen/Authfiled"
import Button from "@/components/commen/Button"
import Singuplogic from "../_formlogic/Singuplogic";


const Handelsingup = () => {
  const handelsingup = Singuplogic()

  return (
    <form onSubmit={handelsingup.handleSubmit} method="POST" className="space-y-4">
    <Authfiled value={handelsingup.values.name} onChange={handelsingup.handleChange} name={"name"}
     type={"text"} label="name" placeholder={""}
      error={handelsingup.touched.name && handelsingup.errors.name ? handelsingup.errors.name : ''} />
    <Authfiled value={handelsingup.values.email} onChange={handelsingup.handleChange} name={"email"} type={"text"} label="email" placeholder={""} 
    error={handelsingup.touched.email && handelsingup.errors.email ? handelsingup.errors.email : ''} />
    <Authfiled value={handelsingup.values.password} onChange={handelsingup.handleChange} name={"password"} type={"password"} label="password" placeholder={""} 
    error={handelsingup.touched.password && handelsingup.errors.password ? handelsingup.errors.password : ''}
     />
    <Button type={"submit"} value={"Sign Up"} onClick={handelsingup.handleSubmit} isLoading={false} />
    </form>
  )
}

export default Handelsingup