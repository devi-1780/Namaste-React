import { LOGO_URL } from "./constants";
const Header=()=>{
    return(
        <div className="header">
            <div>
                <img src={LOGO_URL} className="logo" alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>CONTACT US</li>
                    <li>CART</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;