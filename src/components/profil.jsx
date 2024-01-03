export function Profil ({onecomment}){
    const {id, name, comment, date, image, classname} = onecomment
    return(
        <div className={`blocprofil ${classname}`}>
            <span className="para1">"</span>
            <span className="para2">"</span>
            <div className="blocprofilabs">
                <div className="profiltitle">
                    <img src={image}></img>
                    <p>{name}</p>
                </div>
                <div className="comment">
                    <p>{comment} </p>
                </div>
            </div>
            <span className="date">{date}</span>
        </div>
    )
}