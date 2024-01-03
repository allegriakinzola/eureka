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
          <button onClick={changeform} style={{backgroundImage: formcp ? "linear-gradient(to left, #6b6f6f, #8e9192, #b3b4b5, #d8d9da, #ffffff)" : "linear-gradient(to right bottom, #000000, #191819, #292a2c, #393d3f, #4b5151)"}}>carte perdue</button>
          <button onClick={changeform} style={{backgroundImage: formcp ? "linear-gradient(to right bottom, #000000, #191819, #292a2c, #393d3f, #4b5151)" : "linear-gradient(to left, #6b6f6f, #8e9192, #b3b4b5, #d8d9da, #ffffff)"} }>carte rétrouvée</button>
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