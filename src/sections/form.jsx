import { useState } from "react";
import { Formcardstoled } from "./formcardstoled";
import { Formcardfound } from "./formcardfound";

export function Form() {
  const [formcp, setFormcp] = useState(true);

  function changeform (){
    setFormcp(!formcp)
  }

  return (
    <div className="formbloc">
      <div className="formulaire">
        <div className="formbtn">
          <button onClick={changeform} style={{backgroundColor: formcp ? "black" : "white", color : formcp ? "white" : "black" }}>carte perdue</button>
          <button onClick={changeform} style={{backgroundColor: formcp ? "white" : "black", color : formcp ? "black" : "white"} }>carte rétrouvée</button>
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