import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Predict from "../pages/Predict";
// // import Results from "../pages/Results";
// // import Evaluation from "../pages/Evaluation";
// // import About from "../pages/About";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="predict" element={<Predict />} />
                {/* <Route path="results" element={<Results />} />
                <Route path="evaluation" element={<Evaluation />} />
                <Route path="about" element={<About />} /> */}
            </Route>
        </Routes>
    );
}

export default AppRoutes;