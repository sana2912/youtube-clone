import React from 'react';
import Home from './Pages/homePages/home';
import Navbar from './component/navber/navbar';
import { Routes, Route } from 'react-router-dom';
import Display from './Pages/displayPages/display';
import { useState, useEffect } from 'react';
import SideBar from './component/sidbar/sidebar';

function App() {
  const [reload, set_reload] = useState(false);
  const [side_bar, set_side_bar] = useState('side-callaps');
  const [category, setCategory] = useState(0);
  const [search_input, set_search_input] = useState(null);

  useEffect(() => {
    // use this effect for clear search_input data when this component is rendered
    set_search_input('');
  }, [reload])
  return (
    <>
      <Navbar set_side_bar={set_side_bar} set_search_input={set_search_input} set_reload={set_reload} />
      {/* // setting souter for our pages */}
      <SideBar side_bar={side_bar} category={category} setCategory={setCategory} set_reload={set_reload} />
      <Routes>
        <Route path="/" element={
          <Home side_bar={side_bar} category={category} search_input={search_input} />
        } />

        {/* // for display rout we setting paramitor that will direction to specific video 
        category and display id
        */}
        <Route path="/display/:categoryID/:displayID"
          element={<Display />}
        />
      </Routes>
    </>
  )
}

export default App
