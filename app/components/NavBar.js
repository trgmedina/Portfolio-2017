import React from 'react';
import {Navbar, NavItem, Icon } from 'react-materialize';

export default class NavBar extends React.Component {
    render(){
      return (
        <Navbar brand='logo' right>
               <NavItem href='#'>Getting started</NavItem>
               <NavItem href='#'>Components</NavItem>
               <NavItem href='#'><Icon>search</Icon></NavItem>
        </Navbar>
      );
    }
}