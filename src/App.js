import "./App.scss";
import React from "react";
import { Route, Routes } from "react-router-dom";
import DesktopHeader from "./components/header/DesktopHeader";
import OurServices from "./components/home/services/OurServices";
import OurTeam from "./components/home/team/OurTeam";
import OurClients from "./components/home/clients/OurClients";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route  path="/"
          element={
            <>
              <DesktopHeader />
              <OurServices />
              <OurTeam/>
              <OurClients/>
            </>
          } />
      </Routes>
    </React.Fragment>
  );
}

export default App;
