import Chatbody from "./Chatbody"
import Chatfooter from "./Chatfooter"
import Chatheader from "./Chatheader"

const Main = () => {
  return (
    <section className="flex flex-col flex-auto border-l border-gray-800">
    <Chatheader />
    <Chatbody />
    <Chatfooter />
    </section>
  )
}

export default Main