
import './App.css';
import Dashboard from './components/screens/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { aboutUsRoutePattern, indexPattern, productDetailRoutePattern } from './routes';
import ProductDetail from './components/screens/productDetail';
import About from './components/screens/about';

function App() {
  return (
  <>
    {/* <div className="app">
     <Dashboard/>
    </div> */}

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


  </Routes>
  </Router>
</>
  );
}

export default App;