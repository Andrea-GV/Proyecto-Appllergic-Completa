import { useNavigate } from "react-router-dom";
import "./bttnBack.scss";

export default function Bttn_Back() {

  const navigate = useNavigate()

  return (

    <div className="back-button">

      <button onClick={() => navigate(-1)}> ← Volver </button>
    </div>

  )
}