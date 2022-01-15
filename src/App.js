import React, { useEffect} from "react";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./Screens/LoginScreen";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counter/userSlice";
import ProfileScreen from "./Screens/ProfileScreen";


function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);


  return (
    <div className="app">
     
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route path="/profile">
              <ProfileScreen />
            </Route>

            <Route exact path="/">
              <HomeScreen />
            </Route>
            {/* <Route path=""></Route> */}
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
