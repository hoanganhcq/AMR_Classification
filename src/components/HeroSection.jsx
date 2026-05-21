import React from 'react';

const HeroSection = () => {
    const pipelineSteps = [
        { id: 1, name: "FASTA", icon: "🧬" },
        { id: 2, name: "Preprocess", icon: "⚙️" },
        { id: 3, name: "ML Model", icon: "🧠" },
        { id: 4, name: "Result", icon: "📊", isFinal: true }
    ];

    return (
        <section className="hero">
            <div className="hero-content">
                <p className="eyebrow">ANTIMICROBIAL RESISTANCE CLASSIFICATION</p>

                <h1>Phân loại cơ chế kháng kháng sinh từ chuỗi gene/protein</h1>

                <p className="hero-desc">
                    Giao diện mô phỏng hệ thống upload chuỗi FASTA, trích xuất đặc trưng
                    và phân loại cơ chế kháng kháng sinh bằng mô hình học máy.
                </p>


                <div className="modern-pipeline">
                    {pipelineSteps.map((step, index) => (
                        <React.Fragment key={step.id}>
                            <div className={`pipeline-step ${step.isFinal ? 'final-step' : ''}`}>
                                <span className="step-icon">{step.icon}</span>
                                <span className="step-name">{step.name}</span>
                            </div>

                            {index < pipelineSteps.length - 1 && (
                                <div className="pipeline-arrow">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
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