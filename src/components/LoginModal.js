import React, { useState } from 'react'
import styled from 'styled-components'


const LoginModal = () => {
    const [visible, setVisible] = useState("hidden")
    const Modal = styled.div`
    width: 500px;
    height: 400px;
    background-color: rgba(0, 100, 100, .8);
    color: white;
    position: absolute;
    float: left;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    font-family: arial;
    font-size: 30px;
    border-radius: 10px;
    box-shadow: 2px 2px 5px grey;
    visibility: ${visible}
`
const Input = styled.input`
    display: block;
    font-size: 20px;
    background-color: rgba(255,255,255, .6);
    margin: 30px auto;
    padding: 10px;
    color: black;
    border-radius: 4px;
`
const Button = styled.button`
    display: block;
    font-size: 20px;
    background-color: rgba(0,255,255);
    margin: 30px auto;
`
const Label = styled.label`
        display: block;
        margin-top: 40px ;
`
const Form = styled.form`
    text-align: center;
`

const openLoginModal = (e) => {
    console.log(e.target.id)
    if(e.target.id === "user-icon"){
        if (visible === "hidden") {
            setVisible("visible")
        } else {
            setVisible("hidden")
        }
    }
    
    
}
    return (

        <i id="user-icon" className="fa fa-user" onClick={openLoginModal}>
            <Modal >
                <Form action="submit">
                    <Label>Sign Up</Label>
                    <Input type="text" placeholder="username" />
                    <Input type="text" placeholder="password" />
                    <Input type="text" placeholder="password" />
                    <Button>Submit</Button>

                </Form>
            </Modal>
        </i>
    )
}
export default LoginModal