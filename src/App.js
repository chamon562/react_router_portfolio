import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import Projects from "./Projects";

function App() {
  const about = [
    "Freestyle rap",
    "Rap",
    "R & B",
    "Oldies like Lenny William Teddy Pendergrass",
    "80s Rock",
    "Alternative",
    "KPop",
    "K Drama",
    "K BBQ",
    "Foreign Music",
    "Foreign Movies",
    "Martin",
    "Married with Children",
    "Growing Pains",
    "Boy Meets World",
    "Break Dance",
    "Popping Dance",
    "Cook",
    "Coding",
    "Playing Dota 2",
    "Playing with Family",
  ];

  const skills = [
    'CSS',
    'Javascript',
    'HTML',
    'React',
   
  ]

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link> <Link to="/about">About</Link>{" "}
          <Link to="/blog">Blog</Link> <Link to="/projects"> Projects</Link>{" "}
        </nav>
        <Route exact path="/" component={Home} />
        <Route path="/about"  render ={() => <About about={about} skills={skills}/> } />
        <Route path="/blog" component={Blog} />
        <Route path="/projects" component={Projects} />
      </div>
    </Router>
  );
}

export default App;
