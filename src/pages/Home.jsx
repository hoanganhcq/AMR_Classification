import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";

function Home() {
    return (
        <>
            <HeroSection />

            <section className="mechanism-section">
                <h2>4 Cơ chế kháng được phân loại</h2>

                <div className="mechanism-grid">
                    <div className="mechanism-card">🛡️ Beta-lactam Resistance</div>
                    <div className="mechanism-card">💧 Efflux Pump</div>
                    <div className="mechanism-card">🎯 Target Alteration</div>
                    <div className="mechanism-card">⚗️ Enzymatic Inactivation</div>
                </div>

                {/* <div className="center">
                    <Link to="/predict" className="primary-btn">
                        Start Prediction
                    </Link>
                </div> */}
            </section>
        </>
    );
}

export default Home;