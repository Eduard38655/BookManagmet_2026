import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Author from "../Comp_Inventory/Author";
import InvPrice from "../Comp_Inventory/InvPrice";
import PublisherInv from "../Comp_Inventory/PublisherInv";
import BookInfo from "../Comp_Inventory/BookInfo";

import { useForm, FormProvider } from "react-hook-form";
import style from "../Styles/Inv.module.css";

function EditInvPage() {
    const { BookId } = useParams();
    const navigate = useNavigate();
    const methods = useForm();
    const { handleSubmit, reset } = methods;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5186/product/findbyid/${BookId}`);
                const data_products = await response.json();
                reset(data_products.data);
            } catch (err) {
                console.error("Error fetching book:", err);
            }
        };
        fetchData();
    }, [BookId, reset]);

    const onSubmit = async (data) => {
        try {
            const response = await fetch(`http://localhost:5186/product/update/${BookId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!response.ok) throw new Error("Failed to save");
            navigate(-1);
        } catch (err) {
            console.error("Error saving book:", err);
        }
    };

    const handleCancel = () => navigate(-1);

    return (
        <FormProvider {...methods}>
            <form className={style.PageWrapper} onSubmit={handleSubmit(onSubmit)}>

                <div className={style.PageHeader}>
                     
                        <span className={style.Breadcrumb}>Inventario &gt; Editar Libro</span>
                        <h1 className={style.PageTitle}>Gestión de Título</h1>
                    
                     
                </div>

                <div className={style.GridLayout}>
                    <div className={style.ColLeft}>
                        <BookInfo />
                        <Author />
                    </div>
                    <div className={style.ColRight}>
                        <InvPrice />
                        <PublisherInv />
                    </div>
                   
                </div>

               

                <div className={style.FooterRow}>
                    <span className={style.LastModified}>Última modificación: hace 2 horas</span>
                    <div className={style.HeaderActions}>
                        <button type="button" className={style.BtnCancel} onClick={handleCancel}>
                            Cancelar
                        </button>
                        <button type="submit" className={style.BtnSave}>
                            Guardar Cambios
                        </button>
                    </div>
                </div>

            </form>
        </FormProvider>
    );
}

export default EditInvPage;