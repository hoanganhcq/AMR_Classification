const About = () => {
    return (
        <section className="page about-page">
            <p className="eyebrow">About Project</p>
            <h1>About Antimicrobial Resistance Classification</h1>
            <br />
            <div className="about-card">
                <h2>Giới thiệu đề tài</h2>
                <p>
                    Kháng kháng sinh (Antimicrobial Resistance - AMR) là một
                    thách thức lớn trong y sinh học và sức khỏe cộng đồng.
                    Việc phát hiện và phân loại nhanh các gene kháng kháng sinh
                    có thể hỗ trợ phân tích vi sinh, giám sát dịch tễ và nghiên
                    cứu phát triển thuốc.
                </p>

                <p>
                    Dự án này xây dựng giao diện mô phỏng hệ thống phân loại
                    cơ chế kháng kháng sinh từ chuỗi FASTA DNA hoặc protein,
                    sử dụng dữ liệu tham khảo từ CARD Database và các mô hình
                    học máy truyền thống.
                </p>
            </div>


            <div className="about-card">
                <h2>Mục tiêu dự án</h2>
                <ul className="about-list">
                    <li>Xây dựng bộ dữ liệu rút gọn từ CARD Database.</li>
                    <li>Chuẩn hóa và làm sạch dữ liệu chuỗi FASTA.</li>
                    <li>Gán nhãn dữ liệu theo 4 cơ chế kháng kháng sinh.</li>
                    <li>Trích xuất đặc trưng từ chuỗi gene hoặc protein.</li>
                    <li>Huấn luyện mô hình học máy cho bài toán phân loại nhiều lớp.</li>
                    <li>Xây dựng giao diện web cho phép nhập chuỗi và xem kết quả dự đoán.</li>
                </ul>
            </div>


            <div className="about-card">
                <h2>Phạm vi nghiên cứu</h2>
                <div className="info-grid">
                    <div>
                        <h3>Nguồn dữ liệu</h3>
                        <p>
                            The Comprehensive Antibiotic Resistance Database
                        </p>
                    </div>

                    <div>
                        <h3>Số lượng dữ liệu</h3>
                        <p>Khoảng 400 - 700 chuỗi gene/protein</p>
                    </div>

                    <div>
                        <h3>Bài toán</h3>
                        <p>Phân loại nhiều lớp</p>
                    </div>

                    <div>
                        <h3>Mô hình</h3>
                        <p>Logistic Regression, Random Forest, SVM</p>
                    </div>
                </div>
            </div>


            <div className="about-card">
                <h2>Quy trình xử lý hệ thống</h2>

                <div className="pipeline">
                    <span>FASTA</span>
                    <span>→</span>
                    <span>Data Cleaning</span>
                    <span>→</span>
                    <span>Feature Extraction</span>
                    <span>→</span>
                    <span>ML Model</span>
                    <span>→</span>
                    <span>Result</span>
                </div>


                <p>
                    Người dùng nhập hoặc tải lên chuỗi FASTA. Hệ thống thực hiện
                    kiểm tra định dạng, tiền xử lý dữ liệu, trích xuất đặc trưng
                    như k-mer frequency, độ dài sequence và thành phần amino acid,
                    sau đó đưa vào mô hình học máy để dự đoán cơ chế kháng.
                </p>
            </div>


            <div className="about-card">
                <h2>4 cơ chế kháng được phân loại</h2>

                <div className="mechanism-grid">
                    <div className="mechanism-card">🛡️ Beta-lactam Resistance</div>
                    <div className="mechanism-card">💧 Efflux Pump</div>
                    <div className="mechanism-card">🎯 Target Alteration</div>
                    <div className="mechanism-card">⚗️ Enzymatic Inactivation</div>
                </div>
            </div>


            <div className="about-card">
                <h2>Mô hình học máy sử dụng</h2>
                <ul className="about-list">
                    <li>
                        <strong>Logistic Regression:</strong> mô hình tuyến tính,
                        dễ triển khai và dùng làm baseline.
                    </li>
                    <li>
                        <strong>Random Forest:</strong> mô hình cây quyết định tổ hợp,
                        phù hợp với dữ liệu đặc trưng dạng bảng.
                    </li>
                    <li>
                        <strong>SVM:</strong> mô hình phân loại mạnh, phù hợp với
                        dữ liệu có số chiều đặc trưng cao như k-mer frequency.
                    </li>
                </ul>
            </div>


            <div className="about-card">
                <h2>Kết quả mong đợi</h2>
                <ul className="about-list">
                    <li>Bộ dữ liệu CARD rút gọn được xử lý và chuẩn hóa.</li>
                    <li>Mô hình phân loại đạt Macro F1-score trên 0.80.</li>
                    <li>Có báo cáo Accuracy, Macro F1-score và Confusion Matrix.</li>
                    <li>Giao diện web cho phép nhập/upload FASTA và xem kết quả phân loại.</li>
                </ul>
            </div>


            <div className="about-card">
                <h2>Tài liệu tham khảo</h2>
                <ol className="reference-list">
                    <li>The Comprehensive Antibiotic Resistance Database (CARD).</li>
                    <li>Gareth James et al., An Introduction to Statistical Learning, Springer.</li>
                    <li>Trevor Hastie et al., The Elements of Statistical Learning, Springer.</li>
                </ol>
            </div>
        </section>
    );
}

export default About;