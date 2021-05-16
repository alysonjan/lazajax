import React  from 'react'
import * as w from './WalletPage.elements';
import { WalletCard } from '../../components';



const WalletPage = () => {

    // const [balance, setBalance] = useState([])


    // useEffect(() => {
    //     axiosInstance.get('/api/wallet').then((response) => {
    //         setBalance(response.data)
    //     })
    // },[setBalance])


    return (
        <>
        <w.WalletContainer>
            <w.WalletWrapper>
                <WalletCard />
            </w.WalletWrapper>
        </w.WalletContainer>  
        </>
    )
}

export default WalletPage

