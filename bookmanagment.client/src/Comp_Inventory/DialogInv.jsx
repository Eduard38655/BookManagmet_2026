import { useForm } from "react-hook-form";
import style from "../Styles/Inv.module.css";

function DialogInv() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    const coverUrl = watch("coverUrl");

    return (
        <div className={style.DivContainerDialogInv}>
            <div className={style.SubContainerDialogInv}>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div>
                        

                        <label><i className="fa-solid fa-book-bookmark"></i>Book Informacion</label>

                        <div>

                            <div>
                                <label>Book cover</label>
                                < img src="" />

                            </div>




                            <div>



                                <div>
                                    <label>Title</label>
                                    <input
                                        {...register("title", {
                                            required: "El título es obligatorio",
                                        })}
                                    />
                                    {errors.title && <span>{errors.title.message}</span>}
                                </div>


                                <div>
                                    <label>ISBN</label>
                                    <input
                                        {...register("isbn", {
                                            required: "El ISBN es obligatorio",
                                            pattern: {
                                                value: /^(97(8|9))?\d{9}(\d|X)$/,
                                                message: "ISBN inválido",
                                            },
                                        })}
                                    />
                                    {errors.isbn && <span>{errors.isbn.message}</span>}
                                </div>


                                <div>
                                    <label>Description</label>
                                    <input {...register("description")} />
                                </div>

                                <div>
                                    <label>Language</label>
                                    <div>
                                        <select {...register("category")}>
                                            <option value="">Category</option>
                                        </select

                                </div>
                                </div>




                                <div>
                                    <label>Category</label>
                                    <div>
                                        <select {...register("category")}>
                                            <option value="">Category</option>
                                        </select>
                                    </div>
                                </div>


                                <div>
                                    <label>Format</label>
                                    <div>
                                        <select {...register("format")}>
                                            <option value="">Format</option>
                                        </select>
                                    </div>
                                </div>





                            </div>


                        </div>


                    </div>
                   


                   

                    <div>


                        <label><i className="fa-solid fa-money-bill-wave"></i>Pricing & Stock</label>

                        <div>

                            <div>
                                <label>Price</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    {...register("price", {
                                        required: "El precio es obligatorio",
                                    })}
                                />
                                {errors.price && <span>{errors.price.message}</span>}
                            </div>


                            <div>
                                <label>Cost price</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    {...register("costPrice")}
                                />
                            </div>

                            <div>
                                <label>Stock</label>
                                <input type="number" {...register("stock")} />
                            </div>


                            <div>
                                <label>Status</label>
                                <div>
                                    <select {...register("status")}>
                                        <option value="inactive">Inactive</option>
                                        <option value="active">Active</option>
                                    </select>
                                </div>
                            </div>

                        </div>

                    </div>
                   

                   

                    <div>

                        <label> <i className="fa-solid fa-building-flag"></i>Publisher Details</label>


                        <div>


                            



                            <div>
                                <label>Publisher name</label>
                                <input {...register("publisherName")} />
                            </div>

                            <div>
                                <label>Publisher logo URL</label>
                                <input {...register("publisherLogoUrl")} />
                            </div>

                            <div>
                                <label>Publisher email</label>
                                <input type="email" {...register("publisherEmail")} />
                            </div>

                            <div>
                                <label>Publisher phone</label>
                                <input {...register("publisherPhone")} />
                            </div>

                            <div>
                                <label>Publisher website</label>
                                <input {...register("publisherWebsite")} />
                            </div>


                        </div>


                    </div>
 

                   

                    

                  

                  

                    

                 
 

                    <div>
                        <button type="submit">Cancel</button>
                        <button type="submit"> <i className="fa-solid fa-floppy-disk"></i> {" "}Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default DialogInv;