import style from "../Styles/BookPage.module.css";

function Reviews({ Book_Data }) {
    const totalReviews = Book_Data.length;

    const averageRating = totalReviews
        ? Book_Data.reduce((sum, item) => sum + item.rating, 0) / totalReviews
        : 0;

    const ratingInfo = [1, 2, 3, 4, 5].map((star) => {
        const count = Book_Data.filter(
            (review) => review.rating === star
        ).length;

        return {
            number: star,
            percentage: totalReviews
                ? (count * 100) / totalReviews
                : 0,
        };
    });

    return (
        <aside className={style.Conatiner_Reviews}>
            {Book_Data.map((customer) => (
                <div key={customer.id} className={style.SubContainer}>
                    <div className={style.Card_reviews}>
                        <img
                            src={
                                customer.customerAvatar ||
                                "https://www.tdisdi.com/wp-content/uploads/2025/02/SS_United_States_980x612_1.jpg"
                            }
                            alt="image_cover"
                        />

                        <div className={style.Container_content}>
                            <div className={style.autor_title}>
                                <h4>{customer.customerName}</h4>
                                <small>
                                    {customer.ReviewsFecha || "02/03/2027"}
                                </small>
                            </div>

                            {/* Rating de este usuario */}
                            <div className={style.div_rating}>
                                <span>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <i
                                            key={star}
                                            className={
                                                star <= customer.rating
                                                    ? "fa-solid fa-star"
                                                    : "fa-regular fa-star"
                                            }
                                        />
                                    ))}
                                </span>
                            </div>
                        </div>
                    </div>

                    <p>{customer.comment}</p>
                    <div className={style.Line}></div>
                </div>
            ))}

            <div className={style.views_Conatiner}>
                <h3>Reviews & Ratings</h3>

                <div className={style.SubConatiner}>
                    <div className={style.Div_Title_reviews}>
                        <h4>{averageRating.toFixed(1)}</h4>

                        {/* Average Rating */}
                        <div className={style.DivRtingStar}>
                            {[1, 2, 3, 4, 5].map((star) => {
                                if (star <= Math.floor(averageRating)) {
                                    return (
                                        <i
                                            key={star}
                                            className="fa-solid fa-star"
                                        />
                                    );
                                }

                                if (star - averageRating <= 0.5) {
                                    return (
                                        <i
                                            key={star}
                                            className="fa-solid fa-star-half-stroke"
                                        />
                                    );
                                }

                                return (
                                    <i
                                        key={star}
                                        className="fa-regular fa-star"
                                    />
                                );
                            })}
                        </div>

                        <small>Average Rating</small>
                    </div>

                    <div className={style.Div_Procentage}>
                        <div className={style.Div_porcentage_range}>
                            {ratingInfo.map((r) => (
                                <div
                                    key={r.number}
                                    className={style.DivPersantage}
                                >
                                    <span>{r.number}</span>

                                    <progress
                                        max="100"
                                        value={r.percentage}
                                    />

                                    <label>
                                        {r.percentage.toFixed(0)}%
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <button>Write a Review</button>
            </div>
        </aside>
    );
}

export default Reviews;