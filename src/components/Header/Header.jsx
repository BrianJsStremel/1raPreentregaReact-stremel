import "./Header.css";

import logo from "../../assets/logo2.png";

const Header = (props) => {
  // console.log(props);
  return (
    <div
      className="Header"
      style={{
        backgroundColor: props.bgColor,
        border: `5px solid ${props.borderColor}`,
      }}
    >
      <img src={logo} alt="logo2" />
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};

export default Header;
