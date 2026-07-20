import { useForm } from "react-hook-form";
import style from "../Styles/Inv.module.css";
import { useFormContext } from "react-hook-form";

import { useEffect } from "react";
 
function DialogInv( ) {
   
    const {
        register,
        watch,
        formState: { errors },
    } = useFormContext();
    return (
         
                <div className={style.Container_Prices}>

                    <label className={style.SectionLabel}>
                        <i className="fa-solid fa-money-bill-wave"></i> Pricing & Stock
                    </label>

                    <div className={style.Container_div_Price}>

                        <div>
                            <label htmlFor="price">Price</label>
                            <input
                                id="price"
                                type="number"
                                step="0.01"
                                {...register("price", {
                                    required: "El precio es obligatorio",
                                    min: { value: 0, message: "El precio no puede ser negativo" },
                                })}
                            />
                            {errors.price && <span>{errors.price.message}</span>}
                        </div>

                        <div>
                            <label htmlFor="costPrice">Cost price</label>
                            <input
                                id="costPrice"
                                type="number"
                                step="0.01"
                                {...register("costPrice", {
                                    min: { value: 0, message: "El costo no puede ser negativo" },
                                })}
                            />
                            {errors.costPrice && <span>{errors.costPrice.message}</span>}
                        </div>

                        <div>
                            <label htmlFor="stock">Stock</label>
                            <input
                                id="stock"
                                type="number"
                                {...register("stock", {
                                    min: { value: 0, message: "El stock no puede ser negativo" },
                                })}
                            />
                            {errors.stock && <span>{errors.stock.message}</span>}
                        </div>

                    </div>

                </div>

                

       
    );
}

export default DialogInv;