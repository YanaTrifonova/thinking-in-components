// App.js
import React from "react";
import Header from "./components/header"
import Content from "./components/content";
import Footer from "./components/footer"
import "./App.css";

export default function App() {
  return (
      <div>
        <Header />

        <div className="section-header-spacer"/>

        <Content />

        <div className="section-line">
          <div className="line "/>
        </div>

        <Footer />
      </div>
  );
}
