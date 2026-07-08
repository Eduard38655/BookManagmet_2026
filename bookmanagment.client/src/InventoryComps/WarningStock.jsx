import { useState, useEffect } from "react";
import style from "../Styles/Inv.module.css"
function WarningStock({ Book_Data }) {
    const [warning, SetWarning] = useState([]);

    useEffect(() => {
        
        const FilterBook = Book_Data.filter((b) => b.stock < 18);

         
        if (warning.length < 4) {
            SetWarning(FilterBook);
            return 
        }

    }, [Book_Data]);

    return (
        <>
            <div className={style.DivContainer_Warning }>
                <label>Alertas de stock bajo</label>

                <div className={style.Container_card }>
                    {warning.map((b,index) => (
                        <div key={index} className={style.Div_Card}>

                            <div className={style.Div_Status}>
                                <label>
                                    {b.stock === 0
                                        ? "Agotado"
                                        : `Solo quedan ${b.stock} disponibles`
                                    }
                                </label>

                                <span className={b.stock === 0 ? style.agotado : style.low}  >
                                    {b.stock === 0
                                    ? <i className="fa-solid fa-triangle-exclamation"></i>
                                    : <i className="fa-solid fa-exclamation"></i>
                                }</span>

                              
                            </div>


                            <h4>{b.title}</h4>

                            <p>{b.author}</p>

                            <button>
                                Reordenar {" " }
                                <i className="fa-solid fa-arrow-right-long"></i>
                            </button>

                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default WarningStock;