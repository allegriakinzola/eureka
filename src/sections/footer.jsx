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
                <p>&copy; 2022 Votre Allegria Kinzola. Tous droits réservés.</p>
           </div>
        </div>
    )
}