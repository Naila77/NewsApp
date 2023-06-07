import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {

   //  pageSize = 15;
    //  category = 'science';

  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {    

    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={<News apiKey={this.apiKey} key="general" setProgress={this.setProgress} category="general" />}
            ></Route> 
            <Route 
              exact 
              path="/science" 
              element={<News  apiKey={this.apiKey} key="science" setProgress={this.setProgress} category="science" />}
            ></Route> 
            <Route 
              exact 
              path="/health" 
              element={<News apiKey={this.apiKey} key="health" setProgress={this.setProgress} category="health" />}
            ></Route> 
            <Route 
              exact  
              path="/general" 
              element={<News apiKey={this.apiKey} key="general" setProgress={this.setProgress} category="health" />}
            ></Route> 
            <Route 
              exact  
              path="/sports" 
              element={<News apiKey={this.apiKey} key="sports" setProgress={this.setProgress} category="sports" />}
            ></Route> 
            <Route 
              exact 
              path="/technology"
              element={<News apiKey={this.apiKey} key="technology" setProgress={this.setProgress} category="technology" />}
            ></Route> 
            <Route 
              exact 
              path="/entertainment"
              element={<News apiKey={this.apiKey} key="entertainment" setProgress={this.setProgress} category="entertainment" />}
            ></Route> 
            <Route 
              exact path="/business"
              element={<News  apiKey={this.apiKey} key="business" setProgress={this.setProgress} category="business" />}
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
