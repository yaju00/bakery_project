import React from 'react';
import styles from './modal.module.css';
import Image from './image';


const Modal=(props)=>{
 const arr=props.imageid;
    return(
        <div  style={{visibility:props.show?'visible':'hidden'}} className={styles.modal}>
            <span onClick={props.closer} className={styles.cross}>&times;</span>
            <div className={styles.card}>
                <div className={styles.image} >
                  <img src={Object.values(props.products[arr].url)} alt={props.products[arr].name}
                  />
                </div>
                <a onClick={()=>props.decrease(arr)} className={styles.prev} >&#10094;</a>
                <a onClick={()=>props.increase(arr)} className={styles.next}>&#10095;</a>
            </div> 
        </div>
    )
}


export default Modal;

