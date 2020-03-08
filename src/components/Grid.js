import React from 'react'
import styled from 'styled-components'
import Cell from './Cell'
const Table = styled.table`
margin: 50px auto;
border-collapse: collapse;
background-image: url('https://bloximages.newyork1.vip.townnews.com/omaha.com/content/tncms/assets/v3/editorial/c/7d/c7dff969-9400-5610-94f6-d4ae53dc3d8e/5bae7d8e175c3.image.jpg?resize=400%2C254');
background-size: 100%;
background-repeat: no-repeat;
`

//fix bool so it toggles just for individual cells, not table only (state of cells- cell component?)

function Grid() {
    const cells = Array(12).fill("dummyData")
    const rows = Array(20).fill("dummyData")
    return (<Table >
        <tbody>
            {rows.map((each, i) => {
                return (
                <tr>
                    {cells.map((each, i) => {
                        return <Cell/>
                            })}
            
                </tr>
                )
                    })}
                   
        
        </tbody>
    </Table>)
    }
    
export default Grid;