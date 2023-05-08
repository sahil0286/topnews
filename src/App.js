import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  document.body.style.backgroundColor = "#7A8289";
  document.body.style.color = "black";
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
          <Route path="/technology" element={<News pageSize="3" category="technology" />}></Route>
          <Route path="/sports" element={<News pageSize="3" category="sports" />}></Route>
          <Route path="/science" element={<News pageSize="3" category="science" />}></Route>
          <Route path="/health" element={<News pageSize="3" category="health" />}></Route>
          <Route path="/business" element={<News pageSize="3" category="business" />}></Route>
          <Route path="/entertainment" element={<News pageSize="3" category="entertainment" />}></Route>
      </Routes>
      <Footer/>
      </Router>
    </>
  );
}
export default App;