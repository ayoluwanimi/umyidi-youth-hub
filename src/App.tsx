import { Routes, Route } from "react-router-dom";
import HomePageSections from "./components/HomePageSections";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePageSections />} />
      {/* Add other routes here if needed */}
    </Routes>
  );
}

export default App;