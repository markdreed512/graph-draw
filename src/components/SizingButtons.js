import React from 'react'
import styled from 'styled-components'

function SizingButtons(){
    const Div = styled.div`
        margin: 100px 0 0 300px;
        float: left;
        font-family: arial;
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
        <Div>
            <Button>+</Button>
            <P>Increase # of Cells</P>
            <Button>-</Button>
            <P>Decrease # of Cells</P>
        </Div>
    )
}

export default SizingButtons