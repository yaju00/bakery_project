import React from 'react';
import styles from './testimonial.module.css';

const Testimonial=(props)=>{
    return(
        <div >
          
          <p className={styles.para1}>''{props.testimonials()[props.index][0]}''</p>
          <p className={styles.para2}>{props.testimonials()[props.index][1]}</p>          
        </div>
    )
}

export default Testimonial;