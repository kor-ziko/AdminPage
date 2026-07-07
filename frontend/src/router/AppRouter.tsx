import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard/Dashboard";
import Orders from "../pages/Orders/Orders";
import Users from "../pages/Users/Users";
import Settings from "../pages/Settings/Settings";
import Notice_boards from "../pages/Notice_board/Notice_board";
import Coupons from "../pages/Coupons/Coupons";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/notice_board" element={<Notice_boards />} />
        <Route path="/users" element={<Users />} />
        <Route path="/coupons" element={<Coupons />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}