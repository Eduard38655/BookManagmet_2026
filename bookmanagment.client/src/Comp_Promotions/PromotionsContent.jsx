import dayjs from "dayjs"
import { useNavigate } from "react-router-dom"
 
function PromotionsContent({ AllPromotions }) {
    const navigate=useNavigate()
    return (
        <table>

            <thead>
                <tr>
                    <th>Code</th>
                    <th>Nombre</th>
                    <th>Tipo</th>
                    <th>Compra mínima</th>
                    <th>Descuento</th>
                    <th>Estado</th>
                    <th>Empieza</th>
                    <th>Termina</th>
                    <th>Acciones</th>
                </tr>
            </thead>

            <tbody>

                {AllPromotions.map((item, index) => (

                    <tr key={index}>

                        <td>{item.code}</td>
                        <td>{item.name}</td>
                        <td>{item.discountType}</td>
                        <td>{item.minPurchase}</td>
                        <td>{item.discountValue}</td>
                        <td>{item.status}</td>
                        <td>
                            {dayjs(item.startDate).format("DD/MM/YYYY") }
                             
                        </td>
                        <td>
                           
                            {dayjs(item.endDate).format("DD/MM/YYYY")}

                        </td>
                        <td>
                            <button onClick={() => navigate(`/promotions/editar/${item.id}`)}>

                                <i className="fa-solid fa-pen"></i>
                            </button>
                        </td>

                    </tr>

                ))}

            </tbody>

        </table>
    );
}

export default PromotionsContent;