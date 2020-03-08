import React, { useState } from 'react'

import './Cell.css'
function Cell() {
    const [opaque, setOpaque] = useState( true )
    const handleClick = () => {
        setOpaque(!opaque)
    }
    return (
        <td class = {opaque? "opaque" : "transparent"} onClick = { handleClick }></td>
    )
}

export default Cell