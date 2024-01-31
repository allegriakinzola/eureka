import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";


export function Footer (){
    return(
        <div className="footer">
           <div className="footercontent">
                <div className="listicone">
                    <a href="https://github.com/allegriakinzola" target="_blank"><span><FaGithub/></span></a>
                    <a href="https://github.com/allegriakinzola" target="_blank"><span><FaWhatsapp/></span></a>
                    <a href="https://github.com/allegriakinzola" target="_blank"><span><CiLinkedin/></span></a>
                </div>
                <p>&copy; 2023 Allegria Kinzola. Tous droits réservés.</p>
           </div>
        </div>
    )
}