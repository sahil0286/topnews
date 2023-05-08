import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  document.body.style.backgroundColor = "#7A8289";
  document.body.style.color = "black";
  return (
    <>
    <Navbar/>
      <div className='container my-5'>
        <div className='row my-3'>
          <News pageSize="12"/>
        </div>
      </div>
      <Footer/>
    </>
  );
}
export default App;