import { useForm } from "react-hook-form";
import { useEffect } from "react";
import style from "../Styles/Cliente.module.css"
import dayjs from "dayjs"
function ManageCustomer({ DataInfo, SetDataInfo }) {

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors }
    } = useForm();

    useEffect(() => {

        if (DataInfo.length > 0) {

            reset({
                clienteId: DataInfo[0].id,
                fullName: DataInfo[0].fullName,
                email: DataInfo[0].email,
                phone: DataInfo[0].phone,
                imagenUrl: DataInfo[0].avatarUrl,
                status: DataInfo[0].status
            });

        }

    }, [DataInfo, reset]);

    const avatar = watch("imagenUrl");

    function onSubmit(data) {
        
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.DivFormContainer }>
         

            <div className={style.DivProfiel }>

                <img
                    src={avatar}
                    alt="Cliente"
                    width={150}
                />

                <br />

               

                <div className={style.DivProfile}>

                    <span>

                        {
                            DataInfo.length > 0
                                ? dayjs(DataInfo[0].createdAt).format("DD/MM/YYYY")
                                : ""
                        }
                    </span>

                    <div>

                        <select {...register("status")}>

                            <option value="active">
                                Activo
                            </option>

                            <option value="inactive">
                                Inactivo
                            </option>

                        </select>

                    </div>

                </div>
            </div>

            <br />

            <div className={style.DivProfileInfo }>

                <div className={style.DivInput}>

                    <label>Nombre</label>

                    <div>

                        <input
                            type="text"
                            {...register("fullName", {
                                required: "Ingrese el nombre"
                            })}
                        />

                        {errors.fullName &&
                            <p>{errors.fullName.message}</p>
                        }

                    </div>

                </div>

              

                <div className={style.DivInput}>

                    <label>Email</label>

                    <div>

                        <input
                            type="email"
                            {...register("email", {
                                required: "Ingrese el correo"
                            })}
                        />

                        {errors.email &&
                            <p>{errors.email.message}</p>
                        }

                    </div>

                </div>

              

                <div className={style.DivInput}>

                    <label>Teléfono</label>

                    <div>

                        <input
                            type="tel"
                            {...register("phone", {
                                required: "Ingrese el teléfono"
                            })}
                        />

                        {errors.phone &&
                            <p>{errors.phone.message}</p>
                        }

                    </div>

                </div>

               

                <div className={style.DivInput}>

                    <label>Password</label>

                    <div>

                        <input
                            type="password"
                            {...register("imagenUrl")}
                        />

                    </div>

                </div>






                <br />

            </div>
            <div className={style.DivButtons}>
                <button>Cancelar</button>

                <button type="submit">
                    Guardar Cambios
                </button>
            </div>

        </form>
    );
}

export default ManageCustomer;