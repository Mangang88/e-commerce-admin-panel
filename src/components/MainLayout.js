import React, { useState } from 'react';
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlinePicLeft,
  AiOutlinePicRight,
} from 'react-icons/ai';
import { Outlet, Link } from 'react-router-dom';
import { HiOutlineUsers } from 'react-icons/hi';
import { FaClipboardList, FaBloggerB } from 'react-icons/fa';
import { Layout, Menu, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { IoIosNotifications } from 'react-icons/io';

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="text-white fs-5 text-center py-3 mb-0">
            <span className="sm-logo">MC</span>
            <span className="lg-logo">Mangang Corner</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick={({ key }) => {
            if (key === 'signout') {
            } else {
              navigate(key);
            }
          }}
        >
          <Menu.Item key="dashboard">
            <Link to="/dashboard">
              <AiOutlineDashboard className="fs-4" />
              <span>Dashboard</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="customers">
            <Link to="/customers">
              <HiOutlineUsers className="fs-4" />
              <span>Customers</span>
            </Link>
          </Menu.Item>
          <Menu.SubMenu
            key="catalog"
            title={
              <span>
                <AiOutlineShoppingCart className="fs-4" />
                <span>Catalog</span>
              </span>
            }
          >
            <Menu.Item key="product">
              <Link to="/catalog/product">
                <span>Add Product</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="list-product">
              <Link to="/catalog/list-product">
                <span>Product List</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="brand">
              <Link to="/catalog/brand">
                <span>Brand</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="list-brand">
              <Link to="/catalog/list-brand">
                <span>Brand List</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="category">
              <Link to="/catalog/category">
                <span>Category</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="list-category">
              <Link to="/catalog/list-category">
                <span>Category List</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="color">
              <Link to="/catalog/color">
                <span>Color</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="list-color">
              <Link to="/catalog/list-color">
                <span>Color List</span>
              </Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="orders">
            <Link to="/orders">
              <FaClipboardList className="fs-4" />
              <span>Orders</span>
            </Link>
          </Menu.Item>
          <Menu.SubMenu
            key="blogs"
            title={
              <span>
                <FaBloggerB className="fs-4" />
                <span>Blogs</span>
              </span>
            }
          >
            <Menu.Item key="blog">
              <Link to="/blogs/blog">
                <span>Add Blog</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="blog-list">
              <Link to="/blogs/blog-list">
                <span>Blog List</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="blog-category">
              <Link to="/blogs/blog-category">
                <span>Add Blog Category</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="blog-category-list">
              <Link to="/blogs/blog-category-list">
                <span>Blog Category List</span>
              </Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="enquiries">
            <Link to="/enquiries">
              <FaClipboardList className="fs-4" />
              <span>Enquiries</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="d-flex justify-content-between ps-3 pe-5"
          style={{ padding: 0, background: '#fff' }}
        >
          <Button
            type="text"
            icon={collapsed ? <AiOutlinePicRight /> : <AiOutlinePicLeft />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div className="d-flex gap-4 align-items-center">
            <div className="position-relative">
              <IoIosNotifications className="fs-4" />
              <span className="badge bg-warning rounded-circle p-1 position-absolute">
                3
              </span>
            </div>
            <div
              className="d-flex gap-3 align-items-center"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div>
                <img
                  width={32}
                  height={32}
                  src="https://accounts.google.com/SignOutOptions?hl=en-GB&continue=https://mail.google.com&service=mail&ec=GBRAFw"
                  alt=""
                />
              </div>
              <div>
                <h5 className="mb-0">Mangang</h5>
                <p className="mb-0">inunganbamangang88@gmail.com</p>
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: 'auto', lineHeight: '20px' }}
                    to="/"
                  >
                    View Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: 'auto', lineHeight: '20px' }}
                    to="/"
                  >
                    Signout
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: '#fff',
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;