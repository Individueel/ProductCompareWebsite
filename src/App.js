import 'bootstrap/dist/css/bootstrap.css';

import './App.css';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import LandingPage from './components/pages/LandingPage';
import ContactPage from './components/pages/ContactPage';
import AllBrandsPage from './components/pages/AllBrandsPage';
import ProductPage from './components/pages/ProductPage';
import WishlistPage from './components/pages/WishlistPage';
import AccountPage from './components/pages/AccountPage';
import BrandInfoPage from './components/pages/BrandInfoPage';
import ProductDetailPage from './components/pages/ProductDetailPage'
import PageNotFound from './components/pages/PageNotFound'
import SearchResultsPage from './components/pages/SearchResultsPage'
import ProductFinderPage from './components/pages/ProductFinderPage'
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import Footer from './components/Footer';
import PageBody from './components/PageBody';
import "react-toastify/dist/ReactToastify.css"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <Router>
      <Header />
      <PageBody>
        <ToastContainer
          position="bottom-left"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        ></ToastContainer>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path='*' element={<PageNotFound />} />
          <Route exact path="/products" element={<ProductPage />} />
          <Route exact path="/brands" element={<AllBrandsPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path='/account' element={<PrivateRoute />}>
            <Route exact path='/account' element={<AccountPage />} />
          </Route>
          <Route exact path='/account/wishlist' element={<PrivateRoute />}>
            <Route exact path='/account/wishlist' element={<WishlistPage />} />
          </Route>
          <Route exact path="/productfinder" element={<ProductFinderPage />} />
          <Route path="/products/:productName/:productID" element={<ProductDetailPage />} />
          <Route path="/brands/:brandName/:brandID" element={<BrandInfoPage />} />
          <Route path="/searchresults/:searchID" element={<SearchResultsPage />} />
        </Routes>
      </PageBody>
      <Footer />
    </Router>
  );
};