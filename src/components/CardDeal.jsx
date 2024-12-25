import {card} from '../assets'
import styles, { layout } from '../styles'
import Button from './Button'


const CardDeal = () =>  (
  <section id='product' className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better deal<br className='sm:block hidden'/> for billing & invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe eligendi quae harum, ducimus excepturi voluptates fugit.
      </p>
      <Button styles="mt-10"></Button>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />

      <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
      <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
    </div>

    
  
  </section>
  )


export default CardDeal