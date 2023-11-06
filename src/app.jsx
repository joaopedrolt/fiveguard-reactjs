import "./styles/app.scss";

import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Main from "./pages/Main";
import Refund from "./pages/Refund";

import DefaultLayout from "./layouts/Default";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 215,
    });
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <DefaultLayout>
                <Main />
              </DefaultLayout>
            }
          ></Route>

          <Route
            path="/Reembolso"
            element={
              <DefaultLayout>
                <Refund />
              </DefaultLayout>
            }
          ></Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
