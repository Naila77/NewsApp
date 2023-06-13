import "./App.css";

import React,{useState} from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App =() => {
 

  const apiKey = process.env.REACT_APP_NEWS_API;

  
  const [progress,setProgress] = useState(0);
  
  
 
  
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            progress={progress}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={<News apiKey={apiKey} key="general" setProgress={setProgress} category="general" />}
            ></Route> 
            <Route 
              exact 
              path="/science" 
              element={<News  apiKey={apiKey} key="science" setProgress={setProgress} category="science" />}
            ></Route> 
            <Route 
              exact 
              path="/health" 
              element={<News apiKey={apiKey} key="health" setProgress={setProgress} category="health" />}
            ></Route> 
            <Route 
              exact  
              path="/general" 
              element={<News apiKey={apiKey} key="general" setProgress={setProgress} category="general" />}
            ></Route> 
            <Route 
              exact  
              path="/sports" 
              element={<News apiKey={apiKey} key="sports" setProgress={setProgress} category="sports" />}
            ></Route> 
            <Route 
              exact 
              path="/technology"
              element={<News apiKey={apiKey} key="technology" setProgress={setProgress} category="technology" />}
            ></Route> 
            <Route 
              exact 
              path="/entertainment"
              element={<News apiKey={apiKey} key="entertainment" setProgress={setProgress} category="entertainment" />}
            ></Route> 
            <Route 
              exact path="/business"
              element={<News apiKey={apiKey} key="business" setProgress={setProgress} category="business" />}
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  
}
export default App