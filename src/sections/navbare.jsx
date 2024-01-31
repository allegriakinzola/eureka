import { useState } from 'react';
import { AiOutlineBars } from 'react-icons/ai';
import {AiFillCloseCircle} from 'react-icons/ai';
import {FcDonate} from 'react-icons/fc'
import logo from '../medias/logo.png'
export function Navbare(){
    const [iSnavAcative, setIsnavActive] = useState(false)
    const [isbackgroundflouactive, setIsackgroundflouactive] = useState(false)
    const navtoggle = () =>{
        setIsnavActive(!iSnavAcative)
        setIsackgroundflouactive(!isbackgroundflouactive)
    }

    return(
        <div className="navbare">
            <div className={`backgroundflou ${isbackgroundflouactive ? 'backgroundflouactive' : "" }`} onClick={navtoggle}>
            </div>
            <div className="navbarelogo">
                <img src={logo}></img>
            </div>
            <div className={`navbarelink ${iSnavAcative ? 'active' : ''}`}>
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#action">Action</a>
                    </li>
                    <li>
                        <a href="#home">Formulaire</a>
                    </li>
                    <li className='bouton'>
                    <a className="boutondon">
                        <span className='texticondon'>Faire un don</span>
                        <span  className='icondon'><FcDonate className="icondon-color"/></span>
                    </a>
                    </li>
                </ul>
                <span className='closee' onClick={navtoggle}>
                    <AiFillCloseCircle/>
                </span>
            </div>
            <div className="navbarebouton">
                <a className="boutondon">
                    <span className='texticondon'>Faire un don</span>
                    <span  className='icondon'><FcDonate className="icondon-color"/></span>
                </a>
                <span className='spanoutbare' onClick={navtoggle}>
                    <AiOutlineBars className='outbare'/>
                </span>
            </div>
        </div>
    )
}