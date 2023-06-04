
import './App.css';
import Dashboard from './components/screens/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { aboutUsRoutePattern, contactUsRoutePattern, indexPattern, productDetailRoutePattern } from './routes';
import ProductDetail from './components/screens/productDetail';
import About from './components/screens/about';
import Contact from './components/contact';

function App() {
  return (
  <>
   

<Router>
<Routes>
  <Route
    exact
    path={indexPattern}
    element={
      <Dashboard/>
    }
  />



  <Route
    path={productDetailRoutePattern}
    element={
      <ProductDetail />
    }
  />

  <Route
      path={aboutUsRoutePattern}
      element={
        <About />
      }
    />
  <Route
      path={contactUsRoutePattern}
      element={
        <Contact />
      }
    />


  </Routes>
  </Router>
</>
  );
}

export default App;
