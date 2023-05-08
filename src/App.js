import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  document.body.style.backgroundColor = "#7A8289";
  document.body.style.color = "black";
  return (
    <>
        <Navbar />
      <Router>
          <Route exact path="/">
            <News pageSize="9" category="general" />
          </Route>
          <Route exact path="/technology">
            <News pageSize="9" category="technology" />
          </Route>
          <Route exact path="/sports">
            <News pageSize="9" category="sports" />
          </Route>
          <Route exact path="/science">
            <News pageSize="9" category="science" />
          </Route>
          <Route exact path="/health">
            <News pageSize="9" category="health" />
          </Route>
          <Route exact path="/business">
            <News pageSize="9" category="business" />
          </Route>
          <Route exact path="/entertainment">
            <News pageSize="9" category="entertainment" />
          </Route>
          <Route path="*">
            <h1 className='text-center my-5'>404 Not Found</h1>
          </Route>
        <Footer />
      </Router>
    </>
  );
}

export default App;
