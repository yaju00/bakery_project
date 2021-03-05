import React,{Component} from 'react';
import styles from './App.module.css';
import Gallery from './Gallery';
import Navbar from './navbar/navbar';
import cake1 from './bakery/cake_1.jpeg';
import cake2 from './bakery/cake_2.jpeg';
import cake3 from './bakery/cake_3.jpeg';
import cupcake1 from './bakery/cupcake_1.jpeg';
import cupcake2 from './bakery/cupcake_2.jpeg';
import cupcake3 from './bakery/cupcake_3.jpeg';
import doughnut1 from './bakery/doughnut_1.jpeg';
import doughnut2 from './bakery/doughnut_2.jpeg';
import doughnut3 from './bakery/doughnut_3.jpeg';
import sweets1 from './bakery/sweets_1.jpeg';
import sweets2 from './bakery/sweets_2.jpeg';
import sweets3 from './bakery/sweets_3.jpeg';
import Modal from './modal';
import Testimonials from './testimonial/testimonials';




class App extends Component{
  state={
    products:[
      {id:'cake1',name:'cake',Price:'400',url:{cake1},show:true},
      {id:'cake2',name:'cake',Price:'400',url:{cake2},show:true},
      {id:'cake3',name:'cake',Price:'400',url:{cake3},show:true},
      {id:'cupcake1',name:'cupcake',Price:'400',url:{cupcake1},show:true},
      {id:'cupcake2',name:'cupcake',Price:'400',url:{cupcake2},show:true},
      {id:'cupcake3',name:'cupcake',Price:'400',url:{cupcake3},show:true},
      {id:'doughnut1',name:'doughnut',Price:'400',url:{doughnut1},show:true},
      {id:'doughnut2',name:'doughnut',Price:'400',url:{doughnut2},show:true},
      {id:'doughnut3',name:'doughnut',Price:'400',url:{doughnut3},show:true},
      {id:'sweets1',name:'sweets',Price:'400',url:{sweets1},show:true},
      {id:'sweets2',name:'sweets',Price:'400',url:{sweets2},show:true},
      {id:'sweets3',name:'sweets',Price:'400',url:{sweets3},show:true},
      ],
      imgIndex:0,
      modalOpenerState:false,
      testimonies:[['amazing food','Ravi'],['never got dissapointed','Suresh'],['Outstanding Bakers','Sanya']],
      testimonialIndex:0,
      contactState:false,
      aboutState:false,
  }
toggler=(input)=>{
  const inter=[...this.state.products];
  for(let i=0;i<inter.length;i++){
    if(inter[i].name!==input&&input!=='All'){
      inter[i].show=false;
    }
    if(inter[i].name===input&&input!=='All'){
      inter[i].show=true;
    }
    if(input==='All'){
      inter[i].show=true;
    }
  }
  this.setState({products:inter})
  }
focus=(index)=>{
  this.setState({imgIndex:index});
  console.log(index);
}
next=(val)=>{
  if(val<11){
    this.setState({imgIndex:val+1});
  }
  else{this.setState({imgIndex:0})}
}
prev=(val)=>{
  if(val>0){
    this.setState({imgIndex:val-1});
  }
  else{this.setState({imgIndex:11})}
}
modalCloser=()=>{
this.setState({modalOpenerState:false})
console.log(this.state.modalOpenerState);
}
modalOpener=()=>{
  this.setState({modalOpenerState:true})
  console.log(this.state.modalOpenerState);
    }
inputFilter=(even)=>{
  let counter=0;
  let el=[...this.state.products]
  const inter=even.target.value.toLowerCase();
  for(let i=0;i<this.state.products.length;i++){
    if(el[i].name.includes(inter)){
      el[i].show=true;
    }
    else{
      el[i].show=false;
    }
} 
this.setState({products:el})
console.log(this.state.products);
}     
nextTestimony=()=>{
let inter=this.state.testimonialIndex;
if(inter<2){
  inter++
}
else{
  inter=0
}
this.setState({testimonialIndex:inter})
}
prevTestimony=()=>{
  let inter=this.state.testimonialIndex;
  if(inter>0){
    inter--
  }
  else{
    inter=2;
  }
  this.setState({testimonialIndex:inter}) 
}
testimonyHandler=(index)=>{
  const str=[...this.state.testimonies]
  return str;
}
contactSlider=()=>{
  this.setState({contactState:true})
}
aboutSlider=()=>{
  this.setState({aboutState:true})
}
 render(){
  return (
    <div id='home' className={styles.background}>
      <Navbar contactSlider={this.contactSlider} 
      aboutSlider={this.aboutSlider}
      contactState={this.state.contactState}
      aboutState={this.state.aboutState}/>
      <h1 id={styles["main1"]}> Welcome to <b id={styles["main2"]}>Grandma's Bakery</b>
      </h1>
      <Gallery 
      focus={this.focus}
       props={this.state.products} 
       toggler={this.toggler}
      filter={this.inputFilter}
      opener={this.modalOpener}/>
      <Modal products={this.state.products} 
      imageid={this.state.imgIndex}
       increase={this.next} 
       decrease={this.prev}
       closer={this.modalCloser}
       show={this.state.modalOpenerState}/>
       <Testimonials 
       testimonials={this.testimonyHandler}
       prev={this.prevTestimony}
       next={this.nextTestimony}
       index={this.state.testimonialIndex}/>
    </div>
   )
 }
  
}

export default App;
