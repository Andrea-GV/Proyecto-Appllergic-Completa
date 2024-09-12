import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Bttn_Back from "../../../components/bttns/bttn_Back/Bttn_Back";
import "./registerContact.scss";
import axios from "axios";

import { useForm } from 'react-hook-form'

export default function RegisterContact() {

    const {
        register,
        handleSubmit,
        formState: {isDirty, isValid}
    } = useForm();

  const submit = async ( formData ) => {
    console.log(formData);
    await axios.post("https://node-basic-wheat.vercel.app/sosContact");
  };

  return (
    <div className="reg-contact">
      <div className="top">
        <Bttn_Back />
        <h4>2 de 4</h4>
      </div>
      <div className="info">
        <h2>Vamos a añadir tu contacto en caso de emergencia</h2>
        <div className="grey">
          <h3>
            Nos pondremos en contacto con tu persona de confianza y/o compañía
            de seguros en caso de emergencia.
          </h3>
        </div>
      </div>
      <form className="formulario" onSubmit={handleSubmit(submit)}>
        <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
          placeholder="Nombre completo de tu contacto"
          {...register("name", { required: true })}
        />
        <label htmlFor="email"></label>
        <input
          type="text"
          id="email"
          placeholder="Dirección e-mail"
          {...register("email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}
        />
        <label htmlFor="telefono"></label>
        <input
          type="text"
          id="telefono"
          placeholder="Teléfono móvil"
          {...register("telefono", {required: true, pattern: /^(\+\d{1,3})?\s?(\d{3,}){1}(\s?\d{2,}){1,2}$/})}
        />

        <input type="submit" id="guardar" value="Guardar contacto"
            className={!isDirty || !isValid ? "disabled" : ""}
            disabled={!isDirty || !isValid} />

        <Link to={"/home"}>
          <p id="skip">Registraré mi contacto en otro momento</p>
        </Link>
      </form>
    </div>
  );
}
