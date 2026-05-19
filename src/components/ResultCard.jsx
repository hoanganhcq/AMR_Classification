const ResultCard = ({ result }) => {
    const probabilities = result.probabilities || {};

    return (
        <div className="result-grid">
            <div className="result-card">
                <p className="small-title">Predicted Mechanism</p>

                <h2>{result.predicted_class}</h2>

                <p>
                    <strong>Sequence ID:</strong> {result.sequence_id}
                </p>

                <p>
                    <strong>Sequence Type:</strong> {result.sequence_type}
                </p>

                <p>
                    <strong>Model:</strong> {result.model}
                </p>

                <p>
                    <strong>Confidence:</strong>{" "}
                    {(result.confidence * 100).toFixed(2)}%
                </p>
            </div>

            <div className="result-card">
                <p className="small-title">Class Probability</p>

                {Object.entries(probabilities).map(([label, value]) => (
                    <div
                        className={
                            label === result.predicted_class
                                ? "probability-item highlight"
                                : "probability-item"
                        }
                        key={label}
                    >
                        <span>{label}</span>
                        <strong>{(value * 100).toFixed(2)}%</strong>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResultCard;