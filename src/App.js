import "./App.css";
import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import { UserTemplate } from "./templates/UserTemplate/UserTemplate";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import News from "./pages/News/News";
import Login from "./pages/Login/Login";
import Detail from "./pages/Detail/Detail";
import CheckoutTemplate from "./templates/CheckoutTemplate/CheckoutTemplate";
import Checkout from "./pages/Checkout/Checkout";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import { AdminTemplate } from "./templates/AdminTemplate/AdminTemplate";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import Films from "./pages/Admin/Films/Films";
import ShowTime from "./pages/Admin/ShowTime/ShowTime";
import ThemFilms from "./pages/Admin/Films/ThemFilms/ThemFilms";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/detail/:id" exact Component={Detail} />
        <HomeTemplate path="/contact" exact Component={Contact} />
        <HomeTemplate path="/profile" exact Component={Profile} />
        <HomeTemplate path="News" exact Component={News} />

        <CheckoutTemplate path="/checkout/:id" exact Component={Checkout} />

        <UserTemplate path="/register" exact Component={Register} />
        <UserTemplate path="/login" exact Component={Login} />

        <AdminTemplate path="/admin" exact Component={Dashboard} />
        <AdminTemplate path="/admin/films" exact Component={Films} />
        <AdminTemplate path="/admin/themfilms" exact Component={ThemFilms} />

        <HomeTemplate path="/" exact Component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
