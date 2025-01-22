import React from 'react';
import { motion } from 'framer-motion';
import { textVariant, textVariant2 } from '../motion';
const HeroSection = () => {
  return (
    <section id='home' className="-z-10 h-screen bg-gray-200 flex items-center justify-center px-6">
    <div className="text-center flex flex-col gap-4 lg:mt-32 mt-0">
    <motion.h1
    variants={textVariant(0.2)}
    initial='hidden'
    whileInView='show'
    className="text-4xl md:text-6xl font-bold mb-4 text-blueTitle z-[998]">
    مصنع <span >كابل</span> لصناعة الظفائر الكهربائية <br />
    (فخر الصناعة السعودية)
    </motion.h1>
    <motion.p
    variants={textVariant(0.3)}
    initial='hidden'
    whileInView='show'
    className="text-xl md:text-2xl mb-6 text-[#777] ">
    نسعى لتقديم أعلى معايير الجودة في تصنيع الظفائر الكهربائية، <br />
    ملتزمون بدعم الاقتصاد الوطني وتعزيز ريادة المملكة في قطاع الصناعة.
    </motion.p>

    <div className='flex flex-row w-full justify-center items-start gap-5'>
    <div className='flex'>
      <a
      href="#services" className="button_group bg-blue1 w-auto border border-black hover:bg-blueTitle duration-300 text-white font-bold py-2 px-6 rounded inline-bl">
      كل الخدمات
      </a>  
    </div>
      <div className='flex'>
      <a
      href="#footer" className="button_group w-auto border border-blue1 hover:bg-blue1 hover:text-white text-blue1 duration-300 transition-all  font-bold py-2 px-4 rounded inline-block text-center">
      معلومات التواصل
      </a>  
      </div>
    </div>
    </div>
    </section>
  );
};

export default HeroSection;