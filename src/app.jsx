import "./styles/app.scss";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Features from "./views/Features";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Features></Features>
    </>
  );
}

export default App;
