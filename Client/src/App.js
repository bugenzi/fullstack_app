import Navbar from "./components/Navbar";
import {
  Router,
  Route,
} from "react-router-dom";
import { Snackbar } from "./components/common";
import PrivateRoute from "./helpers/routes/private-router";
import PublicRoute from "./helpers/routes/public-routes";
import Home from "./pages/home";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import UserProfile from "./pages/Profile";
import MyProfile from './pages/myProfile'
import history from "./redux/history";
import { useSelector } from "react-redux";

function App() {
  const { isUserAuthenticated } = useSelector((state) => state.auth);
  return (
    <Router history={history}>
      <div className="App">
        {isUserAuthenticated ? <Navbar /> : null}

        <Snackbar />
        <div className="App-layout">
          <PrivateRoute path="/" exact component={Home} />
          <PrivateRoute path="/home" exact component={Home} />
          <PrivateRoute path="/myprofile" exact component={MyProfile} />
        
          <PublicRoute path="/signin" component={SignIn} />
          <PublicRoute path="/signup" component={SignUp} />
          <PrivateRoute path="/profile/:id?" exact component={UserProfile} />
        </div>
      </div>
    </Router>
  );
}

export default App;
