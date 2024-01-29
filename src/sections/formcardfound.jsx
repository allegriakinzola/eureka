import { useState } from 'react';
import axios from 'axios';
import { FaPerson } from "react-icons/fa6";
import { FaPersonBreastfeeding } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaPersonDotsFromLine } from "react-icons/fa6";
import { FaPersonDrowning } from "react-icons/fa6";

export function Formcardfound() {
  const [mareponse, setMareponse] = useState('')
  const [dataForm, setDataForm] = useState({
    name :"",
    lastname : "",
    email : "",
    tel : "",
    cardtype : "",
    nameusercardown: "", 
    lastnameusercardown : "",
  })
  

  const handleChange = (e) => {
    setDataForm({[e.target.name] : e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://heurekaback.onrender.com/userscardsfound', dataForm);
      console.log(response.data);
      if(response.data === "exist"){
        setMareponse("votre carte a été trouvée")
      }else{
        setMareponse("votre carte n'a pas été trouvée")
      }
    } catch (error) {
      console.error(`une erreur s'est produite lors de l'envoie des données : ${error}`);
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
              placeholder='Name'
              value={dataForm.name}
              onChange={handleChange}
            />
            <span className='inputicone'><FaPerson /></span>
          </div>
          <small>reponse : {mareponse} </small>
        </div>

        <div className='inputcontenaire'>
          <label htmlFor='lastname'>prenom</label>
          <div className='inputgroupe'>
            <input
              type='text'
              id='lastname'
              name='lastname'
              placeholder='Lastname'
              value={dataForm.lastname}
              onChange={handleChange}
            />
            <span className='inputicone'><FaPersonBreastfeeding /></span>
          </div>
          <small></small>
        </div>

        <div className='inputcontenaire'>
          <label htmlFor='email'>Email</label>
          <div className='inputgroupe'>
            <input
              type='text'
              id='email'
              name='email'
              placeholder='Email'
              value={dataForm.email}
              onChange={handleChange}
            />
            <span className='inputicone'><MdEmail /></span>
          </div>
          <small>shh</small>
        </div>

        <div className='inputcontenaire'>
          <label htmlFor='tel'>Tel</label>
          <div className='inputgroupe'>
            <input
              type='text'
              name='tel'
              id='tel'
              placeholder='Tel'
              value={dataForm.tel}
              onChange={handleChange}
            />
            <span className='inputicone'><IoCallSharp /></span>
          </div>
          <small>shh</small>
        </div>
        <div className='inputcontenaire'>
          <label htmlFor='nameusercardown'>nom du propriétaire de la carte</label>
          <div className='inputgroupe'>
            <input
              type='text'
              id='nameusercardown'
              name='nameusercardown'
              placeholder='nom du propriétaire de la carte'
              value={dataForm.nameusercardown}
              onChange={handleChange}
            />
            <span className='inputicone'><FaPersonDotsFromLine /></span>
          </div>
          <small>shh</small>
        </div>

        <div className='inputcontenaire'>
          <label htmlFor='lastnameusercardown'>prenom du propriétaire de la carte</label>
          <div className='inputgroupe'>
            <input
              type='text'
              id='lastnameusercardown'
              name='lastnameusercardown'
              placeholder='prenom du propriétaire de la carte'
              value={dataForm.lastnameusercardown}
              onChange={handleChange}
            />
            <span className='inputicone'><FaPersonDrowning /></span>
          </div>
          <small>reponse {mareponse} </small>
        </div>

        <div className='inputcontenaire'>
          <label htmlFor='cardtype'>Type de carte</label>
          <div className='inputgroupe'>
            <select
              id='cardtype'
              name='cardtype'
              value={dataForm.cardtype}
              onChange={handleChange}
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
        </div>

        <div className='submitcont'>
          <button type='submit' className='submit'>Envoyer</button>
        </div>
        <div className='reponse'>
          <p>{mareponse}</p>
        </div>

      </form>
    </div>
  );
}