import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Explore from "./pages/Explore";
import Author from "./pages/Author";
import ItemDetails from "./pages/ItemDetails";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/kemenike-internship/" element={<Home />} />
        <Route path="/kemenike-internship/explore" element={<Explore />} />
        <Route path="/kemenike-internship/author/:id" element={<Author />} />
        <Route path="/kemenike-internship/item-details/:id" element={<ItemDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
