import React, {useState} from 'react';
import Navbar from './components/Navbar'
import Grid from './components/Grid'
import SizingButtons from './components/SizingButtons'
const App = () =>{
  const [cellSize, setCellSize] = useState(100)
  let rows = 10
  let cols = 10
  const handleClick = (e) => {
    if(e.target.id === 'increase-btn'){
      setCellSize(cellSize + 2)
    }else if(e.target.id === 'decrease-btn'){
      setCellSize(cellSize - 2)
    }
  }
  return (
    <div onClick = {handleClick}>
      <Navbar />
      <SizingButtons />
      <Grid size = {cellSize} rows = {rows} cols = {cols}/>
    </div>
  )
}

export default App;
//How to upload files to the server using JavaScript: https://flaviocopes.com/file-upload-using-ajax/
