import "./navigation.css"
import { LiaLessThanSolid } from "react-icons/lia";
function Navigation() {
    return (
      <>
       <nav >
        <ul className="navigation">
            <LiaLessThanSolid/>
            <li>Dashboard</li>
            <li>Earnings</li>
            <li>Your Product</li>
            <li>Shop</li>
            <li>Setting</li>
        </ul>
       </nav>
       <br/>
       <hr></hr>
      </>
    );
  }
  
  export default Navigation;