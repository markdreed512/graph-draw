import React from 'react';
import Navbar from './components/Navbar'
import Grid from './components/Grid'
import SizingButtons from './components/SizingButtons'
const App = () =>{
  return (
    <div>
      <Navbar />
      <SizingButtons />
      <Grid />
    </div>
  )
}

export default App;
//How to upload files to the server using JavaScript: https://flaviocopes.com/file-upload-using-ajax/
