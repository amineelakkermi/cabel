import React from 'react';
import styles from '../style';
import { qualityData } from '../constants';
import { motion } from 'framer-motion';
import { textVariant } from '../motion';

const QualitySection = () => {
  return (
    <section
      className={`relative bg-gray-200 ${styles.padding} flex flex-col justify-center items-center gap-8`}
    >
      <div className="gradient-circle5"></div>
      <motion.h1
      variants={textVariant(0.2)}
          initial='hidden'
          whileInView='show'
      className={`${styles.title} text-center text-blueTitle`}>
        ضمان الجودة
      </motion.h1>
      <motion.p
      variants={textVariant(0.3)}
          initial='hidden'
          whileInView='show'
        className={`${styles.paragraph} text-xl md:text-2xl md:max-w-[60%] max-w-[90%] text-center`}
      >
        يعمل مصنع كابل في تحقيق أعلى معايير إدارة الجودة الشاملة
        في تصنيع الظفائر الكهربائية من خلال :
      </motion.p>

      <div
        className={`w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 mt-5 mb-12`}
      >
        {qualityData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: -50 }} // Départ caché avec un décalage vertical
            whileInView={{ opacity: 1, y: 0 }} // Apparition avec transition fluide
            transition={{
              duration: 0.3,
              delay: index * 0.4, // Délais basé sur l'index pour l'effet séquentiel
            }}
            className="w-full bg-[#427D9D] hover:bg-[#5795b6] duration-300 transition-all flex flex-col justify-start items-center gap-5 px-6 py-8 rounded-[20px]"
          >
            <div className="p-4 rounded-[20px] bg-gray-300">
              <item.icon className="text-blue2 w-[40px] h-[40px]" />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-[25px] font-bold text-center text-white">
                {item.titleAr}
              </h3>
              <h4 className={`text-[19px] my-3 text-white text-center`}>
                {item.descriptionAr}
              </h4>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default QualitySection;
