import React, {useState, useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom'
import {AuthContext} from "./Context/Context";
import {Header} from "./components/Header/Header";
import AppRoutes from "./components/appRoutes";

function App() {
    const [isAuth,setIsAuth] = useState(false);

  return (
      <AuthContext.Provider value={{
          isAuth,
          setIsAuth

      }}>
          <BrowserRouter>
              <Header/>
              <AppRoutes/>
          </BrowserRouter>
      </AuthContext.Provider>
  );
}

export default App;
