import { useState } from "react";
import { Formcardstoled } from "./formcardstoled";
import { Formcardfound } from "./formcardfound";

export function Form() {
  const [formcp, setFormcp] = useState(true);

  function changeform1 (){
    if(formcp){
      setFormcp(true)
    }else{
      setFormcp(!formcp)
    }
  }

  function changeform2 (){
    if(!formcp){
      setFormcp(false)
    }else{
      setFormcp(!formcp)
    }
  }

  return (
    <div className="formbloc">
      <div className="formulaire">
        <div className="formbtn">
          <button onClick={changeform1} style={{backgroundColor: formcp ? "black" : "white", color : formcp ? "white" : "black" }}>carte perdue</button>
          <button onClick={changeform2} style={{backgroundColor: formcp ? "white" : "black", color : formcp ? "black" : "white"} }>carte rétrouvée</button>
        </div>
        <>
        {
            formcp ? <Formcardstoled/> : <Formcardfound/>
        }
        </>
      </div>
    </div>
  );
}