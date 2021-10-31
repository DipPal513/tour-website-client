import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import AuthProvider from "./Hooks/AuthProvider";
import Home from "./Components/Home/Home";
import Plans from "./Components/Plans/Plans";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Notfound from "./Components/Notfound/Notfound";
import Contact from "./Components/Contact/Contact";
import Gallary from "./Components/Gallary/Gallary";


import Placeorder from './Components/Placeorder/Placeorder'
import AddService from "./Components/Admin/AddService";
import ManageAllOrders from "./Components/Admin/ManageAllOrders";
import MyOrder from "./Components/Admin/MyOrder";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/admin/addService">
              <AddService />
            </Route>
            <Route exact path="/admin/manageAllOrders">
              <ManageAllOrders />
            </Route>
            <Route exact path="/admin/myOrder">
              <MyOrder />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/gallary">
              <Gallary />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/plans">
              <Plans />
            </Route>
            <PrivateRoute exact path="/placeorder/:planId">
              <Placeorder />
            </PrivateRoute>
            <Route path="*">
              <Notfound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
