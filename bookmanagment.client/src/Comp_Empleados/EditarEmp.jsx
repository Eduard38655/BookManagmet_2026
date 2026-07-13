import { useForm } from "react-hook-form";
import style from "../Styles/Empleados.module.css";

import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IDsContext } from "../Context/IDsContext.jsx"
import EmpImagen from "../Comp_Empleados/EmpImagen"

// Ajusta esto si tu status sí viene del backend en vez de ser fijo
const STATUS_OPTIONS = [
    { value: "active", label: "Activo" },
    { value: "inactive", label: "Inactivo" },
];

function EditarEmp({ SetShowDialog, operation   }) {

    const { EmployeeId, setEmployeeId } = useContext(IDsContext);
    const today = new Date();
    const stamp = `${String(today.getDate()).padStart(2, "0")}.${String(
        today.getMonth() + 1
    ).padStart(2, "0")}.${today.getFullYear()}`;

    

    const [avatarUrl, setAvatarUrl] = useState("")
    const [loading, setLoading] = useState(true)
    const [fetchError, setFetchError] = useState(false)
    const navigate = useNavigate()
    const [roles, setRoles] = useState([])

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
      console.log(data)
        var url = "";
        if (operation === "insert") {
            url = `employees/insertEmp`;
        } else {
            url = `employees/updateEmp/${EmployeeId}`;
        }


        fetch(`http://localhost:5186/${url}` , {

            method: operation == "insert" ? "POST" : "PUT",
            headers: {
                "Content-Type": "application/json",

            },
             
            body: JSON.stringify({
                full_name: data.fullname,
                password_hash: data.password,
                phone: data.phone,
                position: data.position,
                status: data.status,
                roleid: data.roleid,
                 email: data.email,
                avatar_url: "https://eduard38655.github.io/PersonalProyect-Main/assets/Foto_Perfile_Proyect_Main-CmJ5ytfo.jpg"
                
            })
        })
            .then((res) => res.json())
            .then((data) => {
                navigate("/employee")
                console.log(data) 
            })





    };

   

    useEffect(() => {
        if (!EmployeeId) return;
        if (operation === "insert") return
        const FetchEmployeeDataById = async () => {
            setLoading(true);
            setFetchError(false);
            try {
                const response = await fetch(`http://localhost:5186/employees/getempleadobyid/${EmployeeId}`);
                if (!response.ok) throw new Error("Error al obtener el empleado");
                const data = await response.json();
                const emp = data.data[0];

                setAvatarUrl(emp?.avatarUrl);



                if (emp?.role) {
                    setRoles([emp.role]);
                }

                reset({
                    fullname: emp?.fullName,
                    phone: emp?.phone,
                    role: emp?.role?.name,
                    status: emp?.status,
                    email: emp?.email,
                    position: emp?.position,
                    roleid: emp?.role?.id,
                    createdAt: emp?.createdAt

                });
            } catch (error) {
                console.error(error);
                setFetchError(true);
            } finally {
                setLoading(false);
            }
        };

        FetchEmployeeDataById();
    }, [EmployeeId, reset]);

