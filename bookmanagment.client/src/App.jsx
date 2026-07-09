import { useEffect } from 'react';

import BookPage from './Pages/BookPage';
import BookByIdPage from './Pages/BookByIdPage';
import { Routes, Route } from 'react-router-dom';
import Navbar from "../src/Components/Navbar"
import Footer from "../src/Components/Footer"
import Header from "../src/Components/Header"
import LoginPage from "../src/Pages/LoginPage"
import ShoppingPage from "../src/Pages/ShoppingPage"
import DashboardPage from '../src/Pages/DashboardPage';
import InventoryPage from "../src/Pages/InventoryPage"
import './index.css'
function App() {

  


    return (
        <>


            <main className="main_Container">
                <Header />
                <Navbar/>
                <Routes>
                    <Route path="/browse" element={<BookPage />} />
                    <Route path="/browse/:BookId" element={<BookByIdPage />} />
                    <Route path="/login" element={<LoginPage />} />
                 
                    <Route path="/cart" element={<ShoppingPage />} />
                    <Route path="/dashboard" element={<DashboardPage /> } />
                    <Route path="/inventory" element={<InventoryPage />} />


                </Routes>
                <Footer />
            </main>
                
        </>
    );


}

export default App;

