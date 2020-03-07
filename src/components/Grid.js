import React from 'react'
import styled from 'styled-components'

const Table = styled.table`
margin: 50px auto;
border-collapse: collapse;
background-image: url('https://bloximages.newyork1.vip.townnews.com/omaha.com/content/tncms/assets/v3/editorial/c/7d/c7dff969-9400-5610-94f6-d4ae53dc3d8e/5bae7d8e175c3.image.jpg?resize=400%2C254');
background-size: 100%;
background-repeat: no-repeat;
`
const Cell = styled.td`
    width: 100px;
    height: 100px;
    border: 1px solid white;
    background:black;
`
let hidden = true
function chooseCell(e){
    if(hidden){
        e.target.style.background = "rgba(0,0,0,0)"
    }
    else{
        e.target.style.background = "black"
    }
    hidden = !hidden
}
function Grid() {
    return <Table onClick = { (e)=>{chooseCell(e)}}>
        <tbody>
        <tr>
            <Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell />
        </tr>
        <tr>
            <Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell />
        </tr>
        <tr>
            <Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell />
        </tr>
        <tr>
            <Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell />
        </tr>
        <tr>
            <Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell />
        </tr>
        <tr>
            <Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell />
        </tr>
        <tr>
            <Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell />
        </tr>
        <tr>
            <Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell />
        </tr>
        </tbody>
        </Table>
}

export default Grid;