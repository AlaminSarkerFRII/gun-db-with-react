import React, { useEffect, useState } from 'react';
import Gun from '../Gun/Gun';
import './Guns.css'
import Modal from 'react-modal';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');




const Guns = () => {
    const [guns,setGuns] = useState([]);
    const [cart,setCart] = useState ([]);
    console.log(cart);

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
      }

      function closeModal() {
        setIsOpen(false);
      }

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
        .then(res => res.json())
        .then(data =>setGuns(data))
    },[])

    // show data another screen
    const handleAddToCart = (gun) =>{
        const newCart = [...cart, gun]
        setCart(newCart);
    }

    return (
       <div className='container'>

            <button onClick={openModal}>Open Modal</button>

           <div>
               {
                   cart.map((item) =>  <h2 key = {item.id}>{item.name}</h2> )
               }
           </div>
            <div className='gun-container'>
        {
            guns.map((gun) =>( <Gun key={gun.id} data={gun}
                handleAddToCart = {handleAddToCart} />))
        }
        </div>
          <div>
          <h2>order Summary</h2>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
            <h2>Gun Name </h2>
      </Modal>
       </div>
    );
};

export default Guns;