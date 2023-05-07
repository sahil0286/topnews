import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  return (
    <>
    <Navbar/>
    <div className='container my-5'>
      <div className='row my-3'>
          <News/>
        </div>
      </div>
    </>
  );
}
export default App;