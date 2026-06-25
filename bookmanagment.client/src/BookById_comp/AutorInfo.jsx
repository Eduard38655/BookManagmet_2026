
function AutorInfo({ Book_Data, SetBook_Data }) {
    return (
        <>
            {Book_Data.map((book) => (

                <div key={book.id}  >

                    <img src={"https://www.tdisdi.com/wp-content/uploads/2025/02/SS_United_States_980x612_1.jpg" || book.imageUrl} alt="image_cover" />

                        <div>
                            <h4>{book.author}</h4>
                            <p> {book.bio}</p>
                        </div>

                </div>


            ))}

        </>
    );
}

export default AutorInfo