import './App.css';
import Home from './views/Home';
import Product from './views/Product';
import Service from './views/Service';
import Contact from './views/Contact';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  return (
    <Router>

    <Routes>
      <Route path='/' exact element={<Home />}/>
      <Route path='/product' exact element={<Product />}/>
      <Route path='/service' exact element={<Service />}/>
      <Route path='/contact' exact element={<Contact />}/>
    </Routes>
    </Router>
  );
}

export default App;
