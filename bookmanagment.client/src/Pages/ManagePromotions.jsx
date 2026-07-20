import { useParams } from "react-router-dom"

import { useEffect, useState } from "react"

import ManagePromo from "../Comp_Promotions/ManagePromo"
import style from "../Styles/Promotion.module.css"
import PromoCategoryMag from "../Comp_Promotions/PromoCategoryMag"
import { useForm, FormProvider } from "react-hook-form";
///:operacion/:PromoID
 
function ManagePromotions() {

    const { PromoID } = useParams()
    const [PromotionsDetails, SetPromotiosBooks] = useState([])


    useEffect(() => {



        const fetchPromos = async () => {



            const res = await fetch(`http://localhost:5186/promos/getById/${PromoID}`);



            const data = await res.json();


          SetPromotiosBooks(data)


            console.log(data);

        };



        fetchPromos();



    }, []);


    const methods = useForm({
        defaultValues: {
            name: "",
            description: "",
            code: "",
            discountType: "percentage",
            discountValue: "",
            startDate: "",
            endDate: "",
            category: ""
        }
    });

  


 

    const onSubmit = (data) => {
        console.log(data);

        // Aquí realizarás el fetch hacia tu API
        /*
        fetch("promotions",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })
        */
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
                    { }
                    < PromoCategoryMag categories={PromotionsDetails } />
             
                </form>
              
                

                </FormProvider >
        </article>

    );

}



export default ManagePromotions;