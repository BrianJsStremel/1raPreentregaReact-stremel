import "./NavBar.css";

import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <ul>
        <li>INICIO</li>
        <li>PRODUCTOS</li>
        <li>OFERTAS</li>
        <li>CONTACTO</li>
        <li>UBICACION</li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
