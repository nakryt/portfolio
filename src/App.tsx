import React from "react";
import "./App.scss";
// import { Navbar } from "./components/Navbar/Navbar";
import ProjectList from "./components/ProjectList/ProjectList";
import Title from "./components/ui/Title/Title";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      {/*<Navbar />*/}
      <div className="container">
        <Title />
        <ProjectList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
