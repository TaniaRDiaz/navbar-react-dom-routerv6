import { Routes, Route } from "react-router-dom";
import About from "../components/pages/About";
import Api from "../components/pages/Api";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Services from "../components/pages/Services";
import Ver from "../components/pages/Ver";
import { about, api, home, log, svc, ver } from "./paths";

const AppRouter = () => {
  return (
    <Routes>
      <Route index={home} element={<Home />} />
      <Route path={about} element={<About />} />
      <Route path={api} element={<Api />} />
      <Route path={svc} element={<Services />} />
      <Route path={ver} element={<Ver />} />
      <Route path={log} element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
