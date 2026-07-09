function EmpleadosContent({ AllEmployee }) {
    return (
        <table>

            <thead>
                <tr>
                    <th>Empleado</th>
                    <th>Teléfono</th>
                    <th>Rol</th>
                    <th>Posición / Departamento</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>

            <tbody>

                {AllEmployee.map((emp,index) => (

                    <tr key={index}>

                        <td>{emp.fullname}</td>
                        <td>{emp.phone}</td>
                        <td>{emp.role}</td>
                        <td>{emp.posicion}</td>
                        <td>{emp.status}</td>

                        <td>

                            <button>
                                <i className="fa-solid fa-pen"></i>
                            </button>

                        </td>

                    </tr>

                ))}

            </tbody>

        </table>
    );
}

export default EmpleadosContent;