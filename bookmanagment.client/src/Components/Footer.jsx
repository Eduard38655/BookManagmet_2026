import { useLocation } from "react-router-dom";
import style from "../Styles/Header.module.css"
function Footer() {

    const location = useLocation();
    console.log(location.pathname);
    return (
        <footer className={style.Footer_Container }>

            <div className={style.Container_Content}>
                <div className={style.Footer_Title }>
                    <h4>Modern Library</h4>
                    <p>Curanting knowledge and stories fpr the discerning mind</p>
                </div>


                <div className={style.Div_ul }>
                    <label>Explore</label>
                    <ul>
                        <li>Shippping</li>
                        <li>Returns</li>
                    </ul>
                </div>
                <div className={style.Div_ul}>
                    <label>LEGAL</label>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
                <div className={style.Div_ul}>
                    <label>Help</label>
                    <ul>
                        <li>Support</li>

                    </ul>
                </div>
            </div>

            <div>
            <p>@ 2026 Modern Library E-Commerce. All rights reserved.</p>
            </div>
      </footer>
  );
}

export default Footer;