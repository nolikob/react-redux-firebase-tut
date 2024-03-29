import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/project/:id" component={ProjectDetails} />
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={SignIn} />
          <Route path="/register" component={SignUp} />
          <Route path="/newproject" component={CreateProject} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
