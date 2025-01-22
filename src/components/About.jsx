import React from 'react'
import styles, { layout } from '../style'
import { about1, about2, about3, alpha, founder, saaf } from '../assets'
import { easeIn, motion } from 'framer-motion'
import { slideIn, textVariant } from '../motion'

const About = () => {
  return (
    <section id='about' className={`relative min-h-[100vh] ${styles.paddingX} md:my-0   ${layout.section}`}>
     <motion.div
     variants={textVariant(0.3)}
     initial="hidden"
     whileInView="show"
     className="circle3" />
     <motion.div
     variants={textVariant(0.4)}
     initial='hidden'
     whileInView='show'
     
     className={`${layout.sectionInfo}`}>
        <h1 className={`${styles.title} text-white`}>
        Fill Your <span className='text-blue'>Idea </span> 
        With Reality
        </h1>
        <p className={`${styles.paragraph} mt-5 max-w-[480px]`}>
        Ideafil transforms your ideas into reality with creative and effective advertising solutions.
        We bring your visions to life, telling your unique story in a captivating way
        </p>
     </motion.div>
     <div className={`${layout.sectionImg} gap-5`}>
       <div>
       <motion.img
      variants={textVariant(0.5)}
      initial='hidden'
      whileInView='show'
      src={about1} alt="about" className='rounded-[15px] w-[280px] md:h-[380px]' />
       </div>
       <motion.div
      variants={textVariant(0.5)}
      initial='hidden'
      whileInView='show'
      className='flex flex-col gap-3'>
      <img src={founder} alt="Founder" className='rounded-[15px] w-[320px] md:h-[300px]' />
      <img src={about2} alt="about" className='rounded-[15px] w-[250px] md:h-[350px]' />

       </motion.div>
     </div>

    </section>
  )
}

export default About