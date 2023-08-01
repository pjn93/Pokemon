import React, { useState } from "react";
import { Card, Layout, Menu } from "antd";
import {  Dropdown } from 'antd';
import { NavLink } from "react-router-dom";
import "./dashboard.css";
import PROFILE from "./profile.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiPagesLine } from "react-icons/ri";
import { BsGlobe } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { AiOutlineBell } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { HiOutlineHome } from "react-icons/hi";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(
    <NavLink style={{ textDecoration: "none" }} to="/dashboard">
      <h6>Dashboard</h6>
    </NavLink>,
    "2",
    <MdDashboard size={18} />
  ),
  getItem(
    <NavLink style={{ textDecoration: "none" }} to="/homepage">
      <h6>Home Page </h6>
    </NavLink>,
    "3",
    <HiOutlineHome size={18} />
  ),
  getItem(
    <NavLink style={{ textDecoration: "none" }} to="/dummypage">
      <h6>Dummy Page</h6>
    </NavLink>,
    "4",
    <RiPagesLine size={18} />
  ),
];


const menu = (
  <Menu>
    <Menu.Item key="1">Edit Profile</Menu.Item>
    <Menu.Item key="2">Account Setting</Menu.Item>
    <Menu.Item key="3"><NavLink to='/'>Sign Out</NavLink></Menu.Item>
  </Menu>
);

const Sidebar = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <Layout className="container">
        <Header className="header">
          <div className="head">
            <div className="h1">
              <div className="brand"> Seatle</div>
              <GiHamburgerMenu
                onClick={() => setCollapsed(!collapsed)}
                size={28}
                style={{ marginLeft: "10", marginTop: "5px" }}
              />
            </div>
            <div className="h2">
              <AiOutlineBell size={25} />
              <BsGlobe size={20} />
              <FiSettings size={20} />
              

 <Dropdown overlay={menu} placement="bottomLeft">
 <img
                src={PROFILE}
                alt="profile"
                style={{ width: "40px", height: "40px"}}
              
              />
    </Dropdown>
            </div>
          </div>
        </Header>
        <Layout>
          <Sider style={{left:'0', position:'fixed'}} collapsed={collapsed} mode="inline" theme="light">
            <Menu
              
              className="menu"
              items={items}
              defaultSelectedKeys={["0"]}
              mode="inline"
            />
        
          </Sider>
          <Content className="content">
         
              {children}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Sidebar;
