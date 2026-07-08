import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import BookPage from './Pages/BookPage';
import BookByIdPage from './Pages/BookByIdPage';
import { Routes, Route } from 'react-router-dom';
import Footer from "../src/Components/Footer"
import Header from "../src/Components/Header"
import LoginPage from "../src/Pages/LoginPage"
import ShoppingPage from "../src/Pages/ShoppingPage"
import DashboardPage from '../src/Pages/DashboardPage';
import InventoryPage from "../src/Pages/InventoryPage"
import CustomerPage from "../src/Pages/CustomerPage"
import DashMenu from "../src/Components/DashMenu"
import './index.css'
function App() {

    const location = useLocation();
    const Routes_Dashboard = ["/browse", "/browse/:BookId", "/browse/: BookId","/cart","/login","/home"]

   
    
    return (
        <>


            <main className={Routes_Dashboard.includes((location.pathname).toLowerCase()) ? "main_Container" : "DashboardContainer"  }   >
                {Routes_Dashboard.includes((location.pathname).toLowerCase()) ? (<><Header />  </>) : (<><DashMenu /></>)}
                
                <Routes>
                    <Route path="/browse" element={<BookPage />} />
                    <Route path="/browse/:BookId" element={<BookByIdPage />} />
                    <Route path="/login" element={<LoginPage />} />
                 
                    <Route path="/cart" element={<ShoppingPage />} />
                    <Route path="/dashboard" element={<DashboardPage /> } />
                    <Route path="/inventory" element={<InventoryPage />} />
                    <Route path="/Customer" element={<CustomerPage />} />


                </Routes>
               

                {Routes_Dashboard.includes((location.pathname).toLowerCase()) && <Footer />}
              

            </main>
                
        </>
    );


}

export default App;

