import React, { useEffect, useState } from 'react'
import './allergyPage.css'
import axios from 'axios'
import Bttn_Back from '../../../components/bttns/bttn_Back/Bttn_Back';


export default function AllergyPage() {

  const [allergies, setAllergies] = useState([])
  const [users, setUsers] = useState([])

 
  const allergyUpdated = (evento) => {


    
    
  }
    
  useEffect(() => {  
    axios.get(`https://node-basic-wheat.vercel.app/allergy`)
      .then(res => setAllergies(res.data.data)) 
    
    axios.get(`https://node-basic-wheat.vercel.app/user`)
      .then(res => setUsers(res.data.data)) 

    }, []);

    console.log (users)
  return (
   <>
    <Bttn_Back></Bttn_Back>
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
        
        <div className='allergy' key={index} onClick= "allergyUpdated()" >
            <p>{allergy.name}</p>
            <img src= {`IMG/`+ allergy.image} alt='img'></img>
        </div>))}

        </div>
      
      
      <div className='confirmation-button' onClick="allergiesConfirmed()">
        <h2>Confirmar</h2>
    </div>
    </div>
  </> 
   
  )
}
