import React, { useState } from 'react'
import styled from 'styled-components'

function SizingButtons(){
    const [cellSize, setCellSize] = useState(100)
    const increaseSize = () => {
        setCellSize(cellSize + 2)
    }
    const decreaseSize = () => {
        setCellSize(cellSize - 2)
    }
    const Div = styled.div`
        margin: 100px 0 0 300px;
        float: left;
        font-family: arial;
        color: white;
    `
    const Button = styled.button`
        font-size: 50px;
        background-color: green;
        display: block;
        width: 100px;
    `
    const P = styled.p`
        color: white;
    `
    return (
        <Div >
            <Button onClick = { increaseSize }>+</Button>
            <P>Increase Cell Size</P>
            <Button onClick = { decreaseSize }>-</Button>
            <P>Decrease Cell Size</P>
    <h1>Current Cell Size: {cellSize}</h1>
        </Div>
    )
}

export default SizingButtons