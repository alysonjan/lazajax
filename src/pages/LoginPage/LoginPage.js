import React, { useState } from 'react'
import * as Login from './LoginPage.elements'
import { useHistory } from "react-router-dom";
import md5 from 'md5';


const LoginPage = () => {

    var history = useHistory();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const submitHandler = (e) => {
        e.preventDefault();
        if (!localStorage.getItem("Email") && !localStorage.getItem("Password")){
            alert("Please Sign Up!")
        }else{
            let hashpass = md5(password)
            if (email === localStorage.getItem("Email") && hashpass === localStorage.getItem("Password")) {
                alert("Successfully Login!")
                history.push('/')

            }else{
                alert("Invalid Credentials")
            }
        }
    }

    return (
        <>
        <Login.LoginPageWrap>
            <Login.LoginPageContainer>
                <Login.Logo>
                    <Login.MainLogo />
                </Login.Logo>
                <Login.Header>E-Wallet App</Login.Header>
                <Login.CardContainer>

                    <Login.FormWrapper onSubmit= {submitHandler}>
                        <Login.FormField>
                            <Login.Label>Email</Login.Label>
                            <Login.Text type="email" required placeholder="email" onChange={(e) => {setEmail(e.target.value) }}/>
                        </Login.FormField>

                        <Login.FormField>
                            <Login.Label>Password</Login.Label>
                            <Login.Text type="password" required placeholder="password" onChange={(e) => {setPassword(e.target.value) }}/>
                        </Login.FormField>

                        <Login.FormField>
                            <Login.LoginButton>Login</Login.LoginButton>
                        </Login.FormField>

                        <Login.TextLabel>
                            <Login.TextSignup to='/signup'>No account? Sign up here</Login.TextSignup>
                        </Login.TextLabel>
                    </Login.FormWrapper>

                </Login.CardContainer>
            </Login.LoginPageContainer>
        </Login.LoginPageWrap>   
        </>
    )
}

export default LoginPage
