import React from 'react';
import {Route, Routes, } from 'react-router-dom'
import {Home} from "../Pages/Home";
import {Favorites} from "../Pages/Favorites";
import {Project} from "../Pages/Project";
import {Characters} from "../Pages/Characters";
import {Locations} from "../Pages/Locations";
import {Episodes} from "../Pages/Episodes";
import NotFound from "../Pages/NotFound";

const AppRoutes = () => {
    return (
        <div className="container">
            <Routes>
                <Route path={'/'} exact="true" element={<Home />}/>
                <Route path={'/Favorites'} element={<Favorites />}/>
                <Route path={'/project'} element={<Project />}/>
                <Route path={'/characters'}  element={<Characters />}/>
                <Route path={'/locations'} element={<Locations />}/>
                <Route path={'/episodes'} element={<Episodes />}/>
                <Route path={'*'} element={<NotFound />}/>

            </Routes>

        </div>
    )
}
export default AppRoutes;