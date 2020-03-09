import React, { useState } from 'react'
import styled from 'styled-components'
import './Cell.css'
function Cell(props) {
    const Td = styled.td`
    width: {props.size + "px"};
    height: {props.size + "px"};
    `
    const [opaque, setOpaque] = useState( true )
    const handleClick = () => {
        setOpaque(!opaque)
    }
    return (
        <Td className = {opaque? "opaque" : "transparent"} onClick = { handleClick }></Td>
    )
}

export default Cell