import React from 'react';
import styles from './contact.module.css';

const Contact=(props)=>{
    return(
        <div style={{visibility:props.showContact?'visible':'hidden'}}  className={styles.contact}>
          <div className={styles.card}>
              <h1>Contact</h1>
              <p>Ph: 1234567890</p>
              <p>Email:xyz@gmail.com</p>
              <p>Facebook page: facebook.com/xyz</p>
          </div>
        </div>
    )
}

export default Contact;