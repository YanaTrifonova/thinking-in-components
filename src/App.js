// App.js
import React from "react";
import Header from "./components/header"
import SectionHeaderSpacer from "./helpers/sectionHeaderSpacer";
import Content from "./components/content";
import Footer from "./components/footer"
import "./App.css";
import SectionLine from "./helpers/sectionLine";

export default function App() {
    return (
        <div>
            <Header/>
            <SectionHeaderSpacer />
            <Content/>
            <SectionLine />
            <Footer/>
        </div>
    );
}
