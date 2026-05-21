import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";

const Home = () => {
    const mechanisms = [
        {
            icon: "🛡️",
            title: "Beta-lactam Resistance",
            desc: "Kháng sinh nhóm Beta-lactam thông qua enzyme phân hủy."
        },
        {
            icon: "💧",
            title: "Efflux Pump",
            desc: "Bơm tống thuốc ra ngoài màng tế bào vi khuẩn."
        },
        {
            icon: "🎯",
            title: "Target Alteration",
            desc: "Đột biến làm thay đổi đích tác dụng của kháng sinh."
        },
        {
            icon: "⚗️",
            title: "Enzymatic Inactivation",
            desc: "Sản sinh enzyme làm mất hoạt tính của thuốc."
        }
    ];

    return (
        <>
            <HeroSection />
            <section className="mechanism-section">
                <h2>4 Cơ chế kháng được phân loại</h2>
                <p className="section-subtitle">Hệ thống hỗ trợ nhận diện các cơ chế kháng thuốc phổ biến nhất</p>

                <div className="mechanism-grid">
                    {mechanisms.map((item, index) => (
                        <div className="mechanism-card" key={index}>
                            <div className="card-header">
                                <span className="icon">{item.icon}</span>
                                <h3>{item.title}</h3>
                            </div>
                            <p className="card-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>


                <div className="center mt-2">
                    <Link to="/predict" className="secondary-btn">
                        Tìm hiểu thêm về mô hình
                    </Link>
                </div>
            </section>
        </>
    );
}

export default Home;