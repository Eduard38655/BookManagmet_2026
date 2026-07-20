import { useForm, FormProvider } from "react-hook-form";
import style from "../Styles/Inv.module.css";
import { useEffect, useState } from "react";
import Author from "../Comp_Inventory/Author"
import InvPrice from "../Comp_Inventory/InvPrice"
import PublisherInv from "../Comp_Inventory/PublisherInv"
import BookInfo from "../Comp_Inventory/BookInfo"

function DialogInv({ SetDialog, Book_Data, SelectedId, SetSelectedID, onSave }) {
    const [page, setPage] = useState(0);
    const methods = useForm();

    const {
        handleSubmit,
        reset,
    } = methods;
    useEffect(() => {
        if (SelectedId == null) {
            reset({});
            return;
        }

        const book = Book_Data.find((b) => String(b.id) === String(SelectedId));
        if (book) {
            reset(book);
        }
    }, [SelectedId, Book_Data, reset]);

    const onSubmit = (data) => {
        onSave?.(data, SelectedId);
    };

    const handleCancel = () => {
        SetSelectedID?.(null);
        SetDialog(false);
    };

 
 
    return (
  
        <>
            <FormProvider {...methods}>
            <aside className={style.ContainerEdit}>



                    <form className={style.FormContainer} onSubmit={handleSubmit(onSubmit)}>
                        <label className={style.PageTitle }>Modo Edicion</label>

                        {page === 0 ? (
                            <>
                                <BookInfo />
                                <InvPrice />
                            </>
                        ) : (
                                <>
                                    <PublisherInv />
                                <Author />
                                 
                            </>
                        )}
                    
                        
                    
                    <div className={style.ButtonRow}>
                            <button type="button" className={style.BtnCancel} onClick={handleCancel}>
                                Cancel
                            </button>
                            <button type="submit" className={style.BtnSave}>
                                <i className="fa-solid fa-floppy-disk"></i> {" "}Guardar
                            </button>
                            <button className={style.ButtonGo }
                                type="button"
                                onClick={() => setPage(page === 0 ? 1 : 0)}
                            >
                                <i
                                    className={`fa-solid ${page === 0 ? "fa-right-long" : "fa-left-long"
                                        }`}
                                />
                            </button>



                           
                    </div>
                </form>

            </aside>
            </FormProvider>
            </>
    );
}

export default DialogInv;