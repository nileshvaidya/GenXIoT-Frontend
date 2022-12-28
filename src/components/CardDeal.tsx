import React from 'react'
import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a Gateway config <br className='sm:block hidden' /> in few easy steps.</h2>
      <p className={`${styles.paragraph} max-w-[480px] mt-5`}>Run the wizard, and answer few questions about your machines / process so that a Gateway with proper configuration can be selected for you.</p>
      <Button styles="mt-10" />
    </div>
      
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className='w-[100%] h-[100%]' />
    </div>
    </section>
  )


export default CardDeal
