import { useState, useEffect } from "react";

function WarningStock({ Book_Data }) {
    const [warning, SetWarning] = useState([]);

    useEffect(() => {
        const FilterBook = Book_Data.filter((b) => b.stock < 11);
        SetWarning(FilterBook);
    }, [Book_Data]);

    return (
        <>
            <div>
                <label>Alertas de stock bajo</label>

                {warning.map((b) => (
                    <div key={b.id}>

                        <div>
                            <span>
                                {b.stock === 0
                                    ? "Agotado"
                                    : `Solo quedan ${b.stock} disponibles`
                                }
                            </span>

                            {b.stock === 0
                                ? <i className="fa-solid fa-triangle-exclamation"></i>
                                : <i className="fa-solid fa-exclamation"></i>
                            }

                            <i className="fa-solid fa-ellipsis-vertical"></i>
                        </div>


                        <h4>{b.title}</h4>

                        <p>{b.author}</p>

                        <button>
                            Reordenar
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </button>

                    </div>
                ))}
            </div>
        </>
    );
}

export default WarningStock;