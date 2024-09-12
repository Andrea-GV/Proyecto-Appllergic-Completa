import Bttn_Back from "../../../components/bttns/bttn_Back/Bttn_Back";
import './registerContact.scss'

export default function RegisterContact() {
  return (
    <div className="reg-contact">
        <div className="top">
            <Bttn_Back />
            <h4>2 de 4</h4>  
        </div>
        <div className="info">
            <h2><strong>Vamos a añadir tu contacto en caso de emergencia</strong></h2>
            <h3>Nos pondremos en contacto con tu persona de confianza y/o compañía de seguros en caso de emergencia.</h3>
        </div>
        <div className="formulario">
          <form></form>  
        </div>
    </div>
  )
}
