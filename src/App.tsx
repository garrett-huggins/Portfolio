import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Page404 from "./pages/404";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
