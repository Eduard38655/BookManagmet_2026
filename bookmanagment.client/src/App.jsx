import { useEffect } from 'react';

import BookPage from './Pages/BookPage';
import BookByIdPage from './Pages/BookByIdPage';
import { Routes, Route } from 'react-router-dom';
import Footer from "../src/Components/Footer"
function App() {

  


    return (
        <>

           
            <main>
                <Routes>
                    <Route path="/browse" element={<BookPage />} />
                    <Route path="/browse/:BookId" element={<BookByIdPage />} />
                </Routes>
                <Footer />
            </main>
        </>
    );


}

export default App;

