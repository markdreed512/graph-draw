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

function Grid(props) {
    let rows = props.rows
    let cols = props.cols

    const cellsArr = Array(cols).fill("dummyData")
    const rowsArr = Array(rows).fill("dummyData")
    return (<Table>
        <tbody>
            {rowsArr.map((each, i) => {
                return (
                    <tr>
                        {cellsArr.map((each, i) => {
                            return <Cell size={props.size} />
                        })}
                    </tr>
                )
            })}
        </tbody>
    </Table>)
}

export default Grid;