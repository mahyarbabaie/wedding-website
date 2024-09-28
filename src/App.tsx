import NotFound from "./app/pages/NotFound.tsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./app/pages/Home.tsx";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/*" element={<NotFound/>}/>
          </Routes>
      </Router>
  )
}

export default App
