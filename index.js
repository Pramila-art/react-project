import React , { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch ,Link,Redirect,NavLink} from "react-router-dom";
import { SelectContainer } from "react-select/src/components/containers";
import ItemsCarousel from 'react-items-carousel';
import App from "./App.js";
//import "./styles.scss";
import "./styles.css";
import Select from "react-select";

export default function Appl() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/contact-us">ContactUs</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
         
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About Us</h2>
}

function Users() {
  return <h2>Users</h2>;
}
function ContactUs() {
  return <h2>Contact Us</h2>;
}
ReactDOM.render(<Appl/>, document.getElementById('routing'));










const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

//Below code with props (properties) 
class Car extends React.Component {
  render() {
    //return <h4>I am a {this.props.brand.name}!</h4>
    return <h4>I am a {this.props.brand.model}!</h4>
  }
}

const myelement = <Car brand="Ford" />;

class Garage extends React.Component {
render() {
  const carinfo = {name: "Ford", model: "Mustang"};
  return (
    <div>
    <h1>Who lives in my garage?</h1>
    <Car brand={carinfo} />
    </div>
  );
}
}
ReactDOM.render(<Garage/>, document.getElementById('root'));

//Below code with state object
class Flowers extends React.Component{
  state = {
      selectedOption: null,
    };
    handleChange = selectedOption => {
      this.setState({ selectedOption });
      console.log(`Option selected:`, selectedOption);
    };

    constructor(props){
        super(props);
        this.state = {
            brand: "Artficial",
            color: "Red",
            purpose : "Decoration",
            occasion : "Wedding"
        };
    }
    changeColor = () =>{
      this.setState({color: "Blue"})
    }
    render(){const { selectedOption } = this.state;
      return(
          <div>
              <h1>My {this.state.brand} Brand</h1>
              <p>It's color is <span id="color">{this.state.color}</span> and purpose is to use for {this.state.purpose} on the occasion of {this.state.occasion} </p>
              <button type="button" onClick={this.changeColor}>Click Me to change Color</button>
              {"\n"}
              <Select id="select"
      value={selectedOption}
      onChange={this.handleChange}
      options={options}
    />
          </div>
          
      )
      }
    }
  ReactDOM.render(<Flowers/>, document.getElementById('root'));

    
  var colorChanger = document.getElementsByTagName("button")[0];
  colorChanger.addEventListener("click",function() {
  document.querySelector('span').style.color = "blue"  
  });
 
