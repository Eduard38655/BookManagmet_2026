import { useFormContext } from "react-hook-form";
import style from "../Styles/Inv.module.css";
import { useEffect } from "react";

function BookInfo() {


    const {
        register,
        watch,
        formState: { errors },
    } = useFormContext();

    const coverImageUrl = watch("coverImageUrl");
    const leg = watch("language");
    const category = watch("category")
    const format = watch("format")
   


  return (
      <>

          <div className={style.Section_Part1}>

              <label className={style.SectionLabel}>
                  <i className="fa-solid fa-book-bookmark"></i> Book Informacion
              </label>

              <div className={style.DivContainerInfo}>

                  <div className={style.DivCover}>
                      <label htmlFor="coverImageUrl">Book cover</label>
                      <img
                          src={coverImageUrl || "/placeholder-cover.png"}
                          alt="Book cover preview"
                          
                      />
                      
                  </div>

                  <div className={style.BookInfo_Section1}>

                      <div className={style.Sect_btn1}>
                          <label htmlFor="title">Title</label>
                          <input
                              id="title"
                              {...register("title", {
                                  required: "El título es obligatorio",
                              })}
                          />
                          {errors.title && <span>{errors.title.message}</span>}
                      </div>

                      <div className={style.Sect_btn2}>
                          <label htmlFor="isbn">ISBN</label>
                          <input
                              id="isbn"
                              {...register("isbn", {
                                  required: "El ISBN es obligatorio",
                                  pattern: {
                                      value: /^(97(8|9))?\d{9}(\d|X)$/,
                                      message: "ISBN inválido",
                                  },
                              })}
                          />
                          {errors.isbn && <span>{errors.isbn.message}</span>}
                      </div>

                      <div className={style.DivStatus}>
                          <label htmlFor="status">Status</label>
                          <div>
                              <select id="status" {...register("status")}>
                                  <option value="inactive">Inactive</option>
                                  <option value="active">Active</option>
                              </select>
                          </div>
                      </div>

                      <div className={style.DivLeng}>
                          <label htmlFor="language">Language</label>
                          <div>
                              <select id="language" {...register("language")}>
                                  <option>{leg}</option>
                              </select>
                          </div>
                      </div>

                      <div className={style.DivCatg}>
                          <label htmlFor="category">Category</label>
                          <div>
                              <select id="category" {...register("category")}>
                                  <option value="">{category }</option>
                              </select>
                          </div>
                      </div>

                      <div className={style.DivForm}>
                          <label htmlFor="format">Format</label>
                          <div>
                              <select id="format" {...register("format")}>
                                  <option value="">{format}</option>
                              </select>
                          </div>
                      </div>


                      <div className={style.BookDes}>
                          <label htmlFor="description">Description</label>
                          <textarea  {...register("description")}  className={style.description} id="description"></textarea>

 
                      </div>
                  </div>

              </div>

          </div>
      </>
  );
}

export default BookInfo;