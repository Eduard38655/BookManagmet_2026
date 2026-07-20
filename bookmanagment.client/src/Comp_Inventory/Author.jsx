import style from "../Styles/Inv.module.css";
import { useFormContext } from "react-hook-form";

function Author() {
    const {
        register,
        watch,
        formState: { errors },
    } = useFormContext();

    const authorImage = watch("imageUrl");
    const values = watch()
    console.log(values)
    return (
        <div className={style.DivConatiner_Autor}>
            <label className={style.SectionLabel}>
                <i className="fa-brands fa-leanpub"></i>{" " } Informacion de Autor
            </label>

            <div className={style.DivConatiner}>
                <div className={style.DivImage}>
                    <label  >Autor</label>
                    <img src={authorImage} alt="Autor" />
                </div>

                <div className={style.DivInput_Autor}>
                    <div>
                        <label>Nombre</label>
                        <div className={style.DivSearch }>
                            <button>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                            <input
                                type="text"
                                {...register("author")}
                            />
                        </div>
                    </div>

                   

                    <div>
                        <label>Biografía</label>
                        <textarea
                            {...register("bio")}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Author;