const statusValue = watch("status");
const createdAt = watch("createdAt");
    return (
        <aside className={style.ContainerEdit}>
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className={style.FormContainer}
            >
                <div className={style.FormBody}>
                    <header className={style.Header}>
                        <div>
                            <span className={style.Eyebrow}>
                                Ficha de empleado · {operation == "insert" ? <>Fecha {createdAt}</> : <>Creado {stamp}</>}   
                            </span>
                            <h2 className={style.Tittle}>
                                {operation == "insert" ? "Crear Usuario"  :    "Editar información de usuario"}

                            </h2>
                        </div>
                        <button
                            type="button"
                            className={style.CloseBtn}
                            onClick={() => SetShowDialog(false)}
                            aria-label="Cerrar"
                        >
                            &times;
                        </button>
                    </header>

                    {fetchError && (
                        <p className={style.ErrorMsg}>
                            No se pudo cargar la información del empleado.
                        </p>
                    )}

                    <fieldset className={style.Section_Part1}>
                        <legend className={style.SectionLabel}>
                            <i className="fa-regular fa-user"></i>
                            Información personal
                        </legend>

                        <div className={style.SubSection_part1}>
                            <div className={style.DivImg}>

                                <  EmpImagen src={avatarUrl} />
                                
                            </div>

                            <div className={style.DivPersonal_Info}>
                                <div className={style.Field}>
                                    <label htmlFor="fullname">Nombre completo</label>
                                    <input
                                        id="fullname"
                                        type="text"
                                        placeholder="Ej. María Fernández"
                                        {...register("fullname", {
                                            required: "El nombre es obligatorio",
                                            minLength: {
                                                value: 3,
                                                message:
                                                    "Debe tener al menos 3 caracteres",
                                            },
                                        })}
                                    />
                                    {errors.fullname && (
                                        <small className={style.ErrorMsg}>
                                            {errors.fullname.message}
                                        </small>
                                    )}
                                </div>

                                <div className={style.Field}>
                                    <label htmlFor="email">Correo electrónico</label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="usuario@empresa.com"
                                        {...register("email", {
                                            required: "El correo es obligatorio",
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: "Correo inválido",
                                            },
                                        })}
                                    />
                                    {errors.email && (
                                        <small className={style.ErrorMsg}>
                                            {errors.email.message}
                                        </small>
                                    )}
                                </div>

                                <div className={style.Field}>
                                    <label htmlFor="phone">Teléfono</label>
                                    <input
                                        id="phone"
                                        type="text"
                                        placeholder="809 000 0000"
                                        {...register("phone", {
                                            required: "El teléfono es obligatorio",
                                            pattern: {
                                                value: /^[0-9]{10}$/,
                                                message: "Número inválido",
                                            },
                                        })}
                                    />
                                    {errors.phone && (
                                        <small className={style.ErrorMsg}>
                                            {errors.phone.message}
                                        </small>
                                    )}
                                </div>

                                <div className={style.Field}>
                                    <label htmlFor="position">Posición</label>
                                    <input
                                        id="position"
                                        type="text"
                                        placeholder="Ej. Desarrollador"
                                        {...register("position", {
                                            required: "La posición es obligatoria",
                                        })}
                                    />
                                    {errors.position && (
                                        <small className={style.ErrorMsg}>
                                            {errors.position.message}
                                        </small>
                                    )}
                                </div>

                                <div className={style.Field}>
                                    <label htmlFor="role">Role</label>
                                    <div className={style.DivSelect}>
                                        <select
                                            id="role"
                                            {...register("role", {
                                                required: "El rol es obligatorio",
                                            })}
                                        >
                                            {roles.map((role) => (
                                                <option key={role.id} value={role.name}>
                                                    {role.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    {errors.role && (
                                        <small className={style.ErrorMsg}>
                                            {errors.role.message}
                                        </small>
                                    )}
                                </div>

                                <div className={style.Field}>
                                    <label htmlFor="status">Estado</label>
                                    <div
                                        className={`${style.DivSelect} ${statusValue === "active"
                                            ? style.StatusActive
                                            : statusValue === "inactive"
                                                ? style.StatusInactive
                                                : ""
                                            }`}
                                    >
                                        <span className={style.StatusDot} />
                                        <select
                                            id="status"
                                            defaultValue=""
                                            {...register("status", {
                                                required: "Seleccione un estado",
                                            })}
                                        >
                                            <option value="">Seleccione un estado</option>
                                            {STATUS_OPTIONS.map((s) => (
                                                <option key={s.value} value={s.value}>
                                                    {s.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    {errors.status && (
                                        <small className={style.ErrorMsg}>
                                            {errors.status.message}
                                        </small>
                                    )}
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className={style.Section_Part2}>
                        <legend className={style.SectionLabel}>
                            <i className="fa-solid fa-briefcase"></i>
                            Cuenta de acceso
                        </legend>

                        <div className={style.SubSection_part2}>

                            <div className={style.Field}>
                                <label htmlFor="password">
                                    Nueva contraseña
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Dejar en blanco para no cambiar"
                                    {...register("password", {
                                        minLength: {
                                            value: 8,
                                            message: "Mínimo 8 caracteres",
                                        },
                                    })}
                                />
                                {errors.password && (
                                    <small className={style.ErrorMsg}>
                                        {errors.password.message}
                                    </small>
                                )}
                            </div>

                            <div className={style.Field}>
                                <label htmlFor="confirmPassword">
                                    Confirmar contraseña
                                </label>
                                <input
                                    id="confirmPassword"
                                    type="password"
                                    placeholder="••••••••"
                                    {...register("confirmPassword", {
                                        validate: (value, formValues) =>
                                            !formValues.password ||
                                            value === formValues.password ||
                                            "Las contraseñas no coinciden",
                                    })}
                                />
                                {errors.confirmPassword && (
                                    <small className={style.ErrorMsg}>
                                        {errors.confirmPassword.message}
                                    </small>
                                )}
                            </div>
                        </div>
                    </fieldset>

                    <div className={style.DivButton}>
                        <button
                            type="button"
                            className={style.BtnGhost}
                            onClick={() => SetShowDialog(false)}
                        >
                            Cancelar
                        </button>
                        <button type="submit" className={style.BtnPrimary} disabled={loading}>
                            Guardar cambios
                        </button>
                    </div>
                </div>
            </form>
        </aside>
    );
}

export default EditarEmp;