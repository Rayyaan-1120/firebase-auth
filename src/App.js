import Signup from "./signup";
import React from "react";
import { AuthProvider } from "./auth";
import { Globalstyle } from "./global";
import Dashoboard from "./dashoboard";
import Login from "./login";
import {Switch,Route} from 'react-router-dom'
import Privateroute from "./Privateroute";
import Updateprofile from './Updateprofile'
import Forgotpassword from "./Forgotpassword";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Switch>
    <AuthProvider>
      <Globalstyle/>
    <div className="App" style={{width:'100%',minHeight:'100vh',backgroundColor:"#0c0c0c"}}>
      <Privateroute exact path="/" component={Dashoboard}></Privateroute>
      <Privateroute path="/update-profile" component={Updateprofile}></Privateroute>
      <Route path="/signup" component={Signup}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/forgot-password" component={Forgotpassword}></Route>
    </div>
    </AuthProvider>
    </Switch>
  );
}

export default App;
