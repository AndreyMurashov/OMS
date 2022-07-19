import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LeftNavBar from "./components/LeftNavBar/LeftNavBar";
import Main from "./components/Main/Main";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <LeftNavBar />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
