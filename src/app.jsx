import "./styles/app.scss";
import DefaultLayout from "./layouts/Default";
import RefundLayout from "./layouts/Refund";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DefaultLayout />} />
          <Route path="/Reembolso" element={<RefundLayout />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
