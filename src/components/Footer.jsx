import React from 'react';
import { FaAddressBook, FaBehance, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaPhone, FaPhoneAlt, FaSearchLocation, FaTiktok, FaTwitter, FaVimeo, FaVoicemail } from 'react-icons/fa';
import styles from '../style';
import { cabel } from '../assets';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className={`w-full -z-0 bg-gray-100 relative flex flex-col gap-5 ${styles.padding}`}>
      
      <div className='flex md:flex-row flex-col md:justify-between justify-center items-center gap-[50px]'>
        <div className='flex md:items-start items-center flex-col gap-2 md:mt-0 mt-10 z-10'>
          <a href='#'>
            <div className='flex gap-0 items-center'>
              <img src={cabel} alt="logo" className="max-w-[200px] w-auto md:h-[60px] h-[40px] object-cover" />
            </div>
          </a>
          <p className='md:max-w-[450px] w-[85%] text-[18px] text-blueText md:text-start text-center leading-[32px]'>
            نعمل بكل شغف لتقديم أفضل الخدمات وتلبية كافة احتياجاتكم بكل احترافية واهتمام.
          </p>
        </div>

        <div className='flex md:flex-row flex-col md:justify-between justify-center md:items-start items-center gap-[40px] md:mt-0 mt-10 z-10'>
          <ul className='flex flex-col gap-3 md:text-start text-center'>
            <li><h3 className='text-blueText text-[20px] font-semibold'>روابط سريعة</h3></li>
            <li><a href='#home' className='text-[16px] duration-300 hover:text-blue font-medium text-blueText'>الرئيسية</a></li>
            <li><a href='#services' className='text-[16px] duration-300 hover:text-blue font-medium text-blueText'>خدماتنا</a></li>
            <li><a href='#products' className='text-[16px] duration-300 hover:text-blue font-medium text-blueText'>منتجاتنا</a></li>
          </ul>

          <ul className='flex flex-col gap-5 justify-center items-center md:text-start text-center'>
            <li><h3 className='text-blueText text-[20px] font-semibold'>تواصل معنا</h3></li>
            <li className='flex flex-row gap-10 items-center'>
              <a 
                href="https://wa.me/9660544883399" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex gap-3 text-blueText text-[16px] duration-300 hover:text-blue font-medium"
              >
                <FaPhone size={25} color="#27223a" />
                <span>+9660544883399</span>
              </a>
            </li>
            <li className='flex flex-row gap-10 items-center'>
              <a
                href="mailto:info@cable-sa.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 text-blueText text-[16px] duration-300 hover:text-blue font-medium"
              >
                <FaEnvelope size={25} color="#27223a" />
                <span>info@cable-sa.com</span>
              </a>
            </li>
            <li className='flex flex-row gap-10 items-center'>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 text-blueText text-[16px] duration-300 hover:text-blue font-medium"
              >
                <FaLocationArrow size={25} color="#27223a" />
                العنوان : <span className='font-semibold'>
                  القصيم - عنيزة - المنطقة الصناعية
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
