//import React from 'react'
import Bttn_Back from '../../../components/bttns/bttn_Back/Bttn_Back'
import { useForm } from 'react-hook-form'

import "./register.scss"

//import { API } from '../../../context/postContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function ResgiterPage() {
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { isDirty, isValid, errors }
    } = useForm({
        mode: "onBlur"
    });

    const submit = (dataForm) => {
        navigate("/register/registerContact");
        localStorage.setItem("userDataString", JSON.stringify(dataForm));

        console.log("userRegisterDataForm", dataForm);

    }
    //recogemos el objeto transformado en string y lo volvemos a pasar a objeto

    console.log(JSON.parse(localStorage.getItem('form')));

    return (

        <div className="reg-perfil">
            <div className="top-P">
                <Bttn_Back />
                <h4>1 de 4</h4>
            </div>
            <div className="info-P">
                <h2>Dinos quién eres</h2>

            </div>
            <form onSubmit={handleSubmit(submit)} >
                <fieldset className="formulario-P" >

                    <legend></legend>

                    {/* <label>
                        <input
                            type="file"
                            {...register("coverImage")} />
                        <span>Editar Foto</span>
                    </label> */}

                    <div className='input-foto'>
                        <label name="subir-foto">
                            {/* <label  className='d-flex align-items-center flex-column'></label>
                            {selectedImage ? (
                                <img src={URL.createObjectURL(selectedImage)} alt='user-img' />
                            ) : (
                            <img src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644339967/D67E0CB8-AB0E-4A07-89FB-8FFEA5597A92_rxmbuy.png" alt="user-img" />
                            )}
                            {selectedImage? null: <p>Subir foto</p>} */}
                        <input
                            type="text"
                            name="subir-foto"
                            id="foto-P"
                            accept=".jpg, .peg, .gif, .png"
                            {...register("coverImage")} 
                            onChange={(event) => {
                                setSelectedImage(event.target.files[0]);
                            }}
                            />
                        </label>

                    </div>

                    <label>
                        <input
                            type="text"
                            id="name-P"
                            placeholder='Nombre Completo'
                            {...register("name", { required: false })} />
                    </label>

                    <label>
                        <input type="text"
                        id="email-P"    
                        placeholder='Direccion Email'
                        {...register("email")}/>
                        
                        {/* , { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} /> */}
                        {/* {errors.email && <p style={{ color: "red" }}>El email no es válido</p>} */}
                    </label>

                    <label>
                        <input type="number"
                            id="telefono-P"
                            placeholder='Móvil'
                            {...register("phoneNumber")}/>
                            {/* , { required: true, pattern: /^(\+\d{1,3})?\s?(\d{3,}){1}(\s?\d{2,}){1,2}$/ })} /> */}
                        {/* {errors.phoneNumber && <p style={{ color: "red" }}>El teléfono no es válido</p>} */}
                    </label>

                    <label>
                        <input type="password"
                            id="pass-P"
                            placeholder='Password'
                            {...register("password",)}
                                // {
                                // required: true,
                                // pattern: /^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*_=+-]).{8,12}$/ })}
                        />

                        {/* {errors.password && errors.password.type === 'pattern' && <p style={{ color: "red" }}>La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial.</p>} */}
                    </label>

                    {/* <button className='guardar-P'>Guardar perfil</button> */}
                    <input type="submit" id="guardar-P" value="Guardar perfil"
            className={!isDirty || !isValid ? "disabled" : ""}
            disabled={!isDirty || !isValid} />
                </fieldset>

            {/* <div className='d-flex align-items-center flex-column'>
                <Link to={"/register/registerContact"}>Crear</Link>
            </div> */}
            </form>

        </div>
    )
}


