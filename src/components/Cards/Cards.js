import React from 'react'
import * as c from './Cards.elements';
import { Button } from '../Global/Global'
import  productData  from '../../Database/product.json'


const Cards = () => {

    const buyHandler = (price,bal) => {

        if (price <= bal){
            let newbal = bal-price
            alert('You successfully buy this Item')
            updateBalance(newbal);
        }else{
            alert("Insufficient balance")
        }
    }

    const updateBalance = (nb) => {
        alert("This is your new Balance "+nb)
        localStorage.setItem("Balance",nb)
    }


    return (
        <>
    {productData.map((val) => {
                    return (
                        <c.CardContainer key={val.id}>
                            <c.CardWrapper>
                                <c.Cards>
                                    <c.CardImage src={val.imageurl} />
                                    <c.CardTitle>{val.title}</c.CardTitle>
                                    <c.CardPrice>&#8369;{val.price}</c.CardPrice>
                                    <c.CardDescription>{val.description}</c.CardDescription>

                                    <Button onClick={() => buyHandler(val.price,localStorage.getItem("Balance"))}>Buy</Button>
                                </c.Cards>
                            </c.CardWrapper>
                        </c.CardContainer>
                    )
                })
            }
        </>
    )
}


export default Cards

