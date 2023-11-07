import "./App.scss";
import React from "react";
import { Route, Routes } from "react-router-dom";
import DesktopHeader from "./components/header/DesktopHeader";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route  path="/"
          element={
            <>
              <DesktopHeader />
              {/* <Services /> */}
            </>
          } />
      </Routes>
    </React.Fragment>
  );
}

export default App;
