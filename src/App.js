import "./App.css";
import Header from "../src/Components/header";
import Footer from "../src/Components/footer";
import Router from "./router";

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
