//import React, { useEffect } from 'react'
//import axios from 'axios';

import { useForm } from 'react-hook-form';
import { API } from '../../../context/postContext';
import { useNavigate } from 'react-router-dom';

export default function FormLogin() {

    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (dataForm) => {

        const { data } = await API.post("/login", dataForm);

        console.log("login", data);
        // console.log(data.data.token);

        localStorage.setItem("token", data.data.token)
        localStorage.setItem("userId", data.data.user._id)



        navigate("/")
    }

    return (

        <div>

            <form onSubmit={handleSubmit(onSubmit)} >
                <fieldset>
                    <legend></legend>

                    <label >
                        <input
                            type="text"
                            placeholder='Email'
                            {...register("email")} />
                    </label>

                    <label >
                        <input
                            type="text"
                            placeholder='Password'
                            {...register("password")} />
                    </label>

                </fieldset>

                <button>enviar</button>

            </form>

        </div>
    )
}
