import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/layout/navbar/Navbar";
import ContentFooter from "./components/layout/navbar/ContentFooter"; // Neue Komponente importieren

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <ContentFooter /> {/* Neue Komponente hier einfügen */}
    </div>
  );
}

export default App;
