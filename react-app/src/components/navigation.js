import { Menu } from 'antd';
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"> <Link to="/">My list </Link></Menu.Item>
        <Menu.Item key="2"> <Link to="/add"> Add to list </Link></Menu.Item>    
        <Menu.Item key="3"> <Link to="login"> Login </Link></Menu.Item>
      </Menu>
    </>
  );
}

export default Navbar;