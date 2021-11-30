import "./header.css";
import Imagen from "../../img/biblioteca.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">
          Gestión de tesis y artículos académicos
        </span>
        <span className="headerTitleLg">UACH</span>
      </div>
      <img className="headerImg" src={Imagen} alt="" />
    </div>
  );
}
