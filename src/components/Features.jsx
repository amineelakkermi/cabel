import React from 'react'
import styles from '../style'
import { featuresData } from '../constants';
import { motion } from 'framer-motion';
import { textVariant } from '../motion';
const Features = () => {
  return (
    <section className={`relative bg-gray-100 ${styles.padding} flex flex-col justify-center items-center gap-8 relative`}>
      
      <motion.h1
      variants={textVariant(0.2)}
          initial='hidden'
          whileInView='show'
      className={`${styles.title} text-center text-blueTitle`}>
        مميزاتنا
      </motion.h1>

      <div
        className={`w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 mt-5 mb-12`}
      >
        {featuresData.map((item, index) => {
          return (
            <div
              key={item.id}
              className="sm:w-[400px] w-[100%] duration-300 flex justify-center items-start hover:bg-slate-50 flex-col gap-8 px-6 py-8 rounded-[20px]"
            >
              <div className="p-4 rounded-[20px] bg-gray-300">
                <item.icon className="text-blue2 w-[40px] h-[40px]" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-[25px] font-normal text-start text-blueTitle">
                  {item.titleAr}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default Features
