import React, { useEffect, useState } from 'react';
import { menu, close, cabel } from '../assets';
import { navLinks } from '../constants';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import styles from '../style';

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
 
  return (
    <nav className={`w-[100%] z-[999] py-4 md:px-16 px-8 flex items-center justify-between navbar fixed left-0 right-0 top-0 ${isScrolled ? 'bg-gray-300' : 'bg-gray-200' } transition-all duration-300`}>
      <img src={cabel} alt="logo" className="max-w-[200px] w-auto md:h-[60px] h-[40px] object-cover" />
      <ul className="list-none lg:flex hidden justify-end items-center flex-1 gap-16">
        {navLinks.map((item, index) => (
          <li
            key={index}
            className={`relative font-bold cursor-pointer text-[20px] duration-300 ${isScrolled ? 'text-blue1' : 'text-blue1'} hover:text-mauve`}
          >
            <a href={`#${item.id}`}
            >
            {item.title}
            </a>
          </li>
        ))}
      </ul>

     
      <div className="lg:hidden flex flex-1 justify-end items-center">
        {toggle ? (
          <RiCloseLine color="black" cursor="pointer" size={27} onClick={() => setToggle(false)} />
        ) : (
          <RiMenu3Line color="black" cursor="pointer" size={27} onClick={() => setToggle(true)} />
        )}

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } flex-col gap-10 z-20 py-6 px-10 absolute top-20  mx-10 my-2 max-w-[320px]  rounded-xl bg-gray-300 justify-center items-center sidebar`}
        >
          <ul className="list-none flex justify-center items-center gap-8 flex-col">
            {navLinks.map((item, index) => (
              <li
                key={index}
                className={`relative font-bold cursor-pointer text-[20px] duration-300 ${isScrolled ? 'text-blue1' : 'text-blue1'} hover:text-mauve`}
                >
            <a href={`#${item.id}`}>
              {item.title}
                </a>
              </li>
            ))}
          </ul>
       
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
