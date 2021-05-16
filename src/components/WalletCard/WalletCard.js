import React  from 'react'
import * as w from './WalletCard.elements';

const WalletCard = () => {

    var bal = localStorage.getItem("Balance")
    return (
        <>
        <w.WalletCard>
            <w.WalletBalance >Balance: &#8369;{bal}</w.WalletBalance>
        </w.WalletCard>

        </>
    )
}

export default WalletCard
