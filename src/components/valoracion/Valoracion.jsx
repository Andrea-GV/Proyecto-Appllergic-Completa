import ReactStars from "react-stars";
import "./valoracion.css";
export default function Valoracion() {
  const ratingChanged = () => {};
  return (
    <div className="valoracion-container">
      <div className="logoGiro">
        <img className="img" src="public\IMG\logoApplergicFigurasGiro.png" />
      </div>
      <div className="text">
        <p>
          <strong>¡Gracias por usar Applergirc!</strong>
        </p>
        <br></br>
        <p>
          <strong>
            Por favor,<br></br>evalúa tu experiencia.
          </strong>
        </p>
      </div>

      <div className="estrellitas">
        <label>
          <p className="estrella">
            {
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={40}
                color2={"#ffd700"}
                half={true}
                edit={true}
                className="estrella"
              />
            }
          </p>
        </label>
      </div>
    </div>
  );
}
