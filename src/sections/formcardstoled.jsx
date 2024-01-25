import { useState } from 'react';
import axios from 'axios';
import { GiHumanTarget } from 'react-icons/gi';

export function Formcardstoled() {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [cardtype, setCardType] = useState('');
  const [mareponse, setMareponse] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Envoyer les données au backend
      const response = await axios.post('http://localhost:8000/userscardsstoled', {
        name,
        lastname,
        email,
        tel,
        cardtype,
      });

      // Afficher la réponse du backend
      console.log(response.data);
      if(response.data === "exist"){
        setMareponse("votre carte a été trouvée")
      }else{
        setMareponse("votre carte n'a pas été trouvée")
      }

      // Réinitialiser le formulaire
      setName('');
      setLastname('');
      setEmail('');
      setTel('');
      setCardType('');
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
              placeholder='nom'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span className='inputicone'><GiHumanTarget/></span>
          </div>
        </div>

        <div className='inputcontenaire'>
          <label htmlFor='lastname'>prenom</label>
          <div className='inputgroupe'>
            <input
              type='text'
              id='lastname'
              placeholder='prenom'
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <span className='inputicone'><GiHumanTarget/></span>
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
            <span className='inputicone'><GiHumanTarget/></span>
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
            <span className='inputicone'><GiHumanTarget/></span>
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