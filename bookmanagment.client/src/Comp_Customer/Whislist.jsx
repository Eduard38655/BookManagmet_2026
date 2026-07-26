import { useEffect, useState } from "react";

function Whislist({ DataInfo, SetDataInfo }) {


    useEffect(() => {
        let FilterInfo = DataInfo.map((e) => {
            console.log(e.orders, "ss")

        })

        console.log(DataInfo)
    }, [DataInfo])

    return (
        <>
            <div>
                <h4>Whislist</h4>
                <div>
                    <button>Filter</button>
                    <button>Exportar</button>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Libro</th>
                        <th>Precio</th>
                        
                    </tr>
                </thead>

                <tbody>

                    {DataInfo.map((cliente) =>
                        cliente.wishlist.map((list,index) => (
                            <tr key={index}>
                                <td>
                                    <img src={list.coverImageUrl } />
                                </td>
                                <td>{list.price}</td>
                                <td>{list.title.total}</td>
                                
                                <td>
                                    <button>Eliminar</button>
                                </td>
                            </tr>
                        ))
                    )}

                </tbody>
            </table>


        </>
    );
}

export default Whislist