import imagedollars from '../medias/dollars.png'
export function Service(){
    return(
        <div className="service">
            <div  className="servicecontent">
                <div className="servicecontenttext">
                    <h1  className='tittle'>
                        Gagner de l'argent en aidant les autres à retrouver leurs cartes perdues
                    </h1>
                    <p className='content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae suscipit iste ad commodi quibusdam odit earum facere at nulla velit quos non nobis iusto deleniti itaque, accusantium vero!</p>
                    <div className='button'>
                        <a href='#'id='#formulaire' >Cliquez ici</a>
                    </div>
                </div>
                <div className='servicecontentimage'>
                    <img src={imagedollars}></img>
                </div>

            </div>
        </div>
    )
}