import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "../assets/styles/Navbar.css";

const navLinks = [
    { path: "/", label: "Home" },
    { path: "/predict", label: "Predict" },
    { path: "/results", label: "Results" },
    { path: "/evaluation", label: "Evaluation" },
    { path: "/about", label: "About" },
];

const Navbar = () => {
    const [hoveredPath, setHoveredPath] = useState(null);
    const location = useLocation();

    return (
        <header className="navbar">
            <div className="logo">🧬 AMR Classifier</div>

            <nav className="nav-links">
                {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;

                    return (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className="nav-item"
                            onMouseEnter={() => setHoveredPath(link.path)}
                            onMouseLeave={() => setHoveredPath(null)}
                        >
                            {/* Lớp nền di chuyển (Active Highlight) */}
                            {isActive && !hoveredPath && (
                                <motion.div
                                    layoutId="navbar-highlight"
                                    className="nav-highlight"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                />
                            )}

                            {/* Lớp nền di chuyển Hover */}
                            {hoveredPath === link.path && (
                                <motion.div
                                    layoutId="navbar-highlight"
                                    className="nav-highlight hover-highlight"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                />
                            )}


                            <span className="nav-text">{link.label}</span>
                        </NavLink>
                    );
                })}
            </nav>
        </header>
    );
};

export default Navbar;