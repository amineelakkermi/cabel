import React from 'react'
import styles, { layout } from '../style'
import { FaHardHat } from 'react-icons/fa';
import { p1, p2, p3, vision } from '../assets';
import { textVariant } from '../motion';
import { motion } from 'framer-motion';

const Vision = () => {

  return (
    <section id="vision" className={`flex flex-col  ${styles.padding} bg-gray-100 gap-16`}> 
    <div className='flex flex-col mt-5 gap-5 w-full justify-center items-center'>
    <div className='text-blue1 w-[3.5px] h-[100px] bg-blue1' />
    <motion.h1
    variants={textVariant(0.2)}
    initial='hidden'
    whileInView='show'
    className={`${styles.title} text-center text-blueTitle`}>
      رؤيتنا : التفوق في صناعة الظفائر الكهربائية    
    </motion.h1>
    <motion.p
    variants={textVariant(0.3)}
    initial='hidden'
    whileInView='show'
    className={` font-normal text-[#777] text-[28px] max-w-[900px] md:mb-10 mb-5`}>
        أن يكون مصنع كابل للصناعة هو الخيار الأول و الرائد إقليميا في 
        مجال تصنيع الظفائر الكهربائية و ذلك بتقديم منتجات تحقق أعلى معايير الجودة و الابتكار و المساهمة في تطوير 
        الصناعات المحلية و الإقليمية
    </motion.p>
    <div className='text-blue1 w-[3.5px] h-[100px] bg-blue1' />

    </div>
    
    </section>
  )
}

export default Vision
