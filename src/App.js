
import './App.css';
import Carts from './component/Carts';
import Navbar from './component/Navbar';
import Product from './component/Product';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Carts />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
