import UploadBox from "../components/UploadBox";

function Predict() {
    return (
        <section className="page">
            <p className="eyebrow">Prediction Tool</p>
            <h1>Upload FASTA Sequence</h1>

            <p>
                Tải lên file FASTA hoặc nhập trực tiếp chuỗi DNA/protein để mô phỏng
                quá trình phân loại cơ chế kháng kháng sinh.
            </p>

            <UploadBox />
        </section>
    );
}

export default Predict;