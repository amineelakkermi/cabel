import React from 'react'
import styles, { layout } from '../style'
import { FaHardHat } from 'react-icons/fa';
import { p1, p2, p3, vision } from '../assets';
import { motion } from 'framer-motion';
import { textVariant } from '../motion';

const Vision = () => {

  return (
    <section id="about" className={`flex justify-center flex-col min-h-[500px]  ${styles.padding} bg-gray-100 gap-16`}> 
    <div className='flex flex-col mt-5 gap-5 w-full justify-center items-center'>
    <div className='w-full flex md:flex-row flex-col justify-center items-center md:gap-16 gap-6'>
    <motion.h1
    variants={textVariant(0.3)}
        initial='hidden'
        whileInView='show'
    className={`md:text-[58px] text-[45px] font-[500] text-center text-blueTitle mt-0`}>
      رسالتنا 
    </motion.h1>
    <motion.p
    variants={textVariant(0.3)}
        initial='hidden'
        whileInView='show'
    className={` font-normal text-[#777] text-[28px] max-w-[900px] mb-5`}>
    إلتزامنا بتقديم منتجات ذات جودة عالية في تصنيع
الـــظفائر الكهربائية، من خلال الإستثمار في أحدث
الــتــقنيات والــخــبـــرات الــمــتخصصة، وتــحــقــيق رضى
الـــعـــمــلاء وتــلــبــيــــة إحـــتــــيــــاجــــــات السوق المتنامية.
    </motion.p>
    </div>

    </div>
    
    </section>
  )
}

export default Vision
