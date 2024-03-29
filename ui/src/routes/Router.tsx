import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/Dashboard/Dashboard";
import Root from "./Root";
import Agents from "../pages/Agents/Agents";
import { useEffect } from "react";
import store from "../store/store";

export const MainRouter = () => {
  // useEffect(() => {
  //   store.dispatch()
  // },[])
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="agents" element={<Agents />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};
