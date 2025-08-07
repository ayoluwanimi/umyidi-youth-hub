import { Routes, Route } from "react-router-dom";
import HomePageSections from "./components/HomePageSections";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePageSections />} />
    </Routes>
  );
}

export default App;