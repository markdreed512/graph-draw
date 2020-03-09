import React from 'react'
import styled from 'styled-components'

function SizingButtons(){
   
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
            <Button id="increase-btn">+</Button>
            <P>Increase Cell Size</P>
            <Button id="decrease-btn">-</Button>
            <P>Decrease Cell Size</P>
    <h1>Current Cell Size: </h1>
        </Div>
    )
}

export default SizingButtons