import React from 'react'
const openLoginModal = () => {
    console.log("open login modal")
}
const LoginIcon = () => {
    return(
        <i class="fa fa-user" onClick = {openLoginModal}></i>
    )
}
export default LoginIcon