import React from 'react';
import {Route, Routes} from 'react-router-dom'
import {Home} from './pages/Home'
import {Favorites} from './pages/Favorites'
import {Project} from "./pages/Project";
import {Characters} from "./pages/Characters";
import {Locations} from "./pages/Locations";
import {Episodes} from "./pages/Episodes";

function App() {
  return (
    <div className="container">
        <Routes>
            <Route path={'/'} exact="true" element={<Home />}/>
            <Route path={'/favorites'} element={<Favorites />}/>
            <Route path={'/project'} element={<Project />}/>
            <Route path={'/characters'}  element={<Characters />}/>
            <Route path={'/locations'} element={<Locations />}/>
            <Route path={'/episodes'} element={<Episodes />}/>
        </Routes>

    </div>
  );
}

export default App;
