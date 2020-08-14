import React, { useState } from 'react';
import Title from './components/Title';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';

function App() {
  const [selected,setSelected] = useState(null);
  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid setSelected={setSelected} />
      { selected && <Modal selected={selected} setSelected={setSelected} />}
    </div>
  );
}

export default App;
