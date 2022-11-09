import React from 'react';
import { Route, Routes } from 'react-router-dom';

import {Favorites} from "../pages/Favorites";
import {Project} from "../pages/Project";
import {Locations} from "../pages/Locations";
import {Episodes} from "../pages/Episodes";
import {Home} from "../pages/Home"
import {Characters} from "../pages/Characters"

export default function RoutesMain() {
    return (
        <Routes>
            <Route path={'/'} exact="true" element={<Home />}/>
            <Route path={'/favorites'} element={<Favorites />}/>
            <Route path={'/project'} element={<Project />}/>
            <Route path="/:page?"  element={<Characters />}/>
            <Route path={'/locations'} element={<Locations />}/>
            <Route path={'/episodes'} element={<Episodes />}/>
        </Routes>
    );
}