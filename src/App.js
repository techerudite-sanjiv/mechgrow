
import './App.css';
import Contact from './components/contact';
import About from './components/screens/about';
import Dashboard from './components/screens/Dashboard';
import ProductDetail from './components/screens/productDetail';
import AllProducts from './components/screens/product/allProducts';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import { aboutUsRoutePattern, contactUsRoutePattern, indexPattern, productDetailRoutePattern, productListRoutePattern } from './routes';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path={indexPattern}
            element={
              <Dashboard />
            }
          />
          <Route
            path={productDetailRoutePattern}
            element={
              <ProductDetail />
            }
          />
          <Route
            path={productDetailRoutePattern}
            element={
              <ProductDetail />
            }
          />
          <Route
            path={contactUsRoutePattern}
            element={
              <Contact />
            }
          />

          <Route
            path={aboutUsRoutePattern}
            element={
              <About />
            }
          />

          <Route
            path={productListRoutePattern}
            element={
              <AllProducts />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
