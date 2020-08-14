import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
  const [image,setImage] = useState(null);
  const [error,setError] = useState(null);
  const types = ['image/png','image/jpeg'];
  const onChange = (e)=>{
    let selected = e.target.files[0];
    if(selected && types.includes(selected.type)){
      setImage(selected);
      setError('');
    } else {
      setError('Please upload an image file type PNG or JPEG');
    }
    
  }
  return (
    <form>
      <label>
        <input type="file" onChange={onChange} />
        <span>+</span>
      </label>
      <div className="output">
        { image && <div>{image.name}</div> }
        { error && <div className="error">{error}</div> }
        {image && <ProgressBar image={image} setImage={setImage} /> }
      </div>
    </form>
  );
}

export default UploadForm;