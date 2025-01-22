import React, { useState } from 'react';
import Modal from 'react-modal'; // Import the Modal component
import styles from '../style';
import { p1, p12, p2, p3, p4, p5, p7 } from '../assets';
import { textVariant } from '../motion';
import { motion } from 'framer-motion';

// Set up the modal root element (required for react-modal)
Modal.setAppElement('#root');

const Products = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImg, setModalImg] = useState('');

  const productsInfo = [
    { id: 1, img: p1 },
    { id: 2, img: p2 },
    { id: 3, img: p5 },
    { id: 4, img: p7 },
    { id: 5, img: p12 },
  ];

  const openModal = (img) => {
    setModalImg(img);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalImg('');
  };

  return (
    <section id='products' className={`relative min-h-[100vh] flex flex-col bg-gray-200 gap-5 ${styles.padding}`}>
      <div className='gradient-circle4'></div>
      <motion.h1
  variants={textVariant(0.2)}
  initial='hidden'
  whileInView='show'
  className={`${styles.title} text-center text-blue1 relative`}>
  صور المنتجات
</motion.h1>



      <div className={`${styles.marginY} w-full flex flex-wrap flex-row gap-16 justify-center items-star`}>
        {productsInfo.map((item , index) => (
          <motion.div
          initial={{ opacity: 0, y: -50 }} // Départ caché avec un décalage vertical
            whileInView={{ opacity: 1, y: 0 }} // Apparition avec transition fluide
            transition={{
              duration: 0.3,
              delay: index * 0.4, // Délais basé sur l'index pour l'effet séquentiel
            }}
          key={item.id} className='relative w-[280px] h-[350px] rounded-[25px] bg-[#a8d8bb] overflow-hidden group'>
            <img
              src={item.img}
              className='w-[100%] h-[100%] object-cover rounded-[25px] cursor-pointer'
              alt="product img"
              onClick={() => openModal(item.img)}
            />
           
          </motion.div>
        ))}
      </div>

      {/* Modal for displaying the enlarged image */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center z-[999] justify-center bg-black bg-opacity-75"
        overlayClassName="fixed inset-10"
        contentClassName="relative flex items-center justify-center"
      >
        <button
          onClick={closeModal}
          className="absolute top-[22%] right-[22%] text-white text-3xl z-[999]"
        >
          &times;
        </button>
        <img
          src={modalImg}
          alt="Enlarged"
          className="sm:max-w-full max-w-[80%] max-h-[70%] rounded-[25px] object-contain m-5 z-[999] absolute top-[20%]"
        />
      </Modal>
    </section>
  );
};

export default Products;
