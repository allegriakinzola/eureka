import imagedollars from '../medias/dollars.png'
export function Service(){
    return(
        <div className="service">
            <div  className="servicecontent">
                <div className="servicecontenttext">
                    <h1  className='tittle'>
                        Gagner de l'argent en aidant les autres à retrouver leurs cartes perdues
                    </h1>
                    <p className='content'>Vous avez la chance de gagner 1$ en aidant les autres personnes à retrouver leurs cartes perdues ! Il vous suffit de récupérer toutes les cartes perdues que vous trouvez, puis de les renseigner sur notre plateforme.</p>
                    <div className='button'>
                        <a href='#formulaire' >Cliquez ici</a>
                    </div>
                </div>
                <div className='servicecontentimage'>
                    <img src={imagedollars}></img>
                </div>

            </div>
        </div>
    )
}