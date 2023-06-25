import React, { Component } from 'react';
import { Content, Drawer, Header, Layout, Navigation } from "react-mdl";
import { Link } from "react-router-dom";
import Footer from "../src/components/footer";
import "./App.css";
import Main from "./components/main";
class App extends Component {
  render() {
    return (
        <div className="demo-big-content">
            <Layout>
                <Header
                    className="header-color"
                    title={
                        <Link style={{ textDecoration: "none", color: "white" }} to="/Portfolio">
                            My Portfolio
                        </Link>
                    }
                    scroll
                >
                    <Navigation>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer
                    title={
                        <Link style={{ textDecoration: "none", color: "black" }} to="/Portfolio">
                            My Portfolio
                        </Link>
                    }
                >
                    <Navigation>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/projects">Project</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main />
                </Content>
                <Footer></Footer>
            </Layout>
        </div>
    );
  }
}

export default App;
