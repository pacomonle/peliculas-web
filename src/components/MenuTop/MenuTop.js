import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import "./MenuTop.scss";

const MenuTop = () => {
  return (
    <div className="menu_top">
      <div className="menu_top__logo">
        <Logo></Logo>
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[1]}>
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/newMovies">Ultimos Lanzamientos</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/popular">Mas populares</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/search">Buscador</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default MenuTop;
