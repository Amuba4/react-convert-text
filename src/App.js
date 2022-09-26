import logo from "./logo.svg";
import "./App.css";
import Navbar from "./componants/Navbar";
import TextForm from "./componants/TextForm"
function App() {
  return (
    <>
      <Navbar title="Mywebsite"/>
      <div className="container my-3">
      <TextForm heading="Enter the text below"/>
      </div>

    </>
  );
}

export default App;
