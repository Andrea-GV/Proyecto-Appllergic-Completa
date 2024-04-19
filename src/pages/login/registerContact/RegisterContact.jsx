import Bttn_Back from "../../../components/bttns/bttn_Back/Bttn_Back";
import './registerContact.scss'

import { useForm } from 'react-hook-form'

export default function RegisterContact() {

  const { register, handleSubmit } = useForm();

  const submit = (dataForm) => {
    console.log(dataForm);


  }


  return (

    <div>

      <div>
        <Bttn_Back></Bttn_Back>
      </div>

      <div className="info">
        <h2>
          <strong>Vamos a añadir tu contacto en caso de emergencia</strong>
        </h2>
        <h3>Nos pondremos en contacto con tu persona de confianza y/o compañía de seguros en caso de emergencia.</h3>

      </div>

      <div>

        <form onSubmit={handleSubmit(submit)}>
          <fieldset>

            <legend></legend>

            <label>
              <input
                type="text"
                placeholder='Nombre completo de tu contacto'
                {...register("name")} />
            </label>

            <label>
              <input type="text"
                placeholder='Direccion Email'
                {...register("email")} />
            </label>

            <label>
              <input type="text"
                placeholder='Movil'
                {...register("numberPhone")} />
            </label>

          </fieldset>

          <button>Guardar S.O.S</button>
        </form>

      </div>
    </div>

    // prueba    solo una 
  )
}
