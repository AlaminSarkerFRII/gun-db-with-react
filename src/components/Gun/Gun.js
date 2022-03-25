import React from 'react';
import './Gun.css'
import {BsFillCartDashFill} from 'react-icons/bs';

const Gun = ({data,handleAddToCart}) => {
    // console.log(props);
    const {id,name,img,category,price} =data 

   
    return (
            <div className='card'>
           <div className='gun-img' >
            <img src={img} alt="" />
           </div>
           <div>
               <h2>{name}</h2>
                <p>{}</p>
               <p>{category}</p> 
               </div>
               <div>
                   <button onClick={ () => handleAddToCart(data)}>
                       <BsFillCartDashFill className='cart-icons'/>
                   </button>
                   <h5> ${price}</h5>
                   </div>        
        </div>

        

    );
};

export default Gun;