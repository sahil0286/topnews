import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  document.body.style.backgroundColor = "#7A8289";
  document.body.style.color = "black";
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
          <Route exact path="/" key="general" element={<News pageSize="9" category="general" />}></Route>
          <Route exact path="/technology" key="technology" element={<News pageSize="9" category="technology" />}></Route>
          <Route exact path="/sports" key="sports" element={<News pageSize="9" category="sports" />}></Route>
          <Route exact path="/science" key="science" element={<News pageSize="9" category="science" />}></Route>
          <Route exact path="/health" key="health" element={<News pageSize="9" category="health" />}></Route>
          <Route exact path="/business" key="business" element={<News pageSize="9" category="business" />}></Route>
          <Route exact path="/entertainment" key="entertainment" element={<News pageSize="9" category="entertainment" />}></Route>
      </Switch>
      <Footer/>
      </Router>
    </>
  );
}
export default App;