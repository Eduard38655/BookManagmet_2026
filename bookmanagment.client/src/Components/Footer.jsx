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
                        <li>
                            <a href="#Shipping">Shipping</a>
                        </li>
                        <li>
                            <a href="#Returns">Returns</a>
                        </li>
                    </ul>
                </div>

                <div className={style.Div_ul}>
                    <label>LEGAL</label>
                    <ul>
                        <li>
                            <a href="#privacy">Privacy Policy</a>
                        </li>

                        <li>
                            <a href="#terms">Terms of Service</a>
                            </li>
                    </ul>
                </div>
                <div className={style.Div_ul}>
                    <label>Help</label>
                    <ul>
                        <li>
                            <a href="#support">Support</a>
                        </li>

                    </ul>
                </div>
            </div>
            <div className={style.Line_info } ></div>
            <div className={style.Div_Info }>
            <p>@ 2026 Modern Library E-Commerce. All rights reserved.</p>
            </div>
      </footer>
  );
}

export default Footer;