import MetricCard from "../components/MetricCard";

const Evaluation = () => {
    return (
        <section className="page">
            <p className="eyebrow">Model Performance</p>
            <h1>Model Evaluation</h1>

            <div className="metric-grid">
                <MetricCard title="Accuracy" value="0.86" />
                <MetricCard title="Macro F1-score" value="0.84" />
                <MetricCard title="Classes" value="4" />
                <MetricCard title="Best Model" value="Random Forest" />
            </div>

            <div className="table-card">
                <h2>Model Comparison</h2>

                <table>
                    <thead>
                        <tr>
                            <th>Model</th>
                            <th>Accuracy</th>
                            <th>Macro F1</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Logistic Regression</td>
                            <td>0.78</td>
                            <td>0.76</td>
                        </tr>

                        <tr>
                            <td>Random Forest</td>
                            <td>0.86</td>
                            <td>0.84</td>
                        </tr>

                        <tr>
                            <td>SVM</td>
                            <td>0.83</td>
                            <td>0.81</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default Evaluation;