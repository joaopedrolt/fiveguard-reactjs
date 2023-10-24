import "./styles/app.scss";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Features from "./views/Features";
import Pricing from "./views/Pricing";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Features></Features>
      <Pricing></Pricing>
    </>
  );
}

export default App;
