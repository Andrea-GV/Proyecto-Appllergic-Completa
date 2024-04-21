import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Bttn_Back from "../../../components/bttns/bttn_Back/Bttn_Back";
import "./registerContact.scss";

export default function RegisterContact() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: {isDirty, isValid, errors}
    } = useForm({
        mode: "onBlur"
    });

  const submit = async ( formData ) => {
   navigate("/allergy")

    localStorage.setItem("contactSOSDataString", JSON.stringify(formData));
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
          {...register("name", { required: false })}
          />
        
        <label htmlFor="email"></label>
        <input
          type="text"
          id="email"
          placeholder="Dirección e-mail"
          {...register("email",)}
            // { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}
          />
          {/* {errors.email && <p style={{ color: "red" }}>El email no es válido</p>} */}
        
        <label htmlFor="telefono"></label>
        <input
          type="number"
          id="telefono"
          placeholder="Teléfono móvil"
          {...register("telefono")}
            // , { required: true, pattern: /^(\+\d{1,3})?\s?(\d{3,}){1}(\s?\d{2,}){1,2}$/ })}
          />
          {/* {errors.telefono && <p style={{ color: "red" }}>El teléfono no es válido</p>}
         */}
        <input type="submit" id="guardar" value="Guardar contacto"
            className={!isDirty || !isValid ? "disabled" : ""}
            disabled={!isDirty || !isValid} />

        {/* <Link to={"/home"}>
          <p id="skip">Registraré mi contacto en otro momento</p>
        </Link> */}
      </form>
    </div>
  );
}
