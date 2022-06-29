import "./App.css"
import {Outlet , Link} from "react-router-dom";
function Layout (){
    return (<>
        <nav className="navig">
            <ul className="underline">
                <li className="line"><Link to="./" className="link ">Home</Link></li>
                <li className="line"><Link to="./About" className="link ">About</Link></li>
                <li className="line"><Link to="./Contact" className="link">Contact us</Link></li>
                <li className="line"><Link to="./Services" className="link">Services page</Link></li>
                <li className="line"><Link to="About" className="link">About</Link></li>
               
            </ul>
        </nav>
        <Outlet/>
    </>)
}

export default Layout;