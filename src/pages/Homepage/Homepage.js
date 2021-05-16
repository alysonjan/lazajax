import React from 'react'
import { Cards } from '../../components'
import { HomePageContainer, CardsContainer, CardsColContainer } from '../Homepage/Homepage.elements'

const Homepage = () => {

  
    return (
        <>
            <HomePageContainer>
                <CardsContainer>

                    <CardsColContainer>
                        <Cards />
                    </CardsColContainer>

                </CardsContainer>
            </HomePageContainer>
        </>
    )
}

export default Homepage
