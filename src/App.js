import "./App.css";
import Footer from "./infra/components/Footer";
import NavBar from "./infra/components/NavBar";
import AppRouter from "./infra/routers/AppRouter";

function App() {
  return (
    <div className="page-container">
      <NavBar />
      <div className="content-wrap">
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
