const HeroSection = () => {
    return (
        <section className="hero">
            <div>
                <p className="eyebrow">Antimicrobial Resistance Classification</p>

                <h1>Phân loại cơ chế kháng kháng sinh từ chuỗi gene/protein</h1>

                <p className="hero-desc">
                    Giao diện mô phỏng hệ thống upload chuỗi FASTA, trích xuất đặc trưng
                    và phân loại cơ chế kháng kháng sinh bằng mô hình học máy.
                </p>

                <div className="pipeline">
                    <span>FASTA</span>
                    <span>→</span>
                    <span>Preprocess</span>
                    <span>→</span>
                    <span>ML Model</span>
                    <span>→</span>
                    <span>Result</span>
                </div>
            </div>

            <div className="hero-card">
                <h2>AMR Classification</h2>
                <p>
                    Hỗ trợ phân tích nhanh gene/protein liên quan đến kháng kháng sinh.
                </p>
            </div>
        </section>
    );
}

export default HeroSection;