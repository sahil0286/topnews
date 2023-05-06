import './App.css';
import Navbar from './components/Navbar';
import Nwesitem from './components/Nwesitem';

function App() {
  return (
    <>
    <Navbar/>
    <div className='container my-5'>
      <h2>Top News</h2>
      <div className='row my-3'>
        <div className='col-md-4'>
          <Nwesitem/>
        </div>
        <div className='col-md-4'>
          <Nwesitem/>
        </div>
        <div className='col-md-4'>
          <Nwesitem/>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
