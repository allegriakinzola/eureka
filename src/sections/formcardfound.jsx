import { useState } from 'react';
import axios from 'axios';
import { FaPerson } from "react-icons/fa6";
import { FaPersonBreastfeeding } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaPersonDotsFromLine } from "react-icons/fa6";
import { FaPersonDrowning } from "react-icons/fa6";


function Success () {
  return(
    <div className='sucess'>
      <div className='rond'></div>
    </div>
  )
}

export function Formcardfound() {
  const [cardislosted, setCardislosted] = useState(true)
  const [showsucess, setShowsucess] = useState(false)
  const [mareponse, setMareponse] = useState('')
  const [touched, setTouched] = useState({
    name : false,
    lastname : false,
    email : false,
    tel : false,
    cardtype : false,
    nameusercardown: false, 
    lastnameusercardown : false,

  })
  const [dataForm, setDataForm] = useState({
    name :"",
    lastname : "",
    email : "",
    tel : "",
    cardtype : "",
    nameusercardown: "", 
    lastnameusercardown : "",
  })

  const validate = () => {
    let errorMessage= "ce champs ne peut pas être vide ";
    const errors = {
      name :"",
      lastname : "",
      email : "",
      tel : "",
      cardtype : "",
      nameusercardown: "", 
      lastnameusercardown : "",
    }


    if(touched.name == true && dataForm.name === ""){
      errors.name = errorMessage
    }
    if(touched.lastname == true && dataForm.lastname === ""){
      errors.lastname = errorMessage
    }
    if(touched.email == true && dataForm.email === ""){
      errors.email = "ce champs ne peut pas être vide "
    }
    if (touched.tel == true && dataForm.tel === "") {
      errors.tel = "Ce champ est vide";
    } else if (touched.tel == true && isNaN(dataForm.tel)) {
      errors.tel = "Ce champ doit contenir un nombre";
    }
    if(touched.cardtype == true && dataForm.cardtype === ""){
      errors.cardtype = "ce champs ne peut pas être vide "
    }
    if(touched.nameusercardown == true && dataForm.nameusercardown === ""){
      errors.nameusercardown = "ce champs ne peut pas être vide"
    }
    if(touched.lastnameusercardown == true && dataForm.lastnameusercardown === ""){
      errors.lastnameusercardown = "ce champs ne peut pas être vide"
    }
    return errors
  }

  const errors = validate()
  
  const onBlur = (e) => {
    const {name} = e.target
    setTouched({...touched, [name] : true })
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setDataForm({[name] : value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowsucess(true)

    try {
      const response = await axios.post('https://heurekaback.onrender.com/userscardsfound', dataForm);
      console.log(response.data);
      if(response.data === "exist"){
        setShowsucess(false)
        setMareponse("votre carte n'a pas été trouvée")
      }else{
        setShowsucess(false)
        setMareponse("votre carte n'a pas été trouvée")
      }
    } catch (error) {
      console.error(`une erreur s'est produite lors de l'envoie des données : ${error}`);
      setMareponse("vous devez remplir tous les champs")
    }
  };

  return (
    <div className='formcardstoled'>
      <form onSubmit={handleSubmit}>
        <div className='inputcontenaire'>
          <label htmlFor='name'>Nom</label>
          <div className='inputgroupe'>
            <input
              type='text'
              name='name'
              placeholder='ex : kapinga'
              value={dataForm.name}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <span className='inputicone'><FaPerson /></span>
          </div>
          <small>{errors.name}</small>
        </div>

        <div className='inputcontenaire'>
          <label htmlFor='lastname'>prenom</label>
          <div className='inputgroupe'>
            <input
              type='text'
              id='lastname'
              name='lastname'
              placeholder='ex : bernice'
              value={dataForm.lastname}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <span className='inputicone'><FaPersonBreastfeeding /></span>
          </div>
          <small>{errors.lastname}</small>
        </div>

        <div className='inputcontenaire'>
          <label htmlFor='email'>Email</label>
          <div className='inputgroupe'>
            <input
              type='text'
              id='email'
              name='email'
              placeholder='ex : kapingabernice@gmail.com'
              value={dataForm.email}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <span className='inputicone'><MdEmail /></span>
          </div>
          <small>{errors.email}</small>
        </div>

        <div className='inputcontenaire'>
          <label htmlFor='tel'>Tel</label>
          <div className='inputgroupe'>
            <input
              type='text'
              name='tel'
              id='tel'
              placeholder='ex : 0828312365'
              value={dataForm.tel}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <span className='inputicone'><IoCallSharp /></span>
          </div>
          <small>{errors.tel}</small>
        </div>
        <div className='inputcontenaire'>
          <label htmlFor='nameusercardown'>nom du propriétaire de la carte</label>
          <div className='inputgroupe'>
            <input
              type='text'
              id='nameusercardown'
              name='nameusercardown'
              placeholder='ex : kabulo'
              value={dataForm.nameusercardown}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <span className='inputicone'><FaPersonDotsFromLine /></span>
          </div>
          <small>{errors.nameusercardown}</small>
        </div>

        <div className='inputcontenaire'>
          <label htmlFor='lastnameusercardown'>prenom du propriétaire de la carte</label>
          <div className='inputgroupe'>
            <input
              type='text'
              id='lastnameusercardown'
              name='lastnameusercardown'
              placeholder='ex : francis'
              value={dataForm.lastnameusercardown}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <span className='inputicone'><FaPersonDrowning /></span>
          </div>
          <small>{errors.lastnameusercardown}</small>
        </div>

        <div className='inputcontenaire'>
          <label htmlFor='cardtype'>Type de carte</label>
          <div className='inputgroupe'>
            <select
              id='cardtype'
              name='cardtype'
              value={dataForm.cardtype}
              onChange={handleChange}
              onBlur={onBlur}
            >
              <option value=''>Select Card Type</option>
              <option value='electercard'>carte d'électeur</option>
              <option value='studentcard'>carte d'étudiant</option>
              <option value='identitycard'>carte d'identité</option>
              <option value='visacard'>carte de service</option>
              <option value='passport'>Passport</option>
            </select>
            <span className='inputicone'><FaPersonDrowning/></span>
          </div>
          <small>{errors.cardtype}</small>
        </div>

        <div className='submitcont'>
          <button type='submit' className='submit'>Envoyer</button>
        </div>
        {cardislosted ? (
          <div className='reponse'>
            {showsucess ? <Success /> :  <p>{mareponse}</p>}
          </div>
        ) : <p>{mareponse}</p>}
      </form>
    </div>
  );
}