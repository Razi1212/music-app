import "./App.css";import { BsBell }
 from "react-icons/bs";import { FiShoppingCart } 
 from "react-icons/fi";import { BsSearch } 
 from "react-icons/bs";
 import "./Navigation.js";
 import Navigation from "./Navigation.js"
 import Sidebar from "./Sidebar";

function App() {
   return (
    <>
      <div className="head">
      <div className="side-bar">
      <Sidebar/> 
      </div>
       <div className="nav-head">
        <nav className="header">
       <div className="search-container searchbar">
       <input type="search" placeholder="Search Now"></input>
        <BsSearch/>
         </div>
          <ul className="icons">
          <li><FiShoppingCart /></li>
          <li><BsBell /></li>
          </ul>
        </nav>
      <Navigation/>
    </div>
  </div>
 </>
  );
}
export default App;