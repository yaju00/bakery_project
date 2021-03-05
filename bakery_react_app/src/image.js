import React from 'react';
import styles from './image.module.css'

const Image=(props)=>(props.products.map((element,index)=>{
        if(element.show){
            return(
                <div className={styles.card}>
                    <div onClick={()=>props.focus(index)}>
                    <img onClick={props.opener} src={Object.values(element.url)} alt={element.name} />
                    </div>
                    <p className={styles.price}>{element.name} Rs. {element.Price}</p>
                    <p><button>Add to Cart</button></p>
                </div>       
        )
    }
})
)
               
export default Image;