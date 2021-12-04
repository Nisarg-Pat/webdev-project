import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import LoginScreen from "./components/LoginScreen";
import ProfileScreen from "./components/ProfileScreen";
import SignUpScreen from "./components/SignUpScreen";

function App() {
  return (
    <BrowserRouter>
        <div className="container">
            <Routes>
                <Route element={<HomeScreen/>}>
                    <Route path={"/"}/>
                    <Route path={"/home"}/>
                </Route>
                <Route element = {<LoginScreen/>}>
                    <Route path={"/login"}/>
                </Route>
                <Route element = {<SignUpScreen/>}>
                    <Route path={"/signup"}/>
                </Route>
                <Route element = {<ProfileScreen/>}>
                    <Route path={"/profile"}/>
                </Route>
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
