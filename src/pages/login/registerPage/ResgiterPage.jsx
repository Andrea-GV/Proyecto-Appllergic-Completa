import Bttn_Back from "../../../components/bttns/bttn_Back/Bttn_Back";
import { useForm } from "react-hook-form";

import axios from "axios";

import { API } from "../../../context/postContext";
import { Link } from "react-router-dom";

export default function ResgiterPage() {
  const { register, handleSubmit } = useForm();

  const submit = (dataForm) => {
    console.log(dataForm);

    // recogemos los datso del objeto del form y lo guardaps en formato string en loscalstorage

    localStorage.setItem("form", JSON.stringify(dataForm));

    // await axios.post("https://node-basic-wheat.vercel.app/user/register", dataForm);
    //  console.log("good", data);;
  };
  //recogemos el objeto transformado en string y lo volvemos a pasar a objeto
  console.log(JSON.parse(localStorage.getItem("form")));

  return (
    <div>
      <div>
        <Bttn_Back></Bttn_Back>
      </div>
      <div className="d-flex align-items-center flex-column">
        <h2>
          <strong>Crear Perfil</strong>
        </h2>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <fieldset className="d-flex align-items-center flex-column">
          <legend></legend>

          {/* <label>
                        <input
                            type="file"
                            {...register("coverImage")} />
                        <span>Editar Foto</span>
                    </label> */}

          <label className="d-flex align-items-center flex-column">
            <input type="text" {...register("coverImage")} />
            <span>Editar Foto</span>
          </label>

          <label>
            <input
              type="text"
              placeholder="Nombre Completo"
              {...register("name")}
            />
          </label>

          <label>
            <input
              type="text"
              placeholder="Direccion Email"
              {...register("email")}
            />
          </label>

          <label>
            <input
              type="text"
              placeholder="Movil"
              {...register("phoneNumber")}
            />
          </label>

          <label>
            <input
              type="text"
              placeholder="Password"
              {...register("password")}
            />
          </label>
        </fieldset>
      </form>
      <div className="d-flex align-items-center flex-column">
        <Link to={"/register/registerContact"}>Crear</Link>
      </div>
    </div>
  );
}
