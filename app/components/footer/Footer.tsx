import Link from "next/link"
import Container from "../Container"
import FooterList from "./FooterList"
import { MdFacebook } from "react-icons/md"
import { AiFillGithub, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai"

const Footer = () => {
  return (
    <div className="
    bg-slate-700 text-slate-200 text-sm mt-16
    ">
      <Container>
        <div className="
        flex
        flex-col
        md:flex-row
        justify-between
        pt-16
        pb-8">
          <FooterList>
            <h3 className="font-bold text-base mb-2">Shop Categories</h3>
            <Link href="#">Phones</Link>
            <Link href="#">Laptops</Link>
            <Link href="#">Desktops</Link>
            <Link href="#">Watches</Link>
            <Link href="#">TVs</Link>
            <Link href="#">Accessories</Link>
          </FooterList>
          <FooterList>
            <h3 className="font-bold text-base mb-2">Customer Services</h3>
            <Link href="#">Contact Us</Link>
            <Link href="#">Shipping Policy </Link>
            <Link href="#">Returns & Exchanges</Link>
            <Link href="#">FAQs</Link>
          </FooterList>
          <div className="w-full md:1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold">
              About Us
            </h3>
            <p>
              At our electronics we are dedicated to providing
              the honest and greatest devices and accessories 
              to our customers with a wide selection of 
              phones, TVs, laptops,watches and accessories. 
             
            </p>
            <p>
              &copy; {new Date().getFullYear()} E-shop. All rights reserved.
            </p>
          </div>
          <FooterList>
          <h3 className="text-base font-bold mb-2">
              Follow Us
            </h3>
            <div className="flex gap-2 flex-row">
              <Link href="#">
                <MdFacebook size={24}/>
              </Link>
              <Link href="#">
                <AiFillTwitterCircle    size={24}/>
              </Link>
              <Link href="https://github.com/Anonymous-Roys">
                <AiFillGithub size={24}/>
              </Link>
              <Link href="#">
                <AiFillInstagram size={24}/>
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
      
    </div>
  )
}

export default Footer
