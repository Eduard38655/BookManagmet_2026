import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
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
import CustomerPage from "../src/Pages/CustomerPage"
import DashMenu from "../src/Components/DashMenu"
import PromotionsPage from "../src/Pages/PromotionsPage"
import SalesPage from "../src/Pages/SalesPage"
import OrdersPage from '../src/Pages/OrdersPage';
import UsersPage from '../src/Pages/UsersPage';
import EmpleadosPage from '../src/Pages/EmpleadosPage';
import './index.css'
import { useParams,Outlet } from "react-router-dom" 
function App() {
    const { BookId } = useParams(); 

    console.log(BookId,"locao")
    const location = useLocation();
    const Routes_Dashboard = ["/browse", "/browse", `/browse/:${BookId }`,"/cart","/login","/home"]
 
   
    
    return (
        <>


<main className={Routes_Dashboard.includes((location.pathname).toLowerCase()) ? "main_Container" : "DashboardContainer"  }   >
                {Routes_Dashboard.includes((location.pathname).toLowerCase()) ? (
                    <>
                        <Header />
                        
                    </>
                ) : (
                    <>
                         <DashMenu />
                    </>
                )}
                
                <Routes>
                    <Route path="/browse" element={<BookPage />} >
                        <Route path=":BookId" element={<BookByIdPage />} />

                    </Route>
                   
                    <Route path="/login" element={<LoginPage />} />
                 
                    <Route path="/cart" element={<ShoppingPage />} />
                    <Route path="/dashboard" element={<DashboardPage /> } />
                    <Route path="/inventory" element={<InventoryPage />} />
                    <Route path="/Customer" element={<CustomerPage />} />
                    <Route path="/orders" element={<OrdersPage />} />
                    <Route path="/promotions" element={<PromotionsPage />} />
                    <Route path="/sales" element={<SalesPage />} />
                    <Route path="/clientes" element={<UsersPage />} />
                    <Route path="/usuarios" element={<EmpleadosPage />} />
                </Routes>
               

                {Routes_Dashboard.includes((location.pathname).toLowerCase()) && <Footer />}
               
            </main>
                
        </>
    );


}

export default App;

