import { createContext, useContext, useState } from "react";

const PredictionContext = createContext();

export function PredictionProvider({ children }) {
    const [predictionResult, setPredictionResult] = useState(null);

    return (
        <PredictionContext.Provider
            value={{
                predictionResult,
                setPredictionResult,
            }}
        >
            {children}
        </PredictionContext.Provider>
    );
}

export function usePredictionContext() {
    return useContext(PredictionContext);
}