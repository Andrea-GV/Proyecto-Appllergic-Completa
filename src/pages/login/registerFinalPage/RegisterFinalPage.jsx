import { Link } from "react-router-dom";
import Bttn_Back from "../../../components/bttns/bttn_Back/Bttn_Back";
import "./registerFinal.scss";
export default function RegisterFinalPage() {
    return (
        <div className="reg-final">
            <div className="topF">
                <Bttn_Back />
                <h4>4 de 4</h4>
            </div>

            <div className="ok">
                <img src="../../../../public/IMG/ok.jpg" alt="ok" />
            </div>
  
            <div className="finished">
                <h2>Hemos terminado, ya puedes escanear tu primer producto.</h2>
            </div>
            <div className="button">
                <Link to={"/scanner"}>
                <input type="submit" id="scan" value="Escanea un producto" />
                </Link>
            </div>
        </div>
    )
}
