import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import HomePage from "../Pages/Home/HomePage";
import LoginPage from "../Pages/Login/LoginPage";
import SignUpPage from "../Pages/SignUp/SignUpPage";
import FeedPage from "../Pages/Feed/FeedPage";
import RestaurantPage from "../Pages/Restaurant/RestaurantPage";
import ProfilePage from "../Pages/Profile/ProfilePage";
import ProfileEditAddressPage from "../Pages/Profile/ProfileEditAddressPage";
import ProfileEditNamePage from "../Pages/Profile/ProfileEditNamePage";
import CartPage from "../Pages/Cart/CartPage";
import MenuNav from "../Components/MenuNav";
import ErrorPage from "../Pages/Error/ErrorPage";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/signup">
          <SignUpPage />
        </Route>

        <Route exact path="/feed">
          <FeedPage />
          <MenuNav home />
        </Route>

        <Route exact path="/feed/:restaurantId">
          <RestaurantPage />
        </Route>

        <Route exact path="/profile">
          <ProfilePage />
          <MenuNav profile />
        </Route>

        <Route exact path="/profile/address">
          <ProfileEditAddressPage />
        </Route>

        <Route exact path="/profile/name">
          <ProfileEditNamePage />
        </Route>

        <Route exact path="/cart">
          <CartPage />
          <MenuNav cart/>
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
