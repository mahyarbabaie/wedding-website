import NotFound from "./app/pages/NotFound.tsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WeddingSiteManager from "./app/WeddingSiteManager.tsx";
import Modal from "react-modal";

Modal.setAppElement('#root');

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<WeddingSiteManager/>}/>
              <Route path="/*" element={<NotFound/>}/>
          </Routes>
      </Router>
  )
}

export default App
