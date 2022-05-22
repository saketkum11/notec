import "./App.css";
import logo from "./logo.png";
import { Header } from "./Pages";
import { MyRoute } from "./Routes/MyRoutes";

function App() {
  return (
    <div className="App">
      <Header />
      <MyRoute />
    </div>
  );
}

export default App;
