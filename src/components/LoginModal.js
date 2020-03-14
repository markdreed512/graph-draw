import React from 'react'
import styled from 'styled-components'

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
`
const Input = styled.input`
    display: block;
    font-size: 20px;
    background-color: rgba(255,255,255, .6);
    margin: 30px auto;
    padding: 10px;
    color: black;
    
`
const Button = styled.button`
display: block;
font-size: 20px;
background-color: rgba(0,255,255, .2);
margin: 30px auto;
`
const Label = styled.label`
    display: block;
    margin-top: 20px ;
`
const Form = styled.form`
    text-align: center;
`
const LoginModal = () => {
    return (
        <Modal>
            <Form action="submit">
                <Label>Sign Up</Label>
                <Input type="text" placeholder="username"/>
                <Input type="text" placeholder="password"/>
                <Input type="text" placeholder="password"/>
                <Button>Submit</Button>

            </Form>
        </Modal>
    )
}
export default LoginModal