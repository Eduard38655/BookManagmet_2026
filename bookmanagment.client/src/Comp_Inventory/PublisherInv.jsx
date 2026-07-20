
import style from "../Styles/Inv.module.css";
import { useFormContext } from "react-hook-form";

function PublisherInv( ) {

    const {
        register,
        watch,
        formState: { errors },
    } = useFormContext();

    const publisherLogoUrl = watch("logoUrl");
 
  return (
      <>

          <div className={style.Section_Publisher}>

              <label className={style.SectionLabel}>
                  <i className="fa-solid fa-building-flag"></i> Publisher Details
              </label>

              <div className={style.Container_Publisher}>

                  <div className={style.PublisherLogo}>
                      <label>Publisher logo</label>
                      <img
                          src={publisherLogoUrl || "/placeholder-logo.png"}
                          alt="Publisher logo preview"
                          onError={(e) => {
                              e.currentTarget.src = "/placeholder-logo.png";
                          }}
                      />
                  </div>

                  <div className={style.PublisherFields}>

                      <div>
                          <label htmlFor="publisherName">Publisher name</label>
                          <input id="publisherName" {...register("publisherName")} />
                      </div>

                      <div>
                          <label htmlFor="publisherEmail">Publisher email</label>
                          <input
                              id="publisherEmail"
                              type="email"
                              {...register("publisherEmail", {
                                  pattern: {
                                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                      message: "Email inválido",
                                  },
                              })}
                          />
                          {errors.publisherEmail && <span>{errors.publisherEmail.message}</span>}
                      </div>

                      <div>
                          <label htmlFor="publisherPhone">Publisher phone</label>
                          <input id="publisherPhone" {...register("publisherPhone")} />
                      </div>

                      <div>
                          <label htmlFor="publisherWebsite">Publisher website</label>
                          <input id="publisherWebsite" {...register("publisherWebsite")} />
                      </div>

                  </div>

              </div>

          </div>
      </>
  );
}

export default PublisherInv;