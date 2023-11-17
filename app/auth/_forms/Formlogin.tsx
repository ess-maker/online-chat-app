import Authfiled from "@/components/commen/Authfiled"
import Button from "@/components/commen/Button"
import Formlogic from "../_formlogic/Formlogic"

const Formlogin = () => {
    const handelogin = Formlogic()
  return (
    <form onSubmit={handelogin.handleSubmit} method="POST" className="space-y-4">
    <Authfiled value={handelogin.values.email} onChange={handelogin.handleChange} name={"email"} type={"text"} label="email" placeholder={""} 
    error={handelogin.touched.email && handelogin.errors.email ? handelogin.errors.email : ''} />
    <Authfiled value={handelogin.values.password} onChange={handelogin.handleChange} name={"password"} type={"password"} label="password" placeholder={""} 
    error={handelogin.touched.password && handelogin.errors.password ? handelogin.errors.password : ''}
     />
    <Button type={"submit"} value={"Sign Up"} onClick={handelogin.handleSubmit} isLoading={false} />
    </form>
  )
}

export default Formlogin