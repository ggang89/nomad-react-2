import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={ <Detail />}/>
        <Route path="/" element={ <Home />}/>
        {/* <Route path="*" element={<h1>Not Found Page</h1>}/> */}
      </Routes>
    </Router>
  );
}

export default App;

