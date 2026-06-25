
function Reviews({ Book_Data, SetBook_Data }) {
    return (
        <>
            <aside>

                {Book_Data.map((customer) => (

                    <div key={customer.id}  >

                        <div>
                            <img src={"https://www.tdisdi.com/wp-content/uploads/2025/02/SS_United_States_980x612_1.jpg" || customer.customerAvatar} alt="image_cover" />

                            <div>

                                <div>
                                    <h4>{customer.customerName}</h4>
                                    <small>{customer.ReviewsFecha || "02/03/2027"}</small>

                                </div>

                                <div>

                                    <span> {customer.rating} <i className="fa-regular fa-star"></i></span>
                                </div>



                            </div>

                        </div>
                        <p> {customer.comment}</p>


                    </div>


                ))}



                <div>
                    <h3>Reviews & Ratings</h3>

                    <div>
                        


                        <div>
                            <span>8.0</span>
                            <span> 80<i className="fa-regular fa-star"></i></span>
                            <small>Average Ratting</small>
                        </div>


                        <div>
                        info
                        </div>

                    </div>
                    

                    <button>Write a Reviews</button>
                </div>



            </aside>
        </>
    );
}

export default Reviews