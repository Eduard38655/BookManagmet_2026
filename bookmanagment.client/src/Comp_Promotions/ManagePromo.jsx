import { useForm } from "react-hook-form";

function ManagePromo() {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues: {
            name: "",
            description: "",
            code: "",
            discountType: "percentage",
            discountValue: "",
            startDate: "",
            endDate: "",
            category: ""
        }
    });

    const onSubmit = (data) => {
        console.log(data);

        // Aquí realizarás el fetch hacia tu API
        /*
        fetch("promotions",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })
        */
    };

    return (

        <form onSubmit={handleSubmit(onSubmit)}>

            <div>

                <div>

                    <h4>Crear nueva promoción</h4>

                    <div>

                        <button
                            type="button"
                            onClick={() => reset()}
                        >
                            <i className="fa-solid fa-x"></i>
                            {" "}Descartar
                        </button>

                        <button type="button">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            {" "}Buscar libro
                        </button>

                        <button type="submit">
                            <i className="fa-solid fa-floppy-disk"></i>
                            {" "}Guardar Promoción
                        </button>

                    </div>

                </div>

                <div>

                    <h5>Información Básica</h5>

                    <div>

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

                    <div>

                        <label>Descripción</label>

                        <textarea
                            {...register("description")}
                            placeholder="Describe los beneficios..."
                        />

                    </div>

                    <div>

                        <label>Código Promocional</label>

                        <input
                            {...register("code", {
                                required: "Debe ingresar un código"
                            })}
                            placeholder="SUMMER2026"
                        />

                        {errors.code &&
                            <small>{errors.code.message}</small>
                        }

                    </div>

                </div>

                <div>

                    <h5>Tipo y Valor</h5>

                    <div>

                        <label>Tipo de descuento</label>

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

                    <div>

                        <label>Valor del descuento</label>

                        <input
                            type="number"
                            {...register("discountValue", {
                                required: "Ingrese el descuento",
                                min: 1
                            })}
                        />

                    </div>

                </div>

                <div>

                    <h5>Programación</h5>

                    <div>

                        <label>Fecha Inicio</label>

                        <input
                            type="date"
                            {...register("startDate", {
                                required: true
                            })}
                        />

                    </div>

                    <div>

                        <label>Fecha Final</label>

                        <input
                            type="date"
                            {...register("endDate", {
                                required: true
                            })}
                        />

                    </div>

                </div>

                <aside>

                    <div>

                        <label>Categoría</label>

                        <select
                            {...register("category")}
                        >
                            <option value="">Seleccione</option>
                            <option value="fiction">Ficción</option>
                            <option value="history">Historia</option>
                            <option value="technology">Tecnología</option>
                        </select>

                    </div>

                    <div>

                        <label>Banner</label>

                        <input
                            type="file"
                            accept="image/*"
                            {...register("image")}
                        />

                    </div>

                </aside>

            </div>

        </form>

    );
}

export default ManagePromo;