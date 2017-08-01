// Include React as a dependency
import React from 'react';
import {Navbar, NavItem, Icon } from 'react-materialize';

// Including the Link component from React Router to navigate within our application without full page reloads
const Link = require("react-router").Link;

// Create the Main component
class Main extends React.Component {

  render() {

    return (
      <div className="container-fluid">
         
        <Navbar id= "nav" brand='Theresa R. Medina' right>
          <NavItem href='get-started.html'>Getting started</NavItem>
          <NavItem href='components.html'>Components</NavItem>
        </Navbar>

      </div>
    );
  }
};

// Export the module back to the route
module.exports = Main;