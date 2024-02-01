import imageillustration2 from '../medias/eurekaillustration2.png'
import {comments} from '../data/comments'
import { Profil } from '../components/profil'
import { useState } from 'react'

export function Home(){
    const [activeUser, setActiveUser] = useState(null);

    const showcomment = (user) => {
        setActiveUser(user);
      };


  
    return(
        <div className="home">
            <div className="homecontent">
              {
                activeUser && (
                    <>
                    <Profil onecomment={comments.find((onecomment) => onecomment.id === activeUser)} />
                    </>
                )
                }
             <div className="homecontentsplain">
                    <h1>
                        LA PLATEFORME MAGIQUE POUR RETROUVER VOS CARTES PERDUES.
                    </h1>
                    <h5>
                    Eureka est une plateforme qui met en relation une personne 
                    qui a perdu sa carte et celle qui l'a retrouvée.
                    </h5>
                    <div className='cartebouton'>
                        <a href='#home' className='cp'>carte perdue</a>
                        <a href='#home' className='cr'>carte ramassée</a>
                    </div>
                    <div className='testemony'>
                    {
                    comments.map((onecomment) => (
                        <div
                            className={`profil ${onecomment.classname}`}
                            onMouseEnter={() => showcomment(onecomment.id)}
                            onMouseLeave={() => showcomment(null)}
                            key={onecomment.id}
                        >
                            <img src={onecomment.image} alt="image temoignage eureka" />
                        </div>
                     ))
                    }
                    </div>
                    <small className='testemonytittle'>témoignages ...</small>
                </div>
                <div className="homecontentimage">
                    <img src={imageillustration2}></img>
                </div>
            </div>
        </div>
    )
}