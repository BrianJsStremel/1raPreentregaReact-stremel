import React from "react";
import "./App.css";

// COMPONENTS
import Header from "./components/Header/Header";
import Productos from "./components/Productos/Productos";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

// PROPS => strings, arrays, booleans, functions, objetos, todo tipo de datos

const user1 = "Star Nutrition Platinum Whey Protein Zipper Pack 3kg";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };

    // Binding
    // this.handlerCounterUp = this.handlerCounterUp.bind(this);
  }

  handlerCounterUp = () => {
    // console.log("Hiciste click en el btn");
    this.setState({ counter: this.state.counter + 1 });
  };

  handlerCounterDown = () => {
    // console.log("Hiciste click en el btn");
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div className="App">
        {/* <Header
        title="Soy un title desde una prop"
        subtitle="Soy un subtitulo desde una prop"
        bgColor="orange"
        borderColor="black"
      />
      */}
        <Header
          title="SUPLEMENTOS DEPORTIVOS"
          subtitle="Compuestos super naturales, aislado e hidrolizado de suero de máxima pureza, obtenidos por métodos no agresivos que garantizan la calidad y estabilidad del producto."
        />
        <NavBar />
        <ItemListContainer />
        <div className="UserSection">
          <Productos
            img="https://dqm4sv5xk0oaj.cloudfront.net/products/46776/large/STANUT00133.jpg?1682597806"
            name={user1}
            date="$36.697,50"
            description="Front-end Developer y profesor del Curso de React.js en CoderHouse"
          />
          <Productos
            name="Star Nutrition Mutant Mass Zipper Pack 5 Kg"
            date="$25.920,90"
            description="Complejo de carbohidratos multi-stage (maltodextrina, dextrosa, almidón de maíz ceroso), complejo proteico (ultra concentrado, aislado e hidrolizado de proteínas de suero lácteo),"
            img="https://dqm4sv5xk0oaj.cloudfront.net/products/46782/large/STANUT00233.jpg?1682598791"
          />
          <Productos
            name="Suplemento Creatina Pura Creatine Monohydrate 300 G"
            date="$19.087,40"
            description="La creatina micronizada es la unión de tres aminoácidos que ofrece mayores ventajas que la creatina normal, mejorando su asimilación."
            img="https://dqm4sv5xk0oaj.cloudfront.net/products/46804/large/STANUT004012.jpg?1682601964"
          />
        </div>
        
      </div>
    );
  }
}

export default App;
