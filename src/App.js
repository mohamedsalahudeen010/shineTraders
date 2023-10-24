import { Route, Switch } from 'react-router-dom';
import './App.css';



import LogInPage from './Components/AuthPage/login/LoginPage';
import SignUpPage from './Components/AuthPage/signUp/SignUp';
import AdminLogInPage from './Components/AuthPage/adminLogin/AdminLoginPage';
import AdminSignUpPage from './Components/AuthPage/adminSignUp/AdminSignUp';
import LandingPage from './Components/Pages/Landing/LandingPage/LandingPage';
import ContactLand from './Components/Pages/Landing/L-Contact/ContactLand';
import LocateUsLand from './Components/Pages/Landing/LocateUs/LocateUsLand';
import MainPage from './Components/Pages/Main/MainPage/MainPage';
import ContactMain from './Components/Pages/Main/M-Contact/ContactMain';
import LocateUsMain from './Components/Pages/Main/LocateUsMain/LocateUsMain';
import ProductsPageMain from './Components/Pages/Main/ProductsMain/ProductsMain';
import { useContext, useEffect } from 'react';
import { fetchProducts } from './Base/redux/Products/productssAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import ProductLand from './Components/Pages/Landing/ProductPageLand/ProductLand';
import CartPage from './Components/Pages/Main/CartPage/CartMain';
import { fetchCart } from './Base/redux/Cart/cartAction';
import { ShineContext } from './Context';
import AdminHomePage from './Components/Pages/Admin/MainPage/MainPage';
import StockPage from './Components/Pages/Admin/StockPage/StockPage';
import AdminProductPage from './Components/Pages/Admin/ProductPage.js/AdminProductPage';
import OrdersPage from './Components/Pages/Admin/OrdersPage/OrdersPage';
import LocatePageAdmin from './Components/Pages/Admin/locatePage/LocatePageAdmin';
import GalleryLand from './Components/Pages/Landing/Gallery/GalleryLand';
import GalleryMain from './Components/Pages/Main/GalleryMain/GalleryMain';
import GalleryAdmin from './Components/Pages/Admin/Gallery/GalleryAdmin';
import { fetchStock } from './Base/redux/Stock/stockAction';
import { fetchOrders } from './Base/redux/orders/ordersAction';
import OrdersUser from './Components/Pages/Main/OrdersUserPage/OrdersUser';
import AboutLand from './Components/Pages/Landing/AboutLand/AboutLand';
import AboutMain from './Components/Pages/Main/AboutMain/AboutMain';


function App() {
  const dispatch=useDispatch()


  useEffect(()=>{
    if(localStorage.getItem("email-admin")){
      dispatch(fetchStock())
    }
    else if(localStorage.getItem("email")){
      dispatch(fetchProducts()) 
      dispatch(fetchOrders(localStorage.getItem("email")))
      dispatch(fetchCart(localStorage.getItem("email")))
      console.log(localStorage.getItem("email"))
    }
  
  },[])

  const { openCom, setOpenCom, openLand, setOpenLand } =
    useContext(ShineContext);
  return (
    <div className="App">
     
      <Switch>
{/* <<<<<<<<<<<<<<<<<<<<< Landing Page >>>>>>>>>>>>>>>>>>>>>>> */}     
        <Route exact path="/">
        <LandingPage>
        
        </LandingPage>
        </Route>

       
{/* <<<<<<<<<<<<<<<<<<<<< User Auth Pages >>>>>>>>>>>>>>>>>>>>>>> */}
        <Route path="/login">
          <LogInPage></LogInPage>
        </Route>

        <Route path="/signUp">
          <SignUpPage></SignUpPage>
        </Route>

{/* <<<<<<<<<<<<<<<<<<<<< Admin Auth Pages >>>>>>>>>>>>>>>>>>>>>>> */}
        <Route path="/adminLogin">
          <AdminLogInPage></AdminLogInPage>
        </Route>

        <Route path="/adminSignUp">
          <AdminSignUpPage></AdminSignUpPage>
        </Route>
{/* <<<<<<<<<<<<<<<<<<<<< Landing Pages >>>>>>>>>>>>>>>>>>>>>>> */}
        <Route path="/productsLand">
          <ProductLand></ProductLand>
        </Route>

        <Route path="/contactLand">
          <ContactLand></ContactLand>
        </Route>

        <Route path="/locateLand">
          <LocateUsLand></LocateUsLand>
        </Route>

        <Route path="/galleryLand">
          <GalleryLand></GalleryLand>
        </Route>

        <Route path="/aboutLand">
          <AboutLand></AboutLand>
        </Route>
{/* <<<<<<<<<<<<<<<<<<<<< Main Pages >>>>>>>>>>>>>>>>>>>>>>> */}
        <Route path="/main">
          <MainPage></MainPage>
        </Route>

        <Route path="/productsMain">
          <ProductsPageMain></ProductsPageMain>
        </Route>

        <Route path="/contactMain">
          <ContactMain></ContactMain>
        </Route>

        <Route path="/locateMain">
          <LocateUsMain></LocateUsMain>
        </Route>
        <Route path="/ordersUser">
          <OrdersUser></OrdersUser>
        </Route>

        <Route path="/cart">
          <CartPage></CartPage>
        </Route>

        <Route path="/galleryMain">
          <GalleryMain></GalleryMain>
        </Route>

        <Route path="/aboutMain">
          <AboutMain></AboutMain>
        </Route>

{/* <<<<<<<<<<<<<<<<<<<<< Admin Pages >>>>>>>>>>>>>>>>>>>>>>> */}
        <Route path="/adminPage">
        <AdminHomePage></AdminHomePage>
        </Route>

        <Route path="/adminProduct">
        <AdminProductPage></AdminProductPage>
        </Route>

        <Route path="/orders">
       <OrdersPage></OrdersPage>
        </Route>
        
        <Route path="/stock">
        <StockPage></StockPage>
        </Route>

        <Route path="/stock">
        <StockPage></StockPage>
        </Route>

        <Route path="/locateAdmin">
          <LocatePageAdmin></LocatePageAdmin>
        </Route>

        <Route path="/galleryAdmin">
          <GalleryAdmin></GalleryAdmin>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
