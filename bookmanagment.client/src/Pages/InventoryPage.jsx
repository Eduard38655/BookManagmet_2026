import { useEffect, useState } from "react";
import InventoryContent from "../Comp_Inventory/InventoryContent";
import WarningStock from "../Comp_Inventory/WarningStock";
import style from "../Styles/Inv.module.css";
import EmpPagination from "../Comp_Empleados/EmpPagination";
import DialogInv from "../Comp_Inventory/DialogInv"
import { useForm } from "react-hook-form"


function InventoryPage() {
    const [Book_Data, SetBook_Data] = useState([]);
    const [BackUp_Book, SetBackUp_Data] = useState([]);
    const [All_categories, SetCategory] = useState([]);
    const [currentItems, setCurrentItems] = useState([]);
    const [ShowDialog, SetDialog] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {

                
                const response = await fetch("product/get", {
                    method: "GET",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

                

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

    return (<>

        {ShowDialog && <DialogInv /> }

        <article className={style.Container_Inv}>

            <div className={style.SubContainer}>







                <div className={style.DivHeaderInfoInv}>
                    <div>
                        <h3>Gestión de Inventario</h3>
                        <p>
                            Administra el catálogo de libros, monitorea el stock y
                            actualiza los precios.
                        </p>

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









                <WarningStock
                    Book_Data={Book_Data}
                    SetBook_Data={SetBook_Data}
                />

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

                <div className={style.DivTable_Container}>
                    <InventoryContent
                        Book_Data={currentItems}
                        SetBook_Data={SetBook_Data}
                        SetDialog={SetDialog}
                    />
                    <EmpPagination currentItems={currentItems} setCurrentItems={setCurrentItems} AllEmployee={Book_Data} />

                </div>
            </div>



        </article>

    </>
    );
}

export default InventoryPage;