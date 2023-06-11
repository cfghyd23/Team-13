import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customers from "../../pages/Customers";
import Dashboard from "../../pages/Dashboard";
import Inventory from "../../pages/Inventory";
import Orders from "../../pages/Orders";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/inventory" element={<Inventory />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
      <Route path="/customers" element={<Customers />}></Route>
    </Routes>
  );
}
export default AppRoutes;
