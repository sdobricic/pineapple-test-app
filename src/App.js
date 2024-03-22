import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Posts from "./components/Posts";
import PostDetails from "./components/PostDetails";
import NotFound from "./components/NotFound";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' exact element={<Posts />} />
          <Route path='/posts' exact element={<Posts />} />
          <Route path='/post/:id' element={<PostDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
