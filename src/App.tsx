import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import CreateUser from "./Page/UserPage";

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/CreateUser" element={<CreateUser/>}/>
      </Routes>
    </Router>
  );
}

export default App
