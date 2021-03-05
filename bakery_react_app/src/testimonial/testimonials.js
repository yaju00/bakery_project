import React from 'react';
import styles from './testimonials.module.css';
import Testimonial from './testimonial';
import Img from '../bakery/img1.jpeg'

const Testimonials=(props)=>{
    return(
            <div id='testimony' className={styles.middle}>
                <h1 className={styles.heading}>Testimonials</h1>
                <div id={styles["middle1"]}>
                    <Testimonial testimonials={props.testimonials}
                    index={props.index}/>
                    <a onClick={props.prev} className={styles.prev} >❮</a>
                    <a onClick={props.next} className={styles.next} >❯</a>
                </div>
                <div id={styles["middle2"]}>
                    <div >
                    <img id={styles["img3"]} className={styles.border1} src={Img}/>
                    </div>
                </div>
            </div>
    )
}

export default Testimonials;