import style from "../Styles/Navbar.module.css"
function Navbar() {
    return (
        <>
            <nav className={style.Navbar_Container}>

                <div className={style.Navbar_Header}>
                    <img src="" alt="imgTest" />
                    <div className={style.Navbar_Tittle}> 
                        <h2>Admin Console</h2>
                        <p>Morden Library Managment</p>
                    </div>
                </div>

                <div className={style.Navbar_Content}>
                    <ul>
                        <li><a href="#Dashboard"></a>Dashboard</li>
                        <li><a href="#Inventory"></a>Inventory</li>
                        <li><a href="#Orders"></a>Orders</li>
                        <li><a href="#Sales"></a>Sales</li>
                        <li><a href="#User"></a>User</li>
                        <li><a href="#Promotions"></a>Promotions</li>
                        <li><a href="#Reports"></a>Reports</li>
                    </ul>

                    <div className={style.Navbar_Setting}>
                        <ul>
                            <li><a href="#Settings"></a>Settings</li>
                        </ul>
                    </div>
                </div>

                <div className={style.Navbar_Footer} >
                    <button>Add New Book</button>
                </div> 

            </nav>
        </>
  );
}

export default Navbar;