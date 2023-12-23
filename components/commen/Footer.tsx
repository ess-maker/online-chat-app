import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";


const Footer = () => {
    const links = [
        { href: "/", icon: FaSquareFacebook },
        { href: "/", icon: FaInstagram },
      ];

  return (
    <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
          <p className="text-sm text-gray-500">
            © Copyright {new Date().getFullYear()} Lorem Inc. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            {links.map(link => (
                <Link href={link.href} className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400">
                    {link.icon}
                </Link>
            ))}
          </div>
          </div>
  )
}

export default Footer