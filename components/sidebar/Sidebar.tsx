import Inputfiled from "../commen/Inputfiled"
import Active_users from "./Active_users"
import Contacts from "./Contacts"
import Header from "./Header"

const Sidebar = () => {
  return (
  <aside className="flex flex-col flex-none overflow-auto w-24 hover:w-64 group lg:max-w-sm md:w-2/5 transition-all duration-300 ease-in-out">
  <Header imgsrc={"/"}
  apptitel={"Messenger"} />
  <Inputfiled name={"shearchbar"} type={"text"} placeholder={"Search Messenge"} 
  error={false} starter_icon={"/shearchIcon.svg"} end_icon={""} />
  <Active_users />
  <Contacts />
  </aside>
  )
}

export default Sidebar