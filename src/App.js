import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import Home from "./components/LoginPage";
import RoboticArm from "./components/RoboticArmPage";

const { Header, Content } = Layout;
export default function App() {
  return (
    <Router>
      <Layout style={{ height: "100vh" }}>
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
            background: "#2999A6"
          }}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ background: "#2999A6" }}
          >
            <Menu.Item key="1">
              {" "}
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              {" "}
              <Link to="RoboticArm">Robotic Arm</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 120, width:500 }}
          ></div>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/RoboticArm" component={RoboticArm}></Route>
          </Switch>
        </Content>
      </Layout>
    </Router>
  );
}
