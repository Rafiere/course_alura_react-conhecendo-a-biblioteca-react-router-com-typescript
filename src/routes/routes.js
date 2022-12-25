import Menu from "components/Menu";
import PaginaPadrao from "components/PaginaPadrao";
import Cardapio from "pages/Cardapio";
import Inicio from "pages/Inicio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <main>
      <Router>
        <Menu />

        <Routes>
          {/* Quando temos uma rota dentro da outra, isso é chamado de "nested routes". */}
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path="cardapio" element={<Cardapio />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
};

export default AppRouter;
