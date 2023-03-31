import React, { useState } from "react";
import { Layout, Menu } from "antd";
import About from "./views/about/index";
import Projects from "./views/projects/index";
import Contact from "./views/contact/index";

const { Header, Content, Footer } = Layout;

function App() {
  const [activeTab, setActiveTab] = useState("1");

  const handleMenuClick = (e) => {
    setActiveTab(e.key);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "1":
        return <About />;
      case "2":
        return <Projects />;
      case "3":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          onClick={handleMenuClick}
        >
          <Menu.Item key="1">About</Menu.Item>
          <Menu.Item key="2">Projects</Menu.Item>
          <Menu.Item key="3">Contact</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px", marginTop: 64 }}>
        <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
          {renderContent()}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Marcelo Villarreal ©{new Date().getFullYear()} Created with Ant Design
      </Footer>
    </Layout>
  );
}

export default App;