import "./styles/app.scss";
import DefaultLayout from "./layouts/Default";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Main from "./pages/Main";
import Refund from "./pages/Refund";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/"
            element={
              <DefaultLayout>
                <Main />
              </DefaultLayout>
            }>
          </Route>

          <Route path="/Reembolso"
            element={
              <DefaultLayout>
                <Refund />
              </DefaultLayout>
            }>
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
