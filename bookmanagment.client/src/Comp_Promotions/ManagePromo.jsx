import style from "../Styles/Promotion.module.css"
import { useFormContext } from "react-hook-form";

function ManagePromo() {

    const {
        register,
        formState: { errors }
    } = useFormContext();
    

    return (

        <>


      

            <div className={style.Container_Promo } >

                    

                <div className={style.PersonalInfo_Promo}>

                    <label className={style.SecTittle }>Información Básica</label>

                    <div className={style.DivInput }>

                            <label>Nombre de la promoción</label>

                            <input
                                {...register("name", {
                                    required: "El nombre es obligatorio"
                                })}
                                placeholder="Ej. Oferta de Verano 2026"
                            />

                            {errors.name &&
                                <small>{errors.name.message}</small>
                            }

                        </div>

                    <div className={style.DivTextarea}>

                            <label >Descripción</label>

                            <textarea
                                {...register("description")}
                                placeholder="Describe los beneficios..."
                            />

                        </div>

                    <div className={style.DivInput}>

                            <label>Código Promocional</label>
                            <div >


                                <input
                                    {...register("code", {
                                        required: "Debe ingresar un código"
                                    })}
                                    placeholder="SUMMER2026"
                                />
                            {" " }
                                <button>
                                    <i className="fa-solid fa-arrow-rotate-right"></i>
                                </button>
                        </div>
                        <span className={style.addInfo }>Los clientes ingresaran este codigo al finalizar la compra.</span>



                            {errors.code &&
                                <small>{errors.code.message}</small>
                            }

                        </div>

                    </div>

                <div className={style.Container_type}>

                    <div className={style.TypeDesc }>


                        <label className={style.SecTittle}>Tipo y Valor</label>

                        <div className={style.DivSelect_Promo }>

                            <label>Tipo de descuento</label>

                            <div>
                                <select
                                    {...register("discountType")}
                                >
                                    <option value="percentage">
                                        Porcentaje (%)
                                    </option>

                                    <option value="fixed">
                                        Monto fijo
                                    </option>

                                </select>
                            </div>

                        </div>

                    

                        <div className={style.DivInput }>

                            <label >Valor del descuento</label>

                            <input
                                type="number"
                                {...register("discountValue", {
                                    required: "Ingrese el descuento",
                                    min: 1
                                })}
                            />

                        </div>

                    </div>

                    <div className={style.ProgrammingInfo }>

                        <label className={style.SecTittle}>Programación</label>

                        <div className={style.DivInput}>

                            <label>Fecha Inicio</label>

                            <input
                                type="date"
                                {...register("startDate", {
                                    required: true
                                })}
                            />

                        </div>

                        <div className={style.DivInput}>

                            <label>Fecha Final</label>

                            <input
                                type="date"
                                {...register("endDate", {
                                    required: true
                                })}
                            />

                        </div>

                    </div>

                </div>

                </div>

            



        </>
    );
}

export default ManagePromo;