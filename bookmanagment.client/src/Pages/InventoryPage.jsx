import { useEffect, useState } from "react";
import InventoryContent from "../InventoryComps/InvnetoryContent"
import WarningStock from "../InventoryComps/WarningStock"
import style from "../Styles/Inv.module.css"
function InventoryPage() {
    const [Book_Data, SetBook_Data] = useState([]);
    const [BackUp_Book, SetBackUp_Data] = useState([]);
    const [All_categories, SetCategory] = useState([]);
    useEffect(() => {
        const fetchData = async () => {

            const token = localStorage.getItem("User_Token") || "";

            const response = await fetch("product/get", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    ...(token ? { Authorization: `Bearer ${token}` } : {})
                }
            });

            const data_products = await response.json();

            console.log(data_products.data);

            if (data_products.success) {
                SetBook_Data(data_products.data);
                SetBackUp_Data(data_products.data);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const categories = [];
       
        BackUp_Book.forEach(book => {
 
            if (!categories.includes(book.category)) {
                categories.push(book.category);
            }
        });






        SetCategory(categories);
        

    }, [BackUp_Book]);






    return (<>
        <article className={style.Container_Inv }>

            <div className={style.HeaderDiv}>
                <div className={style.Title}>
                    <h3>Gestion de Inventario </h3>
                    <p>Administra el calaogo de libros, monitorea el stock y actualiza el precio</p>

</div>
        <div>

            <div>
                <i className="fa-solid fa-magnifying-glass"></i>
                < input type="text" placeholder="Search by Title,Autor, Isbn..." />
            </div>
            
            <div>
                <div>
                    {All_categories.map((ca) => (
                        <>
                            <span>{ca }</span>
                        </>
                    ))}

                </div>
                <div className={style.Div_Buttons }>
                    <button><i className="fa-solid fa-file-pdf"></i>{" "}  Exportar PDF</button>
                    <button className={style.Active_Button } ><i className="fa-solid fa-plus"></i>{" "}Agregar Libro</button>
                </div>

            </div  >
            <div className={style.DivContainer_Filter } >

                <div className={style.DivContainer_Input }>
                    <i className="fa-solid fa-magnifying-glass"></i> {" "}
                    < input type="text" placeholder="Search by Title,Autor, Isbn..." />
                </div>

                <div className={style.DivCategory }>
                    <div>
                        {All_categories.map((ca,index) => (
                            <>
                                <button key={index }>{ca}</button>
                            </>

                        ))}
                    </div>
                    <button className={style.ButtonFilter} ><i className="fa-solid fa-filter"></i> {" "} Filtros</button>
                </div>
            </div>
            <WarningStock Book_Data={Book_Data} SetBook_Data={SetBook_Data} />

             <InventoryContent Book_Data={Book_Data} SetBook_Data={SetBook_Data} />

        </article>
    </>)
}

export default InventoryPage;