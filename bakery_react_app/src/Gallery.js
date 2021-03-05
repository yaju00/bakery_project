import React from 'react';
import styles from './Gallery.module.css';
import icon from './bakery/search.jpeg';
import Image from './image';
import Modal from './modal';



const Gallery=(props)=> {

  return (
    <div className={styles.gal}>
      <div id={styles["bottom"]}>
        <div >
          <h2 id={styles["bot1"]}>Our</h2><b id={styles["bot2"]}>Store</b>
          <ul id={styles["list2"]}>
            <li><a onClick={()=>props.toggler('All')}>All</a></li>
            <li><a onClick={()=>props.toggler('sweets')}>Sweets</a></li>
            <li><a onClick={()=>props.toggler('cupcake')}>Cupcakes</a></li>
            <li><a onClick={()=>props.toggler('doughnut')}>Doughnuts</a></li>
            <li><a onClick={()=>props.toggler('cake')}>Cakes</a></li>
          </ul>
          <div className={styles.search}>
            <img  id={styles["search1"]} src={icon}/>
            <input id={styles["search2"]} 
            type="text"  
            placeholder="item..." 
            onChange={(even)=>props.filter(even)}/>
          </div>
        </div>
      </div>
      <div className={styles.images}>
          <Image opener={props.opener} focus={props.focus} products={props.props}/>
      </div>  
    </div>
    
  );
}

export default Gallery;
