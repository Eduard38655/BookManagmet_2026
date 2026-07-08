import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
 import style from "../Styles/Login.module.css";

function LoginPage() {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "maria.admin@libros.com",
            password: "$2y$10$adminhash",
        },
    });

    const onSubmit = async (data) => {
        try {
            const res = await fetch(
                "http://localhost:5186/user/finduser",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        Email: data.email,
                        PasswordHash: data.password,
                    }),
                }
            );

            const response = await res.json();

            if (response.user) {
                setUser(response.user);
                localStorage.setItem(
                    "User_Token",
                    response.token
                );

                navigate("/");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={style.container}>
            {/* IZQUIERDA */}
            <div className={style.left}>
                <img
                    src="/images/library.jpg"
                    alt="Library"
                />

                <div className={style.overlay}>
                    <h1>
                        Enter the Sanctuary of
                        <br />
                        Knowledge.
                    </h1>

                    <p>
                        Your personal collection,
                        curated recommendations,
                        and reading history await
                        your return.
                    </p>
                </div>
            </div>

            {/* DERECHA */}
            <div className={style.right}>
                <div className={style.formCard}>
                    <h2>Sign In</h2>
                    <p>
                        Welcome back! Sign in to
                        your account.
                    </p>

                    <form
                        onSubmit={handleSubmit(
                            onSubmit
                        )}
                    >
                        {/* EMAIL */}
                        <label>
                            Email Address
                        </label>

                        <div className={style.inputBox}>
                            <i className="fa-solid fa-envelope"></i>
                            <input
                                type="email"
                                placeholder="name@example.com"
                                {...register("email", {
                                    required:
                                        "El email es obligatorio",
                                })}
                            />
                        </div>

                        {errors.email && (
                            <small>
                                {
                                    errors.email
                                        .message
                                }
                            </small>
                        )}

                        {/* PASSWORD */}
                        <label>Password</label>

                        <div className={style.inputBox}>
                            <i className="fa-solid fa-lock"></i>

                            <input
                                type="password"
                                placeholder="********"
                                {...register(
                                    "password",
                                    {
                                        required:
                                            "La contraseña es obligatoria",
                                        minLength: {
                                            value: 6,
                                            message:
                                                "Mínimo 6 caracteres",
                                        },
                                    }
                                )}
                            />

                            <i className="fa-regular fa-eye"></i>
                        </div>

                        {errors.password && (
                            <small>
                                {
                                    errors.password
                                        .message
                                }
                            </small>
                        )}

                        <div
                            className={
                                style.remember
                            }
                        >
                            <input
                                type="checkbox"
                            />
                            <span>
                                Remember me for 30
                                days
                            </span>
                        </div>

                        <button
                            type="submit"
                            className={
                                style.loginBtn
                            }
                        >
                            SIGN IN
                        </button>
                    </form>

                    <div
                        className={
                            style.separator
                        }
                    >
                        <span>
                            OR CONTINUE WITH
                        </span>
                    </div>

                    <div
                        className={
                            style.socials
                        }
                    >
                        <button>
                            Google
                        </button>

                        <button>
                            Apple
                        </button>
                    </div>

                    <p
                        className={
                            style.register
                        }
                    >
                        New to the library?
                        <span>
                            {" "}
                            Create an account
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;