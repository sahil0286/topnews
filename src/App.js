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
          <Route path="/technology" element={<News pageSize="3"/>}>
          </Route>
      </Routes>
      <Footer/>
      </Router>
    </>
  );
}
export default App;