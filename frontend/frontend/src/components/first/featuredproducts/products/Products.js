import './Products.css'
import SolahartFH from '../../../../images/categories/solahart-indirect-freeheat.png'
import SolahartG from '../../../../images/categories/solahart-indirect-gold.png'
import SolahartSL from '../../../../images/categories/solahart-direct-sl.png'
import SolahartL from '../../../../images/categories/solahart-direct-l.png'
import Mpoinwave from '../../../../images/categories/mpoin/mpoin-wave.jpg'
import Mpoindrain from '../../../../images/categories/mpoin/mpoin-drain.jpg'
import Mpointall from '../../../../images/categories/mpoin/mpoin-tall.jpg'
import Mpoinuground from '../../../../images/categories/mpoin/mpoin-uground.jpg'

import Solahartpng from '../../../../images/solahart-logo-png.png'
import Mpoin from '../../../../images/mpoin-logo.png'
const Products = () =>{
    return(
        <div >
            <div className={'fproduct-container-solahart'}>
            <div className={'fproduct-logo'}>
            <img src={Solahartpng}></img>
            </div>
            <div className={'fproduct'}>
                <div>
                <img src={SolahartFH}></img>
                <p>Solahart Free Heat</p>
                </div>
                <div>
                <img src={SolahartG}></img>
                <p>Solahart Free Gold</p>
                </div>  
                <div>
                <img src={SolahartSL}></img>
                <p>Solahart SL</p>
                </div>  
                <div>
                <img src={SolahartL}></img>
                <p>Solahart L</p>
                </div>  
            </div>
            </div>
            <br></br>
            <div className={'fproduct-container-mpoin'}>
            <div className={'fproduct-logo'}>
            <img src={Mpoin}></img>
            </div>
            <div className={'fproduct'}>
                <div>
                <img src={Mpoinwave}></img>
                <p>Solahart Free Heat</p>
                </div>
                <div>
                <img src={Mpoindrain}></img>
                <p>Solahart Free Gold</p>
                </div>  
                <div>
                <img src={Mpointall}></img>
                <p>Solahart SL</p>
                </div>  
                <div>
                <img src={Mpoinuground}></img>
                <p>Solahart L</p>
                </div>
                <div>
                <img src={Mpoinuground}></img>
                <p>Solahart L</p>
                </div>    
            </div>
            </div>
        </div>
    )

}
export default Products;