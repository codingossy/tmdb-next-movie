import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
// images


const Header = () => {

  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('black');
 
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 20) {
        setColor('#000');
        setTextColor('#000');
      } else {
        setColor('#000');
        setTextColor('#fff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);



  return (
    <header 
    style={{ backgroundColor: `${color}` }}
    className="fixed left-0 top-0 w-full transition-all ease-in duration-30 z-50">
      <div className="container mx-auto">
        <div className="flex p-2 items-center justify-between">
          <Link href="/">
             <h4 className="capitalize">movie</h4>
          </Link>

          <Navbar textColor={textColor} />

    
          {/* mobile nav functionality */}
          <HiMenu
            onClick={() => setNavMobile(true)}
            className="md:hidden text-white text-3xl cursor-pointer"
          />

          <div className={`${navMobile ? "right-0" : "-right-full"} toggle `}>
            <MobileNav setNavMobile={setNavMobile} />
          </div>

          {/* mobile nav ends here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
