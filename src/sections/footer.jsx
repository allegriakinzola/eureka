import { FaPerson } from "react-icons/fa6";

export function Footer (){
    return(
        <div className="footer">
           <div className="footercontent">
                <div className="listicone">
                    <span><FaPerson/></span>
                    <span><FaPerson/></span>
                    <span><FaPerson/></span>
                </div>
                <p>copyright allegria kinzola 2023</p>
           </div>
        </div>
    )
}