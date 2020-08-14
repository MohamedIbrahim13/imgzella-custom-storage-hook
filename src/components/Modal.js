import React from 'react';
import {motion} from 'framer-motion';

const Modal = ({selected,setSelected}) => {
  const handleClose =(e)=>{
    if(e.target.classList.contains('backdrop')){
      setSelected(null);
    }
    
  };
  return (
    <motion.div className="backdrop" onClick={handleClose} initial={{opacity:0}} animate={{opacity:1}}>
      <motion.img src={selected} alt="enlarged pic" initial={{y:"-100vh"}} animate={{y:0}}/>
    </motion.div>
  )
}

export default Modal;