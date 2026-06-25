import { useEffect } from 'react';

import BookPage from './Pages/BookPage';
import BookByIdPage from './Pages/BookByIdPage';
import { Routes, Route } from 'react-router-dom';
import Footer from "../src/Components/Footer"
import Header from "../src/Components/Header"
import './index.css'
function App() {

  


    return (
        <>


            <main className="main_Container">
                <Header />
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

