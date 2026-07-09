function PromotionsContent({ AllPromotions }) {

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
                    <th>Fecha</th>
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
                            {item.startDate} - {item.endDate}
                        </td>
                        <td><i className="fa-solid fa-pen"></i></td>

                    </tr>

                ))}

            </tbody>

        </table>
    );
}

export default PromotionsContent;