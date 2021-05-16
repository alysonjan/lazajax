import React from 'react'
import * as n from './Navbar.elements';
import { useHistory } from "react-router-dom";


const Navbar = () => {
    var history = useHistory();
    
    const logout = (e) => {
        e.preventDefault();
        window.localStorage.removeItem("Balance");
        window.localStorage.removeItem("Email");
        window.localStorage.removeItem("Password");
        history.push('/login')
        
    }
    return (
        <>
        <n.Nav>
            <n.NavbarContainer>
                <n.NavLogo  to='/'>LazajaX</n.NavLogo>
                <n.NavMenu>
                    <n.NavItem>
                    <n.NavLinks to="/wallet">E-Wallet</n.NavLinks>
                    </n.NavItem>
                    <n.NavBtn>
                        <n.NavBtnLink onClick={logout}>Logout</n.NavBtnLink>
                    </n.NavBtn>
                </n.NavMenu>
            </n.NavbarContainer>
        </n.Nav>   
        </>
    )
}

export default Navbar
