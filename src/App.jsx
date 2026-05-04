import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { PredictionProvider } from "./context/PredictionContext";

const App = () => {
    return (
        <PredictionProvider>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </PredictionProvider>
    );
}

export default App;