import { useParams } from "react-router-dom"

import { useEffect, useState } from "react"

import ManagePromo from "../Comp_Promotions/ManagePromo"
import style from "../Styles/Promotion.module.css"
import PromoCategoryMag from "../Comp_Promotions/PromoCategoryMag"
import { useForm, FormProvider } from "react-hook-form";
import dayjs from "dayjs";
///:operacion/:PromoID
import { useNavigate } from "react-router-dom"
function ManagePromotions() {
    const navigate = useNavigate()
    const { PromoID, operacion } = useParams()

    const [PromotionsDetails, SetPromotiosBooks] = useState([])
    const methods = useForm({
        defaultValues: {
            name: "",
            discountType: "",
            code: "",
            imageUrl: "",
            startDate: "",
            status: "",
            endDate: "",
            minPurchase: 0
        }
    });


    useEffect(() => {

        if (operacion == "crear") return;

        const fetchPromos = async () => {



            const res = await fetch(`http://localhost:5186/promos/getById/${PromoID}`);



            const data = await res.json();


          SetPromotiosBooks(data)


            console.log(data.data,"dd");

        };



        fetchPromos();



    }, []);

     

    useEffect(() => {
        if (operacion == "crear") return;
        if (PromotionsDetails.data) {
            methods.reset({
                name: PromotionsDetails.data.name,
                discountType: PromotionsDetails.data.discountType,
                code: PromotionsDetails.data.code,
                imageUrl: PromotionsDetails.data.imageUrl,
                startDate: dayjs(PromotionsDetails.data.startDate).format("YYYY-MM-DD"),
                endDate: dayjs(PromotionsDetails.data.endDate).format("YYYY-MM-DD"),
                status: PromotionsDetails.data.status,
                minPurchase: PromotionsDetails.data.minPurchase,
                description: PromotionsDetails.data.description,
                discountValue: PromotionsDetails.data.discountValue
            });
        }
    }, [PromotionsDetails, methods]);
  
    const onSubmit = (data) => {
        var url = ""

        if (operacion == "crear") {
            url = "promos/CrearPromo"
        }
        else {
            url = "promos/UpdateById"
        }

        fetch(`http://localhost:5186/${url}`, {
            method: operacion == "crear" ? "POST" : "PUT",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify( {
                Id: PromoID,
                Code: data.code,
                Name: data.name,
                DiscountType: data.discountType,
                DiscountValue: data.discountValue,
                MinPurchase: data.minPurchase,
                StartDate: data.startDate,
                EndDate: data.endDate,
                Status: data.status,
                ImageUrl: data.imageUrl,
                Description: data.description
            }
            
            
            
            )
        })
            .then(async (res) => {
                
                const data = await res.text()
                if (data.ok) {

                    navigate("/promotions")
                }


            })
            .catch((err) => {
              
                console.error(err);
            });

    };

    

    return (

        <article className={style.MainContainerSection_Page }>

            <div className={style.Description_Page}>
                <div>
                    <h3>Promotions</h3>
                    <p>Edita,agrega, y elimina las promotiones</p>
                </div>


                <button>
                    <i className="fa-solid fa-circle-plus"></i>
                    Agregar Promotion
                </button>


            </div>

            

            <FormProvider {...methods}>
                <form className={style.FormContainer } onSubmit={methods.handleSubmit(onSubmit)}>

                    <ManagePromo />
                   
                    < PromoCategoryMag categories={PromotionsDetails} />
                    
                    <div className={style.SectButtons}>
                        <div className={style.line}></div>

                        <div className={style.DivButtons}>
                            <button  >Cancelar</button>
                            <button type="submit"  ><i className="fa-solid fa-floppy-disk"></i>{" "}Guardar Cambios</button>
                        </div>
                    </div>
             
                </form>
              
                

                </FormProvider >
        </article>

    );

}



export default ManagePromotions;