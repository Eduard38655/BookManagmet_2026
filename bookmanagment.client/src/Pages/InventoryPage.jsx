import { useEffect, useState } from "react";
import InventoryContent from "../InventoryComps/InventoryContent";
import WarningStock from "../InventoryComps/WarningStock";
import style from "../Styles/Inv.module.css";

function InventoryPage() {
    const [Book_Data, SetBook_Data] = useState([]);
    const [BackUp_Book, SetBackUp_Data] = useState([]);
    const [All_categories, SetCategory] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {

                // ==============================
                // SI USAS COOKIES (RECOMENDADO)
                // ==============================

                const response = await fetch("product/get", {
                    method: "GET",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

                // ==============================
                // SI AÚN USAS JWT EN LOCALSTORAGE
                // DESCOMENTA ESTE BLOQUE Y BORRA EL DE ARRIBA
                // ==============================

                /*
                const token = localStorage.getItem("User_Token") || "";

                const response = await fetch("product/get", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        ...(token
                            ? { Authorization: `Bearer ${token}` }
                            : {})
                    }
                });
                */

                if (!response.ok) {
                    throw new Error(`Error ${response.status}`);
                }

                const data_products = await response.json();

                console.log(data_products);

                if (data_products.success) {
                    SetBook_Data(data_products.data);
                    SetBackUp_Data(data_products.data);
                }
            }
            catch (error) {
                console.error("Error al cargar productos:", error);
            }
        };

        fetchData();
    }, []);



    useEffect(() => {

        console.log(BackUp_Book)


    }, [BackUp_Book])
    useEffect(() => {

        const categories = [
            ...new Set(
                BackUp_Book
                    .map(book => book.category)
                    .filter(category => category)
            )
        ];

        SetCategory(categories);

    }, [BackUp_Book]);

    return (
        <article className={style.Container_Inv}>

            <div className={style.HeaderDiv}>

                <div className={style.Title}>
                    <h3>Gestión de Inventario</h3>
                    <p>
                        Administra el catálogo de libros, monitorea el stock y
                        actualiza los precios.
                    </p>
                </div>

                <div>

                    <div>
                        <i className="fa-solid fa-magnifying-glass"></i>{" "}
                        <input
                            type="text"
                            placeholder="Buscar por título, autor o ISBN..."
                        />
                    </div>

                    <div>

                        <div>
                            {All_categories.map((ca, index) => (
                                <span key={index}>{ca}</span>
                            ))}
                        </div>

                        <div className={style.Div_Buttons}>
                            <button>
                                <i className="fa-solid fa-file-pdf"></i>{" "}
                                Exportar PDF
                            </button>

                            <button className={style.Active_Button}>
                                <i className="fa-solid fa-plus"></i>{" "}
                                Agregar Libro
                            </button>
                        </div>

                    </div>

                    <div className={style.DivContainer_Filter}>

                        <div className={style.DivContainer_Input}>
                            <i className="fa-solid fa-magnifying-glass"></i>{" "}
                            <input
                                type="text"
                                placeholder="Buscar por título, autor o ISBN..."
                            />
                        </div>

                        <div className={style.DivCategory}>

                            <div>
                                {All_categories.map((ca, index) => (
                                    <button key={index}>
                                        {ca}
                                    </button>
                                ))}
                            </div>

                            <button className={style.ButtonFilter}>
                                <i className="fa-solid fa-filter"></i>{" "}
                                Filtros
                            </button>

                        </div>

                    </div>

                    <WarningStock
                        Book_Data={Book_Data}
                        SetBook_Data={SetBook_Data}
                    />

                    <InventoryContent
                        Book_Data={Book_Data}
                        SetBook_Data={SetBook_Data}
                    />

                </div>

            </div>

        </article>
    );
}

export default InventoryPage;