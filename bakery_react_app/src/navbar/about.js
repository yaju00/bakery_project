import React from 'react';
import styles from './about.module.css';

const About=(props)=>{
    return(
        <div style={{visibility:props.showAbout?'visible':'hidden'}}  className={styles.about}>
          <span onClick={props.aboutCloser} className={styles.cross}>&times;</span>
          <div className={styles.card}>
              <h1>About US</h1>
              <p> We are the bakers located in a cozy place in south west delhi. We are a team of about 10 people working tireleslly to fulfill our customers expectations. We have been doing the same for more than 20 years. Please do visit us.</p>
          </div>
        </div>
    )
}

export default About;