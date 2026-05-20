import { Link } from "react-router-dom";
import { usePredictionContext } from "../context/PredictionContext";
import ResultCard from "../components/ResultCard";

const Results = () => {
    // Get data predictions from the context API
    const { predictionResult } = usePredictionContext();

    if (!predictionResult) {
        return (
            <section className="page">
                <h1>Prediction Result</h1>
                <p>Chưa có kết quả dự đoán</p>

                <Link to="/predict">Go to Predict</Link>
            </section>
        );
    }

    const resultsArray = Array.isArray(predictionResult) ? predictionResult : [predictionResult];
    // Use the most reliable result to display on ResultCard
    const primaryResult = resultsArray[0];

    return (
        <section className="page">
            <p className="eyebrow">Classification Result</p>
            <h1>Prediction Result</h1>

            {/* Hiển thị chi tiết kết quả đầu tiên */}
            <ResultCard result={primaryResult} />

            {/* Chỉ hiển thị bảng nếu có dữ liệu */}
            {resultsArray.length > 0 && (
                <div className="table-card" style={{ marginTop: '2rem' }}>
                    <h2>Batch Prediction Results ({resultsArray.length} sequences)</h2>

                    <table>
                        <thead>
                            <tr>
                                <th>Sequence ID</th>
                                <th>Length</th>
                                <th>Predicted Class</th>
                                <th>Confidence</th>
                            </tr>
                        </thead>

                        <tbody>
                            {resultsArray.map((item, index) => (
                                <tr key={item.sequence_id || index}>
                                    <td>{item.sequence_id || `seq_unknown_${index}`}</td>
                                    <td>{item.length || "N/A"}</td>
                                    <td>
                                        <span className="mechanism-badge">
                                            {item.predicted_class}
                                        </span>
                                    </td>
                                    <td>
                                        <strong>{(item.confidence * 100).toFixed(2)}%</strong>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </section>
    );
}

export default Results;