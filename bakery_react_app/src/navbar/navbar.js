import React from 'react';
import styles from './navbar.module.css';
import img from '../bakery/clipart.jpeg';
import About from './about';
import Contact from './contact';



const Navigation=(props)=>{
    return(
        <div>
          <div className={styles.nav}>
            <img className={styles.img} src={img}/>
            <ul>
            <li className={styles.anchor}><a  href='#home'>Home</a></li>
                <li className={styles.anchor}><a onClick={props.aboutSlider}>About</a></li>
                <li className={styles.anchor}><a href='#testimony'>Testimonies</a></li>
                <li className={styles.anchor}><a onClick={props.contactSlider}>Contact</a></li>
            </ul>
          </div> 
          <About aboutCloser={props.aboutCloser} showAbout={props.aboutState} aboutSlider={props.aboutSlider} /> 
          <Contact contactCloser={props.contactCloser} showContact={props.contactState} contactSlider={props.contactSlider}/> 
        </div>

    )
}

export default Navigation;