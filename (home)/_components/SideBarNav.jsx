"use client";
import React, { useState } from "react";
import Link from "next/link"; // Importing Link for routing
import "./separate.css";
import Image from "next/image";
import { Search, Layout, Shield, Mail } from "lucide-react";

const SideBarNav = () => {
    // Defining the menu list for sidebar
    const menuList = [
        { id: 1, name: "Browse", icon: Search, path: "/browse" },
        { id: 2, name: "Dashboard", icon: Layout, path: "/dashboard" },
        { id: 3, name: "Loans & Schemes", icon: Shield, path: "/upgrade" },
        { id: 4, name: "Task Status", icon: Mail, path: "/newsletter" },
    ];

    // Active state to highlight selected menu item
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <div className="sidebar">
            <div className="logo">
                <Image src="/logo.jpg" alt="logo" width={190} height={80} />
            </div>
            <div className="menu">
                {menuList.map((item, index) => (
                    // Wrap the menu items with Link component for navigation
                    <Link href={item.path} key={item.id}>
                        <div
                            className={`menu-item ${activeIndex === index ? "active" : ""}`}
                            onClick={() => setActiveIndex(index)} // Set active index when clicked
                        >
                            <item.icon className="menu-icon" /> {/* Icon for the menu item */}
                            <h2 className="menu-text">{item.name}</h2> {/* Menu item name */}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SideBarNav;
