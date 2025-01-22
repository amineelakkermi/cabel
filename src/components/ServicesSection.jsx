import React from 'react';
import styles from '../style';
import { servicesData } from '../constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useMediaQuery } from 'react-responsive'; // Import from react-responsive
import { motion } from 'framer-motion';
import { textVariant } from '../motion';
const ServicesSection = () => {

  // Détecter les petits écrans
  const isSmallScreen = useMediaQuery({ query: '(max-width: 1024px)' });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section
     
      id="services"
      className={`${styles.padding} z-0 relative w-full bg-gray-100 flex flex-col justify-center items-center`}
    >
      <motion.h1
      variants={textVariant(0.2)}
          initial='hidden'
          whileInView='show'
        className={`${styles.title} text-center text-blueTitle`}
      >
        خدماتنا و منتجاتنا
      </motion.h1>
      <motion.p
      variants={textVariant(0.3)}
          initial='hidden'
          whileInView='show'
        className={`${styles.paragraph} text-xl md:text-2xl mt-5 md:max-w-[60%] max-w-[90%] text-center`}
      >
    يعمل مصنع كابل على تقديم مجموعة متكاملـــــــة
مـــن مـــــنـــــــتــــــــجات الظفائر الكهربائية عالية الجودة :

      </motion.p>

      
       <div className='w-full flex flex-col'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20} 
          navigation={{ 
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          pagination={{
            clickable: true,
          }}  
          breakpoints={{
            470: {
              slidesPerView: 1.25, 
            },
            768: {
              slidesPerView: 1.5, 
            },
            900: {
              slidesPerView: 3, 
            },
          }}
          className="mt-16 mb-10 w-[100%]"
        >
          {servicesData.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div className="flex h-[400px]  bg-white hover:bg-slate-200 transition-all duration-300 card-service items-center flex-col md:gap-2 gap-[8px]  px-4 pt-6 pb-4 rounded-[5px]">
                <item.icon className="text-blue2 md:w-[65px] w-[50px] md:h-[65px] h-[50px]" />
                <h3 className={`text-[22px] my-3 text-blueTitle font-bold text-center`}>
                {item.titleAr}
                </h3>
                <h4 className={`text-[19px] my-3 text-[#999] text-center`}>
                {item.descriptionAr}
                </h4>
              
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    
       </div>
        
      
       
       
      
    </section>
  );
};

export default ServicesSection;
