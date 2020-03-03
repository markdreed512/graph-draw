import React from 'react'
import styled from 'styled-components'
function Navbar(){

    const NavList = styled.ul`
        font-size:20px;
        color: teal;
        font-family: Maven Pro;
    `
    const Li = styled.li`
        display: inline;
        padding-left: 20px;
    `
    return (
        <div>
            <NavList>
                <Li>Home</Li>
                <Li>My Photos</Li>
                <Li>Help</Li>
            </NavList>
        </div>
    )

}
export default Navbar