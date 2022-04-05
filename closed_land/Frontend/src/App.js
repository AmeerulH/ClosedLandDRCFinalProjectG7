import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Chart from "./Pages/Chart/Chart";
import Collection from "./Pages/Collection/Collection";
import CollectionComb from "./Pages/CollectionComb/CollectionComb";
import CollectionLaptop from "./Components/CollectionLaptop/Collection";
import LandingPage from "./Pages/LandingPage/LandingPage";
// import NFTAssets from "./Pages/NFTAssets/NFTAssets";
import Profile from "./Pages/Profile/Profile";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SIgnUp/SignUp";
import Stats from "./Pages/Stats/Stats";
import Explore from "./Pages/Explore/Explore";
import WrongPage from "./Pages/WrongPage/WrongPage";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "./Pages/SignIn/SignIn";

function App() {
  const [user, setUser] = useState(useContext(UserContext));

  window.addEventListener("storage", () => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }

    console.log(user);
  });

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
    console.log(user);
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <Switch>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/chart" element={<Chart />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
          <Route path="/collection" element={<CollectionComb />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/stats" element={<Stats />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="*" element={<WrongPage />}></Route>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
