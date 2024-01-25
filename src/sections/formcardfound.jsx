import { useState } from 'react';
import axios from 'axios';
import { GiHumanTarget } from 'react-icons/gi';
import { FaPerson } from "react-icons/fa6";
import { FaPersonBreastfeeding } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";

export function Formcardfound() {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [cardtype, setCardType] = useState('');
  const [mareponse, setMareponse] = useState('')
  const [nameusercardown, setNameusercardown] = useState('')
  const [lastnameusercardown, setLastnameusercardown] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/userscardsfound', {
        name,
        lastname,
        email,
        tel,
        cardtype,
        nameusercardown,
        lastnameusercardown
      });

      console.log(response.data);
      if(response.data === "exist"){
        setMareponse("votre carte a été trouvée")
      }else{
        setMareponse("votre carte n'a pas été trouvée")
      }

      setName('');
      setLastname('');
      setEmail('');
      setTel('');
      setCardType('');
      setNameusercardown('')
      setLastnameusercardown('')
    } catch (error) {
      console.error(error);
      setMareponse("votre carte n'a pas été trouvée")
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
              id='name'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span className='inputicone'><FaPerson /></span>
          </div>
        </div>

        <div className='inputcontenaire'>
          <label htmlFor='lastname'>prenom</label>
          <div className='inputgroupe'>
            <input
              type='text'
              id='lastname'
              placeholder='Lastname'
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <span className='inputicone'><FaPersonBreastfeeding /></span>
          </div>
        </div>

        <div className='inputcontenaire'>
          <label htmlFor='email'>Email</label>
          <div className='inputgroupe'>
            <input
              type='text'
              id='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className='inputicone'><MdEmail /></span>
          </div>
        </div>

        <div className='inputcontenaire'>
          <label htmlFor='tel'>Tel</label>
          <div className='inputgroupe'>
            <input
              type='text'
              id='tel'
              placeholder='Tel'
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
            <span className='inputicone'><IoCallSharp /></span>
          </div>
        </div>
        <div className='inputcontenaire'>
          <label htmlFor='nameusercardown'>nom du propriétaire de la carte</label>
          <div className='inputgroupe'>
            <input
              type='text'
              id='nameusercardown'
              placeholder='Tel'
              value={nameusercardown}
              onChange={(e) => setNameusercardown(e.target.value)}
            />
            <span className='inputicone'><GiHumanTarget/></span>
          </div>
        </div>

        <div className='inputcontenaire'>
          <label htmlFor='lastnameusercardown'>prenom du propriétaire de la carte</label>
          <div className='inputgroupe'>
            <input
              type='text'
              id='lastnameusercardown'
              placeholder='Tel'
              value={lastnameusercardown}
              onChange={(e) => setLastnameusercardown(e.target.value)}
            />
            <span className='inputicone'><GiHumanTarget/></span>
          </div>
        </div>

        <div className='inputcontenaire'>
          <label htmlFor='cardtype'>Type de carte</label>
          <div className='inputgroupe'>
            <select
              id='cardtype'
              value={cardtype}
              onChange={(e) => setCardType(e.target.value)}
            >
              <option value=''>Select Card Type</option>
              <option value='electercard'>carte d'électeur</option>
              <option value='studentcard'>carte d'étudiant</option>
              <option value='identitycard'>carte d'identité</option>
              <option value='visacard'>carte de service</option>
              <option value='passport'>Passport</option>
            </select>
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