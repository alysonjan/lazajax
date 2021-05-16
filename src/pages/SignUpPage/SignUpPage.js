import React, { useState } from 'react'
import * as s from './SignUpPage.elements'
import { useHistory } from "react-router-dom";
import md5 from 'md5';

const SignUpPage = () => {
    let history = useHistory();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmPassword] = useState("")


    const submitHandler = (e) => {

        e.preventDefault();
        if ( password !== confirmpassword) {
            alert("password does not match!")
        }else{
            let pass = md5(password)
            localStorage.setItem("Email",email)
            localStorage.setItem("Password",pass)

            alert("successfully registered!")
            
            history.push('/login')
        }
    }

    return (
        <>
        <s.LoginPageWrap>
            <s.LoginPageContainer>
                <s.Logo>
                    <s.MainLogo />
                </s.Logo>
                <s.Header>E-Wallet App</s.Header>
                <s.CardContainer>
                    <s.FormWrapper onSubmit={submitHandler}>

                        <s.FormField>
                            <s.Label>Email</s.Label>
                            <s.Text type="email" required placeholder="email" onChange={(e) => {setEmail(e.target.value) }} />
                        </s.FormField>

                        <s.FormField>
                            <s.Label>Password</s.Label>
                            <s.Text  type="password" required placeholder="password" onChange={(e) => {setPassword(e.target.value) }} />
                        </s.FormField>

                        <s.FormField>
                            <s.Label>Confirm Password</s.Label>
                            <s.Text  type="password" required placeholder="confirm password" onChange={(e) => {setConfirmPassword(e.target.value) }} />
                        </s.FormField>

                        <s.FormField>
                            <s.LoginButton>Register</s.LoginButton>
                        </s.FormField>

                        <s.TextLabel>
                            <s.TextSignup to='/login'>Already have an account?</s.TextSignup>
                        </s.TextLabel>

                    </s.FormWrapper>
                </s.CardContainer>
            </s.LoginPageContainer>
        </s.LoginPageWrap>   
        </>
    )
}

export default SignUpPage
