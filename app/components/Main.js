// Include React as a dependency
import React from 'react';
import {Navbar, NavItem, Icon, Button, Carousel } from 'react-materialize';
var mailtoLink = require('mailto-link');

// Including the Link component from React Router to navigate within our application without full page reloads
const Link = require("react-router").Link;

// Create the Main component
class Main extends React.Component {

  sendEmail() {
    mailtoLink({to: "trgmedina@gmail.com", subject: 'Hello!'});
    console.log("click");
  }

  linkedin() {
    browserHistory
  }

  render() {

    return (
      <div className="container-fluid">
         
        <Navbar id= "nav" brand="Theresa R. Medina" href="#welcome" fixed right>
          <i className="symbol material-icons">spa</i>
          <NavItem className="options" href="#about">About</NavItem>
          <i className="symbol material-icons">assignment</i>
          <NavItem className="options" href="#projects">Projects</NavItem>
          <i className="symbol material-icons">mail</i>
          <NavItem className="options" href="#contact">Contact</NavItem>
        </Navbar>

        <div id="welcome">
          <div className="blurb">
            <h1>Full-Stack Web Developer</h1>
            <p id="summary">Passionate and driven to create outstanding user experiences.</p>
          </div>

          <div className="more">
            <h4>Check Out My Work!</h4>
            <Button floating large className='light' waves='light' icon='expand_more' href="#projects"></Button>
          </div>
        </div>

        <div id="about">
          <h2 className="titles">Experience</h2>

          <div className="icons">
            <i className="glyphicons devicon-html5-plain-wordmark"></i>
            <i className="glyphicons devicon-css3-plain-wordmark"></i>
            <i className="glyphicons devicon-javascript-plain"></i>
            <i className="glyphicons devicon-jquery-plain-wordmark"></i>
            <br></br><br></br><br></br>
            <i className="glyphicons devicon-git-plain"></i>
            <i className="glyphicons devicon-nodejs-plain"></i>
            <i className="glyphicons devicon-express-original"></i>
            <i className="glyphicons devicon-react-original-wordmark"></i>
            <br></br><br></br><br></br>
            <i className="glyphicons devicon-mongodb-plain-wordmark"></i>
            <i className="glyphicons devicon-python-plain-wordmark"></i>
            <i className="glyphicons devicon-mysql-plain-wordmark"></i>
            <i className="glyphicons devicon-sequelize-plain-wordmark"></i>
            <br></br><br></br><br></br>
            <i className="glyphicons devicon-django-plain"></i>
            <i className="glyphicons devicon-heroku-original-wordmark"></i>
            <i className="glyphicons devicon-java-plain-wordmark"></i>
            <i className="glyphicons devicon-cplusplus-plain"></i>
          </div>
        </div>

        <div id="projects">
          <h2 className="titles">Projects</h2>
          <Carousel fixedItem={<Button className="red" waves="light" node='a' href="https://github.com/trgmedina/plantapp" target="_blank">Plantr</Button>}
          options= {{ fullWidth: true }} images={[
            'https://github.com/trgmedina/plantapp/blob/master/public/Screenshots/Login-1.PNG?raw=true',
            'https://github.com/trgmedina/plantapp/raw/master/public/Screenshots/Reminders.PNG?raw=true',
            'https://github.com/trgmedina/plantapp/raw/master/public/Screenshots/Plants-2.PNG?raw=true'
          ]} />
          <br></br>
          <Carousel fixedItem={<Button className="red" waves="light" node='a' href="https://github.com/mattsells/BarBid" target="_blank">BarBid</Button>}
          options= {{ fullWidth: true }} images={[
            'https://github.com/mattsells/barbid/raw/master/public/images/login-screen.png',
            'https://github.com/mattsells/barbid/raw/master/public/images/patron-listing.png',
            'https://github.com/mattsells/barbid/raw/master/public/images/patron-accepted.png'
          ]} />
          <br></br>
          <Carousel fixedItem={<Button className="red" waves="light" node='a' href="https://github.com/trgmedina/plantapp" target="_blank">Dinner and a Movie</Button>}
          options= {{ fullWidth: true }} images={[
            'https://camo.githubusercontent.com/5ea3de70f6eb45d63e702c42775b456ba416b6eb/687474703a2f2f696d6775722e636f6d2f55356f706c776e2e706e67',
            'https://camo.githubusercontent.com/9a52a84960a98c08cfe399dea780284b6cbd50e8/687474703a2f2f696d6775722e636f6d2f684465344473762e706e67',
            'https://camo.githubusercontent.com/64af9bcaab0eb343c1a01e07e4b25d4683f7730e/687474703a2f2f696d6775722e636f6d2f6d735472334c702e706e67'
          ]} />
          <br></br>
        </div>

        <div id="contact">
          <h2 className="titles">Contact Me!</h2>

          <div className="icons">
            <a href="mailto:trgmedina@gmail.com">
              <i className="glyphicons fa fa-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/theresamedina/" target="_blank">
              <i className="glyphicons fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/trgmedina" target="_blank">
              <i className="glyphicons fa fa-github-square" aria-hidden="true"></i>
            </a>
          </div>
        </div>

      </div>
    );
  }
};

// Export the module back to the route
module.exports = Main;