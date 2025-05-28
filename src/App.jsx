import { Route, Routes } from "react-router";
import HomePage from "./pages/home";
import BasketPage from "./pages/basket";
import MainLayout from "./layout/main-layout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="basket" element={<BasketPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
