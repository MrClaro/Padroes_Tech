import "./App.css";

// Importação do Outlet - Componente para reaproveitar a estrutura
import { Outlet } from "react-router-dom";

// Componente para navegação entre as rotas
import Narbar from "./components/Narbar";

function App() {
  return (
    <div className="App">
      <Narbar />
      <h1>React Router</h1>
      <Outlet />
      <h1>Footer</h1>
    </div>
  );
}

export default App;
