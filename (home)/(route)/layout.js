import React from 'react';
import SideBarNav from './../_components/SideBarNav';
import Header from './../_components/Header';
import './Layout.css'; // Import the CSS file

const HomeLayout = ({ children }) => {
  return (
    <div className='layout-container'>
      <div className="sidebar-container">
        <SideBarNav />
      </div>
      <div className="content-container">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default HomeLayout;
