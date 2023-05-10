import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";

function App() {
  document.body.style.backgroundColor = "#7A8289";
  document.body.style.color = "black";
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<News pageSize="12" category="general" />} />
        <Route
          exact
          path="/technology"
          element={<News pageSize="12" category="technology" />}
        />
        <Route
          exact
          path="/sports"
          element={<News pageSize="12" category="sports" />}
        />
        <Route
          exact
          path="/science"
          element={<News pageSize="12" category="science" />}
        />
        <Route
          exact
          path="/health"
          element={<News pageSize="12" category="health" />}
        />
        <Route
          exact
          path="/business"
          element={<News pageSize="12" category="business" />}
        />
        <Route
          exact
          path="/entertainment"
          element={<News pageSize="12" category="entertainment" />}
        />
        <Route
          path="*"
          element={<h1 className="text-center my-5">404 Not Found</h1>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;