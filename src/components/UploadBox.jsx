import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePredictionContext } from "../context/PredictionContext";
import { mockPredict } from "../services/mockPredictionService";

const UploadBox = () => {
    const [sequence, setSequence] = useState("");
    const [sequenceType, setSequenceType] = useState("DNA");
    const [model, setModel] = useState("Random Forest");

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const { setPredictionResult } = usePredictionContext();
    const navigate = useNavigate();

    const placeholderText = sequenceType === "DNA"
        ? ">dna_seq_001\nATGGCGATTCAGGCCGATCTGGATCAAGAT\n..."
        : ">protein_seq_001\nMVKVYAPASSANMSVGFDVLGAAVTPVDGALLGDVVTVEAA...\n...";

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            setSequence(event.target.result);
            setError("");
        };
        reader.readAsText(file);
    };

    const handleRunPrediction = () => {
        if (!sequence.trim()) {
            setError("Vui lòng tải file hoặc điền chuỗi FASTA trước khi chạy");
        }

        setError("");
        setIsLoading(true);

        setTimeout(() => {
            const result = mockPredict(sequence, sequenceType, model);
            setPredictionResult(result);
            navigate("/results");
        }, 1500);

    };

    return (
        <div className="predict-layout">
            <form className="predict-form">
                <label>Upload FASTA file</label>
                <input type="file" accept=".fasta,.fa,.txt" onChange={handleFileUpload} />

                <label>Hoặc paste FASTA sequence</label>
                <textarea
                    rows="10"
                    value={sequence}
                    onChange={(e) => {
                        setSequence(e.target.value);
                        if (error) setError("");
                    }}
                    placeholder={placeholderText}
                />

                <div className="form-row">
                    <div>
                        <label>Sequence type</label>
                        <select
                            value={sequenceType}
                            onChange={(e) => setSequenceType(e.target.value)}
                        >
                            <option value="DNA">DNA</option>
                            <option value="Protein">Protein</option>
                        </select>
                    </div>

                    <div>
                        <label>Model</label>
                        <select value={model} onChange={(e) => setModel(e.target.value)}>
                            <option value="Random Forest">Random Forest</option>
                            <option value="Logistic Regression">Logistic Regression</option>
                            <option value="SVM">SVM</option>
                        </select>
                    </div>
                </div>

                {error && <p style={{ color: 'red', fontSize: '0.9rem', marginBottom: '10px' }}>{error}</p>}

                <button type="button"
                    onClick={handleRunPrediction}
                    disabled={isLoading || !sequence.trim()}
                    style={{ opacity: (isLoading || !sequence.trim()) ? 0.6 : 1, cursor: isLoading ? 'wait' : 'pointer' }}
                >
                    {isLoading ? "Processing..." : "Run Classification"}
                </button>
            </form>

            <div className="info-panel">
                <h3>Pipeline</h3>

                <div className="step active">
                    <span>1</span>
                    <p>Upload FASTA</p>
                </div>

                <div className="step">
                    <span>2</span>
                    <p>Preprocessing</p>
                </div>

                <div className="step">
                    <span>3</span>
                    <p>Feature Extraction</p>
                </div>

                <div className="step">
                    <span>4</span>
                    <p>ML Prediction</p>
                </div>
            </div>
        </div>
    );
};

export default UploadBox;