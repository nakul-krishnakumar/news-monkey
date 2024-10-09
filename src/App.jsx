import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
    const pageSize = 15;

    const [progress, setProgress] = useState(0);
    return (
        <div>
            <Router>
                <NavBar />
                <LoadingBar
                    color='#f11946'
                    progress={progress}
                />
                <Routes>
                    <Route exact path="/" element={<News key="general" pageSize={pageSize} category={"general"} setProgress={setProgress} />} />
                    <Route exact path="/business" element={<News key="business" pageSize={pageSize} category={"business"} setProgress={setProgress} />} />
                    <Route exact path="/entertainment" element={<News key="entertainment" pageSize={pageSize} category={"entertainment"} setProgress={setProgress} />} />
                    <Route exact path="/health" element={<News key="health" pageSize={pageSize} category={"health"} setProgress={setProgress} />} />
                    <Route exact path="/science" element={<News key="science" pageSize={pageSize} category={"science"} setProgress={setProgress} />} />
                    <Route exact path="/sports" element={<News key="sports" pageSize={pageSize} category={"sports"} setProgress={setProgress} />} />
                    <Route exact path="/technology" element={<News key="technology" pageSize={pageSize} category={"technology"} setProgress={setProgress} />} />

                </Routes>
            </Router>
        </div>
    );

}

export default App;
