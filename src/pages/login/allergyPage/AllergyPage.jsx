import React, { useEffect, useState } from 'react'
import './allergyPage.css'
import axios from 'axios'
import Bttn_Back from '../../../components/bttns/bttn_Back/Bttn_Back';
import { useNavigate } from 'react-router-dom';


export default function AllergyPage() {

  const [allergies, setAllergies] = useState([]);

  const [arrAllergies, setArrAllergies] = useState([]);

  console.log(arrAllergies);

  const dataUser = JSON.parse(localStorage.getItem('userDataString'));

  const dataContactSOS = JSON.parse(localStorage.getItem('contactSOSDataString'));

  const navigate = useNavigate();


  const getAllAllergy = async () => {

    axios.get(`https://node-basic-wheat.vercel.app/allergy`)
      .then(res => setAllergies(res.data.data))

  }

  const createUser = async () => {

  

    const SOSdataContact = await
      axios.post(`https://node-basic-wheat.vercel.app/sosContact/register`, dataContactSOS);

    const idSosContact = SOSdataContact.data.data._id;

    Object.defineProperties(dataUser, {
      sosContact: {
        value: idSosContact,
        writable: true,
        enumerable: true,
        configurable: true
      },
      allergy: {
        value: arrAllergies,
        writable: true,
        enumerable: true,
        configurable: true
      }
    })

    await axios.post("https://node-basic-wheat.vercel.app/user/register", dataUser)

    navigate("/login");

  }

  const handleAllergy = (element) => {



    const arrData = [...arrAllergies];

    arrData.push(element.target.title);



    setArrAllergies(arrData);

  }


  useEffect(() => {

    getAllAllergy()

  }, []);

  // console.log(users)
  return (
    <>
      <Bttn_Back />

      <div className='allergies-body'>
        <div className='text-h1'>
          <h1>Confirma tu selección</h1>
        </div>

        <div className="text-p">
          <p>Los elementos marcados serán identificados en tus búsquedas
            como <strong>peligrosos</strong></p>
        </div>


        <div className='allergies-buttons'>
          {allergies.map((allergy, index) => (

            <div
              className='allergy'
              key={index}
              onClick={(e) => handleAllergy(e)}
              title={allergy._id}

            >
              <p>{allergy.name}</p>
              <img src={`IMG/` + allergy.image} alt={allergy.name}></img>
            </div>))}

        </div>


        <button
          className='confirmation-button'
          onClick={createUser}
        >
          Confirmar
        </button>
      </div>
    </>

  )
}