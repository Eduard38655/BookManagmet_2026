import { useEffect, useState } from "react";
import InventoryContent from "../InventoryComps/InvnetoryContent"
import WarningStock from "../InventoryComps/WarningStock"
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
        <div>
            <div>
                <h3>Gestion de Inventario </h3>
                <p>Administra el calaogo de libros, monitorea el stock y actualiza el precio</p>

            </div>
            <div>
                <button><i classNAME="fa-solid fa-box-archive"></i>Ajuste de Stock</button>
                <button><i className="fa-solid fa-plus"></i>Agregar Libro</button>
            </div>

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
                <button><i className="fa-solid fa-filter"></i>Filtros</button>
            </div>
        </div>
        <InventoryContent Book_Data={Book_Data} SetBook_Data={SetBook_Data} />
        <WarningStock Book_Data={Book_Data} SetBook_Data={SetBook_Data} />
    </>)
}

export default InventoryPage;