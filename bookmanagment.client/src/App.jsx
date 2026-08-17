import { Routes, Route } from 'react-router-dom';
import BookPage from './Pages/BookPage';
import BookByIdPage from './Pages/BookByIdPage';
import LoginPage from "../src/Pages/LoginPage"
import ShoppingPage from "../src/Pages/ShoppingPage"
import DashboardPage from '../src/Pages/DashboardPage';
import InventoryPage from "../src/Pages/InventoryPage"
import CustomerPage from "../src/Pages/CustomerPage"
import PromotionsPage from "../src/Pages/PromotionsPage"
import SalesPage from "../src/Pages/SalesPage"
import OrdersPage from '../src/Pages/OrdersPage';
import UsersPage from '../src/Pages/UsersPage';
import EmpleadosPage from '../src/Pages/EmpleadosPage';
import './index.css'
import EditInvPage from "../src/Pages/EditInvPage"
import ManagePromotions from "../src/Pages/ManagePromotions"
import CliManagmetPag from "../src/Pages/CliManagmetPag"
import PublicLayout from './Layouts/PublicLayout'
import AdminLayout from './Layouts/AdminLayout'
import LoginLayout from './Layouts/LoginLayout'
import BooksLayout from './Layouts/BooksLayout'
import ShoppingLayout from './Layouts/ShoppingLayout'
import SectionDashboardLayout from './Layouts/SectionDashboardLayout'
import InventoryLayout from './Layouts/InventoryLayout'
import CustomerLayout from './Layouts/CustomerLayout'
import OrdersLayout from './Layouts/OrdersLayout'
import PromotionsLayout from './Layouts/PromotionsLayout'
import EmployeesLayout from './Layouts/EmployeesLayout'
import SalesLayout from './Layouts/SalesLayout'
import ProtectedRoute from "../src/Services/ProtectedRoute"

import HomePage from "../src/Pages/HomePage";
import HomeLayout from "../src/Layouts/HomeLayout";

 

function App() {
    return (
        <>
            <Routes>

                {/* Login Route */}
                <Route element={<LoginLayout />}>
                    <Route path="/login" element={<LoginPage />} />
                </Route>

                <Route element={<HomeLayout />}>
                    <Route path="/" element={<HomePage />} />
                </Route>

                <Route element={<ProtectedRoute /> } >





                    {/* Public Routes con Header/Footer */}
                    <Route element={<PublicLayout />}>
                        {/* Books Section */}
                        <Route path="/browse" element={<BooksLayout />}>
                            <Route index element={<BookPage />} />
                            <Route path=":BookId" element={<BookByIdPage />} />
                        </Route>
                   




                        {/* Shopping Section */}
                        <Route path="/cart" element={<ShoppingLayout />}>
                            <Route index element={<ShoppingPage />} />
                        </Route>
                    </Route>

                  

                    {/* Admin/Dashboard Routes con DashMenu */}
                    <Route element={<AdminLayout />}>
                        {/* Dashboard Section */}
                        <Route path="/dashboard" element={<SectionDashboardLayout />}>
                            <Route index element={<DashboardPage />} />
                        </Route>

                        {/* Inventory Section */}
                        <Route path="/inventory" element={<InventoryLayout />}>
                            <Route index element={<InventoryPage />} />
                            <Route path=":BookId" element={<EditInvPage />} />
                        </Route>

                        {/* Customer Section */}
                        <Route path="/customer" element={<CustomerLayout />}>
                            <Route index element={<CustomerPage />} />
                            <Route path=":clienteId" element={<CliManagmetPag />} />
                        </Route>

                        {/* Orders Section */}
                        <Route path="/orders" element={<OrdersLayout />}>
                            <Route index element={<OrdersPage />} />
                        </Route>

                        {/* Promotions Section */}
                        <Route path="/promotions" element={<PromotionsLayout />}>
                            <Route index element={<PromotionsPage />} />
                            <Route path=":operacion/:PromoID" element={<ManagePromotions />} />
                        </Route>

                        {/* Sales Section */}
                        <Route path="/sales" element={<SalesLayout />}>
                            <Route index element={<SalesPage />} />
                        </Route>

                        {/* Users/Clients Section */}
                        <Route path="/clientes" element={<EmployeesLayout />}>
                            <Route index element={<UsersPage />} />
                        </Route>

                        {/* Employees Section */}
                        <Route path="/employee" element={<EmployeesLayout />}>
                            <Route index element={<EmpleadosPage />} />
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
