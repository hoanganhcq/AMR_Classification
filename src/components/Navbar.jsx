import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="logo">🧬 AMR Classifier</div>

            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/predict">Predict</NavLink>
                <NavLink to="/results">Results</NavLink>
                <NavLink to="/evaluation">Evaluation</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
        </header>
    );
}

export default Navbar;