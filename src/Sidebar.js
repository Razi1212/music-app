import "./sidebar.css";
import { useState } from "react";
import { GoHistory } from "react-icons/go";
import {LiaShippingFastSolid,LiaGreaterThanSolid,LiaLessThanSolid} from "react-icons/lia"
import {RxHamburgerMenu} from "react-icons/rx"
import {BiUser,BiSolidDashboard} from "react-icons/bi"
import {CiStreamOn} from "react-icons/ci"
import {AiOutlineInbox,AiOutlineCloseCircle} from "react-icons/ai"
import {GrTransaction} from "react-icons/gr"
import {FcMoneyTransfer} from "react-icons/fc"

function Sidebar(){
    
    const[value,setValue] =useState(<LiaGreaterThanSolid/>);
    const[isSet, setIsSet] = useState(false);
    const[opened, setOpened] = useState("");
    const[sidebar, setSidebar] = useState("");
    const[headtext, setHeadtext] = useState("");
    const[elems, setElems] = useState(["", "", "", "", "", "", ""]);
    function getVal(){
        
        var elements = ["Account" , "Streaming", "Order", "Transaction", "Shipment", "Payment", "History"]
        var ele = document.getElementsByClassName("sidebar-li")
        if(!isSet){
        setValue(<LiaLessThanSolid/>)
        setIsSet(true)
        setSidebar("show")
        
        setOpened("open")
       setHeadtext("Persona")
       setElems(elements)
       
        }
        else{
            setValue(<LiaGreaterThanSolid/>)
            setIsSet(false)
            setOpened("")
           setHeadtext("")
            setElems(["", "", "", "", "", "", ""])
           setSidebar("")
        }
    }
    return(
         <>
         <nav>
             <ul className="sidebar-menu" id={sidebar} >
               <li className="main-icon"> <BiSolidDashboard/>{headtext}</li>
                 <li className="hamburger" id={opened} onClick={getVal}>{value}</li>
                 <li className="sidebar-li"><BiUser/> <span>{elems[0]}</span></li>
                 <li className="sidebar-li"><CiStreamOn/> <span>{elems[1]}</span></li>
                 <li className="sidebar-li"><AiOutlineInbox/> <span>{elems[2]}</span></li>
                 <li className="sidebar-li"><GrTransaction/> <span>{elems[3]}</span></li>
                 <li className="sidebar-li"><LiaShippingFastSolid/> <span>{elems[4]}</span></li>
                 <li className="sidebar-li"><FcMoneyTransfer/> <span>{elems[5]}</span></li>
                 <li className="sidebar-li"><GoHistory/> <span>{elems[6]}</span></li>
            </ul>
        </nav>
        </>
    )
}
export default Sidebar;