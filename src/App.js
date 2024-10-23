import "./App.css";
import Footer from "../src/Components/footer";
import Router from "./router";
import Header from "./Components/header/"

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
